import {
  View,
  Image,
  Text,
  TextStyle,
  StyleProp,
  Pressable,
  GestureResponderEvent,
  ImageStyle,
  ViewStyle,
} from 'react-native';

interface ImageProps {
  uri: string;
  height: number;
  width?: number;
  text?: string;
  style?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  inline?: React.ReactNode;
  imageStyle?: StyleProp<ImageStyle>;
  layoutStyle?: StyleProp<ViewStyle>;
}

const ImageCard = (props: ImageProps) => {
  return (
    <View style={props.layoutStyle}>
      <Image
        source={{
          uri: props.uri,
          height: props.height,
          width: props.width,
        }}
        style={props.imageStyle}
      />
      {props.inline}
      {/* <Text style={(props.style, {textAlign: 'center', color: 'black'})}>
        {props.text}
      </Text> */}
    </View>
  );
};

export default ImageCard;
