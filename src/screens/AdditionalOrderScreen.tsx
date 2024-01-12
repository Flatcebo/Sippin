import {useCallback} from 'react';
import {FlatList, Image, Modal, ScrollView, Text, View} from 'react-native';
import FilterItem from '../components/FilterItem';
import ImageCard from '../components/ImageCard';
import {globalStyles} from '../lib/GlobalStyles';
import {Menu} from '../lib/Menu';
import {moderateScale, scale, verticalScale} from '../utils/scaling';

export default function AdditionalOrderScreen({route}: any) {
  // const {id, menu} = route.params;
  const renderMenuItems = (items: any[]) => {
    return items.map((menuItem: any) => (
      <View
        key={menuItem.id}
        style={{
          width: '48%',
          // borderWidth: 0.4,
          // borderBottomWidth: 0.4,
          borderColor: '#9a9a9a',
          margin: '1%',
          // borderRadius: 4,
          // marginBottom: '1%',
          // marginHorizontal: '3%',
        }}>
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
      </View>
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
          style={[globalStyles.fontBold20]}
          borderRadius={false}
          elevation={false}
          borderWidth={false}
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
      <View style={[{}]}>
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

      <FlatList
        data={Menu}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        // horizontal
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
              <Text style={[globalStyles.fontBold20]}>Title</Text>
              <Text style={[globalStyles.fontBold20]}>Table.10</Text>
            </View>
          </View>
        }
        style={
          {
            // borderWidth: 1,
            // width: '100%',
            // flexWrap: 'wrap',
            // flexDirection: 'row',
            // backgroundColor: 'white',
          }
        }
      />
    </>
  );
}
