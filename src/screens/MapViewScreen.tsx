import React, {useEffect, useState} from 'react';
import {Button, PermissionsAndroid, TextInput, View} from 'react-native';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
  Coord,
} from 'react-native-nmap';
import {NMAP_API_KEY, NMAP_API_KEY_ID} from '../lib/NMAP_API_KEY';
import axios from 'axios';
import {MapViewScreenProp} from '../types/RootStackProps';
import {SignatureColor, SojuColor} from '../lib/GlobalStyles';
import {CloseButton} from '../components/IconButtons';
export default function MapViewScreen({navigation, route}: MapViewScreenProp) {
  const {coordinate, title} = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerBackVisible: false,
      headerRight: ({canGoBack}) => <CloseButton />,
      headerShadowVisible: true,
    });
  });

  const [markerPosition, setMarkerPosition] = useState<any>({
    longitude: 126.9783696405205,
    latitude: 37.56659378491422,
  });
  // const encodedAddress = encodeURIComponent(address);
  // useEffect(() => {
  //   const geocode = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${address}`,
  //         {
  //           params: {
  //             query: address,
  //           },
  //           headers: {
  //             'X-NCP-APIGW-API-KEY-ID': NMAP_API_KEY_ID,
  //             'X-NCP-APIGW-API-KEY': NMAP_API_KEY,
  //           },
  //         },
  //       );

  //       const {addresses} = response.data;
  //       if (addresses && addresses.length > 0) {
  //         const {x, y} = addresses[0];
  //         setMarkerPosition({
  //           latitude: parseFloat(y),
  //           longitude: parseFloat(x),
  //         });
  //         // console.log(parseFloat(x));
  //       }
  // console.log('지오코딩 렌더링 ===> MapViewScreen');
  //     } catch (error) {}
  //   };
  //   geocode();
  // }, [address]);

  // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,{})
  return (
    <>
      <NaverMapView
        style={{flex: 1}}
        showsMyLocationButton={true}
        center={{...coordinate, zoom: 16}}
        scaleBar={false}
        liteModeEnabled={true}
        bearing={0}
        minZoomLevel={10}
        maxZoomLevel={18}
        useTextureView
        stopGesturesEnabled={true}
        zoomGesturesEnabled={true}
        zoomControl={true}
        tiltGesturesEnabled={false}>
        {coordinate && (
          <Marker
            coordinate={coordinate}
            width={20}
            height={30}
            pinColor="#571d1d"
          />
        )}

        {/* <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')} />

        <Marker
          coordinate={P1}
          pinColor="blue"
          onClick={() => console.warn('onClick! p1')}
        />
        <Marker
          coordinate={P2}
          pinColor="red"
          onClick={() => console.warn('onClick! p2')}
        />
        <Path
          coordinates={[P0, P1]}
          onClick={() => console.warn('onClick! path')}
          width={10}
        />
        <Polyline
          coordinates={[P1, P2]}
          onClick={() => console.warn('onClick! polyline')}
        />
        <Circle
          coordinate={P0}
          color={'rgba(255,0,0,0.3)'}
          radius={200}
          onClick={() => console.warn('onClick! circle')}
        />
        <Polygon
          coordinates={[P0, P1, P2]}
          color={`rgba(0, 0, 0, 0.5)`}
          onClick={() => console.warn('onClick! polygon')}
        /> */}
      </NaverMapView>
    </>
  );
}
