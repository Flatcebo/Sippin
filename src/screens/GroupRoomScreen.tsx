import React, {useCallback, useEffect} from 'react';
import {Button, Image, Pressable, Text, View} from 'react-native';
import {GroupRoomScreenProp} from '../types/RootStackProps';
import {firebase} from '@react-native-firebase/database';

export default function GroupRoomScreen({
  navigation,
  route,
}: GroupRoomScreenProp) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  const reference = firebase
    .app()
    .database(
      'https://sippin-5e1d5-default-rtdb.asia-southeast1.firebasedatabase.app/',
    )
    .ref('/users/123');

  const inputChat = () => {
    try {
      reference.set('21');
    } catch (error) {
      console.log(error);
    }
  };
  const readChat = () => {
    reference.once('value').then(snapshot => {
      console.log('User data: ', snapshot.val());
    });
  };
  const updateChat = () => {
    reference
      .update({aa: 'hih'})
      .then(snapshot => console.log('update ===>', snapshot));
  };
  const deleteChat = () => {
    reference.remove(c => console.log('remove ==>', c));
  };

  const renderItem = useCallback(
    ({item}: any) => (
      <View key={item.id} style={{flexDirection: 'row', marginTop: '3%'}}>
        <View style={{flexDirection: 'row', maxWidth: '86%', columnGap: 6}}>
          <View style={{}}>
            <Image
              source={{uri: item.profileIMG, height: 40, width: 40}}
              style={{borderRadius: 100}}
            />
          </View>
          <View style={{maxWidth: '77%', rowGap: 6}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              {item.name}
            </Text>
            <Text
              style={{
                color: 'black',
                backgroundColor: '#d4d3d379',
                // width: 100,
                borderRadius: 8,
                padding: 10,
                lineHeight: 18,
              }}>
              {item.content}
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <Text style={{color: 'black', fontSize: 10}}>오후 5:52</Text>
          </View>
        </View>
      </View>
    ),
    [],
  );

  return <View style={{marginHorizontal: '3%'}}></View>;
}
