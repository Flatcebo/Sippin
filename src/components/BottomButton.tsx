import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles, SojuColor} from '../lib/GlobalStyles';
import {IconMaterialIcons} from '../lib/Icon';
import {scale} from '../utils/scaling';

interface BottomButtonProps {
  title?: string;
  onPress?: () => void;
  star?: boolean;
}

export default function BottomButton({
  title,
  onPress,
  star,
}: BottomButtonProps) {
  const [fillStar, setFillStar] = useState(false);
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        height: scale(70),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#cacaca',
      }}>
      {star && fillStar ? (
        <IconMaterialIcons
          name="star"
          size={30}
          color="yellow"
          onPress={() => setFillStar(false)}
        />
      ) : (
        <IconMaterialIcons
          name="star-outline"
          size={30}
          color="#333"
          onPress={() => setFillStar(true)}
        />
      )}
      {/* <IconMaterialIcons name="star-outline" size={30} color="#333" /> */}
      <Pressable
        //   {...rest}
        onPress={onPress}
        style={{
          backgroundColor: SojuColor,
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          height: '70%',
          borderRadius: 4,
        }}>
        <Text style={[globalStyles.font14, {color: 'white'}]}>{title}</Text>
      </Pressable>
    </View>
  );
}

// '#b5cf8c'
