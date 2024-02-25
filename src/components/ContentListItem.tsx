import React, {useState} from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import {
  IconFeather,
  IconOcticons,
  IconMaterialCommunityIcons,
  IconIonicons,
  IconMaterialIcons,
} from '../lib/Icon';
import {globalStyles} from '../lib/GlobalStyles';
import {formatNumber} from '../utils/format';
import {scale} from '../utils/scaling';
import {StyleSheet} from 'react-native';

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
  const [star, setStar] = useState(false);
  const handleStar = () => {
    setStar(!star);
  };
  return (
    <>
      <Pressable
        style={({pressed}) => [
          styles.container,
          {
            backgroundColor: pressed ? '#eaeaea' : 'white',
          },
        ]}
        onPress={onPressPushContents}
        key={item.id}>
        <View style={{}}>
          {/* <ImageBackground
            source={{
              uri: 'https://postfiles.pstatic.net/20160925_74/lovexoxo0217_1474733696748Awv7y_JPEG/image_3450045751474733680585.jpg?type=w966',
              height: 300,
              width: 300,
            }}> */}
          <Pressable onPress={handleStar} style={[styles.starButton]}>
            {star ? (
              <IconMaterialIcons name="star" size={28} color="yellow" />
            ) : (
              <IconMaterialIcons
                name="star-outline"
                size={28}
                color="#eaeaea"
              />
            )}
          </Pressable>
          <Image
            source={{uri: item.imageUri}}
            height={scale(160)}
            resizeMode="cover"
            style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
            // fadeDuration={30000}
            resizeMethod="auto"
            progressiveRenderingEnabled
          />
          {hits && (
            <View style={[styles.hitsView]}>
              <Text style={{color: '#eaeaea'}}>총 방문횟수 : 14</Text>
            </View>
          )}

          <View style={[styles.infoContainer]}>
            <Text style={[styles.categoryText]}>{item.category}</Text>
            <Text style={[styles.titleText]}>{item.title}</Text>
            <View style={[styles.addressView]}>
              <IconIonicons name="location" size={18} color={'#9a9a9a'} />
              <Text style={[styles.addressText]}>{item.address}</Text>
            </View>

            <View style={[{rowGap: 4}]}>
              <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                <IconMaterialIcons name="star" size={22} color="#feed03" />
                <Text style={[globalStyles.fontBold14]}>5.0</Text>
                <Text style={[{fontSize: 13}]}>({formatNumber(9999)})</Text>

                {/* <IconMaterialIcons name="keyboard-arrow-right" size={20} /> */}
              </View>
            </View>
          </View>
          {/* </ImageBackground> */}
        </View>
      </Pressable>
    </>
  );
};

export default ContentListItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '3%',
    borderColor: '#9a9a9a',
    borderRadius: 10,
    elevation: 3,
    // marginTop: '3%',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginVertical: 6,
    zIndex: 200,
  },

  starButton: {
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
  },
  hitsView: {
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
  },
  contentLayout: {
    marginHorizontal: '3%',
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    width: '10%',
    rowGap: 2,
    marginVertical: '3%',
  },
  contentHeaderView: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentFooterContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  infoContainer: {
    marginVertical: '2%',
    paddingHorizontal: '3%',
    paddingBottom: '3%',
    rowGap: 2,
    // alignItems: 'center',
  },
  categoryText: {
    color: '#571d1d',
    fontSize: 13,
    fontWeight: '600',
  },
  titleText: {
    fontSize: 18,
    textAlign: 'left',
    color: 'black',
    fontWeight: '700',
  },
  addressView: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  addressText: {
    fontSize: 13,
    textAlign: 'left',
    color: '#5a5a5a',
  },
  reviewContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%',
    // height: '5%',
    paddingVertical: '3%',
    borderWidth: 0.4,
    borderColor: '#9a9a9a',
    borderRadius: 4,
  },
  webViewContainer: {
    height: 140,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#eaeaea',
  },
});
