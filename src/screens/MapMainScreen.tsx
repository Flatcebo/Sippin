import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
  Coord,
} from 'react-native-nmap';
import axios from 'axios';
import heartListData from '../lib/heartListData';
import {NMAP_API_KEY, NMAP_API_KEY_ID} from '../lib/NMAP_API_KEY';
import Geolocation from '@react-native-community/geolocation';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import {MapMainScreenProp} from '../types/RootStackProps';
import {Appbar, Searchbar, Text} from 'react-native-paper';
import SearchBar from '../components/SearchBar';
import ContentListItem from '../components/ContentListItem';
import {scale} from '../utils/scaling';
import ImageFlatList from '../components/ImageFlatList';

export default function MapMainScreen({navigation}: MapMainScreenProp) {
  const [markers, setMarkers] = useState<any>({});
  const [center, setCenter] = useState<any>(null);
  const flatListRef = useRef<FlatList | null>(null);
  const naverMapViewRef = useRef<any>(null);

  const scrollToItem = (index: number) => {
    flatListRef.current?.scrollToIndex({animated: true, index});
  };
  const markerData = heartListData.filter(item => item.coordinate);

  console.log(markerData[0].coordinate);
  console.log('ㅗㅑㅗㅑ');

  const snapToOffsets = useMemo(
    () => heartListData.map((_, idx) => idx * Dimensions.get('window').width),
    [heartListData],
  );
  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      // headerSearchBarOptions: {},
      header: () => (
        <Appbar.Header
          style={{
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}>
          <Appbar.BackAction
            size={26}
            style={{position: 'absolute', left: 16, zIndex: 200}}
            onPress={() => {
              navigation.pop();
            }}
          />
          <SearchBar
            pressableInput
            onPress={() => {
              navigation.push('SearchMyAround');
            }}
          />
        </Appbar.Header>
      ),
    });
  }, []);
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }, []);
  // 현재위치
  useEffect(() => {
    const aaa = Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setCenter({latitude: latitude, longitude: longitude, zoom: 14});
      //   setCurrentLocation({latitude: latitude, longitude: longitude});
    });
    return () => {
      aaa;
    };
  }, []);
  // 주소 => 좌표 변환
  // useEffect(() => {
  //   const geocode = async () => {
  //     try {
  //       const coordinates = await Promise.all(
  //         heartListData.map(async item => {
  //           const response = await axios.get(
  //             `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${item.address}`,
  //             {
  //               headers: {
  //                 'X-NCP-APIGW-API-KEY-ID': NMAP_API_KEY_ID,
  //                 'X-NCP-APIGW-API-KEY': NMAP_API_KEY,
  //               },
  //             },
  //           );
  //           const {addresses} = response.data;
  //           if (addresses && addresses.length > 0) {
  //             const {x, y} = addresses[0];
  //             return {
  //               latitude: parseFloat(y),
  //               longitude: parseFloat(x),
  //             };
  //           }
  //           return null;
  //         }),
  //       );
  //       const validCoordinates = coordinates.filter(
  //         coordinate => coordinate !== null,
  //       );

  //       setMarkers(validCoordinates);
  // console.log('지오코딩 렌더링 ===> MapMainScreen');
  //     } catch (error) {
  //       console.error('Error in geocoding:', error);
  //     }
  //   };
  //   geocode();
  // }, [markers]);
  const renderItem = useCallback(({item}: any) => {
    const onPressPushContents = () => {
      navigation.push('Content', {
        id: item.id,
        title: item.title,
        address: item.address,
        heart: item.heart,
        chat: item.chat,
        imageUri: item.imageUri,
        category: item.category,
        desc: item.desc,
        reviewImageUri: item.reviewImageUri,
        menu: item.menu,
      });
    };

    return (
      <View
        key={item.id}
        style={{
          backgroundColor: 'transparent',
          width: Dimensions.get('window').width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#eaeaea' : 'white',
              width: '90%',
              elevation: 6,
              flexDirection: 'row',
              borderRadius: 4,
              alignItems: 'center',
            },
          ]}>
          <Image
            source={{uri: item.imageUri}}
            width={Dimensions.get('window').width / 3}
            height={scale(140)}
            resizeMode="cover"
            style={{borderRadius: 4, marginHorizontal: '0%'}}
          />
          <View>
            <Text style={{}}>{item.title}</Text>
          </View>
        </Pressable>
      </View>
    );
  }, []);
  const handleMarkerClick = (marker: any) => {
    const moveToMarker = () => {
      setCenter({
        latitude: marker.latitude,
        longitude: marker.longitude,
        zoom: 16,
      });
    };
    return moveToMarker;
  };
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / Dimensions.get('window').width);
    const itemId = markerData[index].id;
    const itemCoordinate = markerData[index].coordinate;
    const move = () => {
      setCenter({
        latitude: itemCoordinate.latitude,
        longitude: itemCoordinate.longitude,
        zoom: 16,
      });
    };
    return move();
  };
  return (
    <>
      <NaverMapView
        ref={naverMapViewRef}
        style={{flex: 1}}
        center={center}
        // showsMyLocationButton={true}
        logoMargin={{bottom: 4, left: 4}}
        scaleBar={false}
        onMapClick={e => {
          console.log(e.latitude, e.longitude);
        }}
        zoomControl={false}>
        {markerData.map(
          (item: any, idx: number) =>
            item.coordinate && (
              <Marker
                key={idx}
                coordinate={item.coordinate}
                animated
                width={20}
                height={30}
                pinColor="#0000ff"
                onClick={handleMarkerClick(item.coordinate)}
              />
            ),
        )}
      </NaverMapView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: scale(160),
          top: 80,
          // zIndex: 300,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          // borderWidth: 1,
        }}>
        <FlatList
          ref={flatListRef}
          data={markerData}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          removeClippedSubviews
          initialNumToRender={10}
          snapToOffsets={snapToOffsets}
          decelerationRate={'fast'}
          onScroll={handleScroll}
        />
      </View>
    </>
  );
}
