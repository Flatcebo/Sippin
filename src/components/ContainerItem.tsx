import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {globalStyles} from '../lib/GlobalStyles';

interface ContainerItem {
  topContents?: React.ReactNode;
  bottomContents?: React.ReactNode;
  title?: string;
  text?: string;
  items?: string[];
  containerStyle?: StyleProp<ViewStyle>;
  betweenItem?: Array<{left: string; right: string}>;
}

export default function ContainerItem({
  topContents,
  bottomContents,
  title,
  items,
  containerStyle,
  betweenItem,
}: ContainerItem) {
  const reservationInfoStyles = {
    color: '#9a9a9a',
    fontSize: 16,
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.marginContents]}>
        {topContents}
        <Text style={[globalStyles.fontBold18, {marginBottom: 6}]}>
          {title}
        </Text>
        {items?.map((item: any, idx) => (
          <Text key={idx} style={[reservationInfoStyles]}>
            {item}
          </Text>
        ))}
        {betweenItem?.map((item, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // borderBottomWidth: 0.4,
              // paddingBottom: 6,
            }}>
            <Text
              style={[
                reservationInfoStyles,
                // globalStyles.fontBold18,
                // {marginTop: 6, textAlign: 'right'},
              ]}>
              {item.left}
            </Text>
            <Text
              style={[
                reservationInfoStyles,
                // globalStyles.fontBold18,
                // {marginTop: 6, textAlign: 'right'},
              ]}>
              {item.right}
            </Text>
          </View>
        ))}

        {bottomContents}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: '3%',
    borderBottomWidth: 0.4,
    borderColor: '#dadada',
  },
  marginContents: {
    marginHorizontal: '5%',
    paddingVertical: '5%',
  },
});
