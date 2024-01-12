import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {
  IconFeather,
  IconOcticons,
  IconMaterialCommunityIcons,
} from '../lib/Icon';
import {globalStyles} from '../lib/GlobalStyles';
import {formatNumber} from '../utils/format';
import {scale} from '../utils/scaling';

interface ContentListItemProp {
  item?: any;
  onPressPushContents?: () => void;
  hits?: boolean;
}

const ContentListItem = ({
  item,
  onPressPushContents,
  hits,
}: ContentListItemProp) => {
  return (
    <>
      <Pressable
        style={({pressed}) => [
          {
            // width: '100%',
            // height: Platform.OS === 'android' ? scale(300) : scale(300),
            backgroundColor: pressed ? '#eaeaea' : 'white',
            // marginTop: '3%',
            marginBottom: '3%',
            marginHorizontal: '3%',
            // borderWidth: 0.4,
            borderColor: '#9a9a9a',
            borderRadius: 10,
            // borderTopLeftRadius: 10,
            // borderTopRightRadius: 10,
            elevation: 4,
          },
        ]}
        onPress={onPressPushContents}
        key={item.id}>
        <View style={{}}>
          <Pressable
            style={{
              position: 'absolute',
              zIndex: 100,
              right: -0,
              top: -0,
              backgroundColor: '#00000040',
              padding: '1%',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}>
            <IconFeather
              name="star"
              size={28}
              color="#eaeaea"

              // style={{backgroundColor: 'white', borderRadius: 10}}
            />
          </Pressable>
          <Image
            source={{uri: item.imageUri}}
            height={scale(180)}
            resizeMode="cover"
            style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
          />
          {hits && (
            <View
              style={{
                position: 'absolute',
                zIndex: 100,
                right: -0,
                top: 158,
                backgroundColor: '#00000060',
                padding: '1%',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 10,

                paddingHorizontal: '3%',
              }}>
              <Text style={{color: '#eaeaea'}}>총 방문횟수 : 14</Text>
            </View>
          )}

          <View
            style={[
              {
                marginHorizontal: '3%',
                flexDirection: 'row',
              },
            ]}>
            <View
              style={{
                flex: 1,
                //   borderWidth: 1,
                width: '10%',
                rowGap: 2,
                marginVertical: '3%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.title}
                </Text>
                <Text style={[globalStyles.font14]}>{item.category}</Text>
              </View>
              <Text style={[globalStyles.font14, {height: 40}]}>
                {item.address}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', columnGap: 8}}>
                  <Pressable>
                    <IconOcticons name="heart" size={20} color="black" />
                  </Pressable>
                </View>

                <View>
                  <Text style={[globalStyles.font14]}>
                    <IconOcticons name="heart" size={16} color="red" />
                    {formatNumber(item.heart)}
                  </Text>
                  <Text style={[globalStyles.font14]}>
                    <IconMaterialCommunityIcons
                      name="chat-outline"
                      size={17}
                      color="black"
                    />
                    {formatNumber(item.chat)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default ContentListItem;
