import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
export default function MapViewScreen() {
  // WebSocket
  return (
    <View style={{flex: 1}}>
      <WebView
        style={{backgroundColor: 'white'}}
        originWhitelist={['*']}
        source={{
          uri: 'https://host-portf.web.app/Map',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }}
      />
    </View>
  );
}
