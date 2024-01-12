import {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, Pressable, ScrollView, Text, View} from 'react-native';
import FilterItem from '../components/FilterItem';
import {SubmitButton} from '../components/IconButtons';
// import {CollapsibleHeaderV1} from '../components/CollapsibleHeader';
import ImageCard from '../components/ImageCard';
import PressableItem from '../components/PressableItem';
import {globalStyles} from '../lib/GlobalStyles';
import {IconFeather} from '../lib/Icon';
import {keyExtractor} from '../lib/keyExtractor';
import {Menu} from '../lib/Menu';
import {MenuScreenProp} from '../types/RootStackProps';
// import {ContentScreenProp, MenuScreenProp} from '../types/RootStackProps';
import {moderateScale, scale, verticalScale} from '../utils/scaling';

export default function MenuScreen({route, navigation}: MenuScreenProp) {
  const {title} = route.params;

  const [checked, setChecked] = useState<boolean>(false);

  // const handlePress = (id: any) => {
  //   setChecked(prev => !prev);
  // };

  useEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerRight: () => (
        <SubmitButton
          onPress={() => {
            navigation.pop();
          }}
        />
      ),
    });
  }, [navigation]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

  const handlePress = (index: any) => {
    setSelectedButtonIndex(index === selectedButtonIndex ? -1 : index);
  };
  const renderMenuItems = (items: any[]) => {
    return items.map((menuItem: any) => (
      <Pressable
        key={menuItem.id}
        onPress={() => {
          handlePress(menuItem.id);
        }}
        style={({pressed}) => [
          {
            width: '48%',
            // borderWidth: 0.4,
            // borderBottomWidth: 0.4,
            borderColor: '#9a9a9a',
            margin: '1%',
            // borderRadius: 4,
            backgroundColor:
              menuItem.id === selectedButtonIndex ? 'red' : 'white',
            // height: 400,
            // zIndex: 100,
            // marginBottom: '1%',
            // marginHorizontal: '3%',
            // justifyContent: 'center',
            // alignItems: 'center',
          },
        ]}>
        <ImageCard
          uri={menuItem.imageUri}
          height={scale(150)}
          imageStyle={{width: '100%', borderRadius: 10}}
          layoutStyle={{
            alignItems: 'center',
            rowGap: 4,
            flex: 1,
            marginBottom: '3%',

            // borderWidth: 1,
          }}
          inline={
            <>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  flex: 1,
                }}>
                {menuItem.name}
              </Text>
              {/* <Text
                style={{
                  color: '#5a5a5a',
                  fontSize: 12,
                  // borderWidth: 1,
                  width: '100%',
                  height: scale(50),
                  textAlign: 'center',
                }}>
                {menuItem.desc}
              </Text> */}
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: '500',
                  width: '100%',
                  textAlign: 'center',
                  // marginBottom: '3%',
                  // borderWidth: 1,
                }}>
                {menuItem.price}
              </Text>
            </>
          }
        />
      </Pressable>
    ));
  };

  const renderItem = useCallback(
    ({item}: any) => (
      <View
        key={item.id}
        style={{
          // marginHorizontal: '3%',
          marginBottom: '3%',
          // paddingBottom: '3%',
          // borderBottomWidth: 2,
          // borderColor: '#cacaca',
          // marginHorizontal: '3%',
          backgroundColor: 'white',
        }}>
        <FilterItem
          title={item.category}
          style={[globalStyles.fontBold16]}
          borderRadius={false}
          elevation={false}
          borderWidth={false}
          // onPress={() => {}}
        />
        <View
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginBottom: '1%',
          }}>
          {item?.mainDishes && renderMenuItems(item.mainDishes)}
          {item?.sideDishes && renderMenuItems(item.sideDishes)}
          {item?.liquor && renderMenuItems(item.liquor)}
          {item?.drink && renderMenuItems(item.drink)}
          {item?.etc && renderMenuItems(item.etc)}
        </View>
      </View>
    ),
    [renderMenuItems],
  );
  // console.log(menu.category);
  return (
    <>
      {/* <CollapsibleHeaderV1 height={100} /> */}
      <View style={[{backgroundColor: 'white'}]}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            // marginHorizontal: '3%',
          }}
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            // marginHorizontal: '3%',
            // marginTop: '1%',
            // paddingTop: '1%',
          }}>
          {Menu.map((item: any) => (
            <FilterItem
              key={item.id}
              title={item.category}
              pressableStyle={{
                marginLeft: item.id === 0 ? 16 : 4, // 첫 번째 아이템에만 왼쪽 마진
                marginRight: item.id === Menu.length - 1 ? 16 : 4, // 마지막 아이템에만 오른쪽 마진
              }}
              borderRadius
            />
          ))}
        </ScrollView>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <FlatList
          data={Menu}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={{marginHorizontal: '3%'}}
          ListHeaderComponent={
            <View style={{backgroundColor: 'white'}}>
              <View
                style={[
                  globalStyles.marginHorizontal5,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                ]}>
                {/* <Text style={[globalStyles.fontBold20]}>{title}</Text> */}
                {/* <Text style={[globalStyles.fontBold20]}>Table.10</Text> */}
              </View>
            </View>
          }
        />
      </View>
    </>
  );
}
