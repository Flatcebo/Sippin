import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
import {scale} from '../utils/scaling';

interface MapViewProps {
  address?: string;
}
export default function MapView({address}: MapViewProps) {
  const [markerPosition, setMarkerPosition] = useState<any>({
    longitude: 126.9783696405205,
    latitude: 37.56659378491422,
  });
  // const encodedAddress = encodeURIComponent(address);
  useEffect(() => {
    let isMounted = true;
    const geocode = async () => {
      try {
        const response = await axios.get(
          `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${address}`,
          {
            params: {query: address},
            headers: {
              'X-NCP-APIGW-API-KEY-ID': NMAP_API_KEY_ID,
              'X-NCP-APIGW-API-KEY': NMAP_API_KEY,
            },
          },
        );

        const {addresses} = response.data;
        if (isMounted && addresses && addresses.length > 0) {
          const {x, y} = addresses[0];
          setMarkerPosition({
            latitude: parseFloat(y),
            longitude: parseFloat(x),
          });
        } else {
          console.warn('주소가 유효하지 않습니다.');
        }
        console.log('지오코딩 렌더링 ===> MapViewComponent');
      } catch (error) {
        console.error('지오코딩 오류:', error);
      }
    };

    geocode();

    return () => {
      isMounted = false;
    };
  }, []);
  // console.log(markerPosition);
  return (
    <View style={[styles.mapViewContainer]}>
      <NaverMapView
        style={[{flex: 1}]}
        compass={false}
        useTextureView={true}
        center={{...markerPosition, zoom: 16}}
        scrollGesturesEnabled={false}
        scaleBar={false}
        zoomGesturesEnabled={false}
        zoomControl={false}>
        {markerPosition && (
          <Marker
            coordinate={markerPosition}
            width={20}
            height={30}
            pinColor="#571d1d"
          />
        )}
      </NaverMapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapViewContainer: {
    height: scale(160),
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: 'black',
  },
});
