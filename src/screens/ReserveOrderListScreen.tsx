import React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BasketModal from '../components/BasketModal';
import BottomButton from '../components/BottomButton';
import FilterItem from '../components/FilterItem';
import {MinusButton, PlusButton, SubmitButton} from '../components/IconButtons';
import ImageCard from '../components/ImageCard';
import MenuItem from '../components/MenuItem';
import PressableListItem from '../components/PressableListItem';
import {globalStyles} from '../lib/GlobalStyles';
import {
  IconFeather,
  IconIonicons,
  IconMaterialCommunityIcons,
  IconMaterialIcons,
} from '../lib/Icon';
import {Menu} from '../lib/Menu';
import {
  MenuScreenProp,
  OrderTabProp,
  ReserveOrderListScreenProp,
} from '../types/RootStackProps';
import {moderateScale, scale, verticalScale} from '../utils/scaling';

export default function ReserveOrderListScreen({
  route,
  navigation,
}: ReserveOrderListScreenProp) {
  const {title} = route.params;
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const [menu, setMenu] = useState<boolean>(false);
  const [modal, setModal] = useState(false);

  const handlePress = (index: any) => {
    setSelectedButtonIndex(index === selectedButtonIndex ? -1 : index);
  };
  const styles = StyleSheet.create({});

  const renderMenuItems = (items: any[]) => {
    return items.map((menuItem: any) => (
      <MenuItem
        key={menuItem.id}
        menuItem={menuItem}
        onPress={handlePress}
        selected={selectedButtonIndex}
      />
    ));
  };

  const renderItem = useCallback(
    ({item}: any) => (
      <Pressable
        key={item.id}
        style={{
          marginBottom: '3%',
          backgroundColor: 'white',
        }}>
        <FilterItem
          title={item.category}
          style={[globalStyles.fontBold16]}
          borderRadius={false}
          elevation={false}
          borderWidth={false}
        />
        <View
          style={{
            width: '100%',
            marginBottom: '1%',
          }}>
          {item?.mainDishes && renderMenuItems(item.mainDishes)}
          {item?.sideDishes && renderMenuItems(item.sideDishes)}
          {item?.liquor && renderMenuItems(item.liquor)}
          {item?.drink && renderMenuItems(item.drink)}
          {item?.etc && renderMenuItems(item.etc)}
        </View>
      </Pressable>
    ),
    [renderMenuItems],
  );

  const FilterButton = () => (
    <>
      {Menu.map((item: any) => (
        <FilterItem
          key={item.id}
          title={item.category}
          pressedColor
          pressableStyle={{
            marginLeft: item.id === 0 ? 16 : 4,
            marginRight: item.id === Menu.length - 1 ? 16 : 4,
          }}
          style={{paddingHorizontal: 20}}
          borderWidth
        />
      ))}
    </>
  );

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              backgroundColor: 'white',
            }}>
            <FilterButton />
          </ScrollView>
          <FlatList
            data={Menu}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
            showsVerticalScrollIndicator={false}
            style={{marginHorizontal: '3%', marginBottom: '12%'}}
            // ListHeaderComponent={
            //   <View style={{backgroundColor: 'white'}}>
            //     <View
            //       style={[
            //         // globalStyles.marginHorizontal5,
            //         {
            //           flexDirection: 'row',
            //           justifyContent: 'space-between',
            //           alignItems: 'center',
            //         },
            //       ]}></View>
            //   </View>
            // }
          />
        </>
      </View>

      {/* <BottomButton
        title="예약 완료하기"
        onPress={() => {
          navigation.reset({
            routes: [{name: 'MainTab'}, {name: 'ReserveSuccess'}],
          });
        }}
      /> */}
    </>
  );
}
