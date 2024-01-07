import {useNavigation} from '@react-navigation/native';
import {Pressable, View} from 'react-native';
import {IconFeather} from '../lib/Icon';
import {RootStackParamList} from '../types/RootStackProps';

export default function BackVisible() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '13%',

        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Pressable
        style={{}}
        hitSlop={10}
        onPress={() => {
          navigation.goBack();
        }}>
        <IconFeather
          name="chevron-left"
          size={24}
          color="black"
          style={{textAlign: 'center'}}
        />
      </Pressable>
    </View>
  );
}
