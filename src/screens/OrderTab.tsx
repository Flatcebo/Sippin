import React, {useRef} from 'react';
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
import EmptyList from '../components/EmptyList';
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
import {OrderTabProp} from '../types/RootStackProps';

export default function OrderTab({route, navigation}: OrderTabProp) {
  useEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.push('OrderedList');
          }}
          style={[styles.headerButton]}>
          <IconIonicons name="receipt-outline" size={24} />
        </Pressable>
      ),
    });
  }, [navigation]);
  const modalData = [
    {
      id: 0,
      menuName: '해물라면',
    },
  ];
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const [menu, setMenu] = useState<boolean>(false);
  const [modal, setModal] = useState(false);

  const handlePress = (index: any) => {
    setSelectedButtonIndex(index === selectedButtonIndex ? -1 : index);
  };
  const onPressContent = () => {
    setModal(true);
    // 모달에 아이템 추가 로직
  };
  const renderMenuItems = (items: any[]) => {
    return items.map((menuItem: any) => (
      <MenuItem
        key={menuItem.id}
        menuItem={menuItem}
        onPress={handlePress}
        selected={selectedButtonIndex}
        onPressContent={onPressContent}
      />
    ));
  };
  // const renderMenuItems = (items: any[]) => {
  //   return items.map((menuItem: any) => (
  //     <Pressable
  //       key={menuItem.id}
  //       onPress={() => {
  //         handlePress(menuItem.id);
  //       }}
  //       style={({pressed}) => [
  //         {
  //           // width: '48%',
  //           borderColor: '#9a9a9a',
  //           margin: '1%',
  //           backgroundColor:
  //             menuItem.id === selectedButtonIndex ? 'red' : 'white',
  //         },
  //       ]}>
  //       <ImageCard
  //         uri={menuItem.imageUri}
  //         height={scale(150)}
  //         imageStyle={{width: '100%', borderRadius: 10}}
  //         layoutStyle={{
  //           alignItems: 'center',
  //           rowGap: 4,
  //           flex: 1,
  //           marginBottom: '3%',
  //         }}
  //         inline={
  //           <>
  //             <Text
  //               style={{
  //                 color: 'black',
  //                 fontWeight: 'bold',
  //                 fontSize: 16,
  //                 flex: 1,
  //               }}>
  //               {menuItem.name}
  //             </Text>
  //             <Text
  //               style={{
  //                 color: 'black',
  //                 fontSize: 14,
  //                 fontWeight: '500',
  //                 width: '100%',
  //                 textAlign: 'center',
  //               }}>
  //               {menuItem.price}
  //             </Text>
  //           </>
  //         }
  //       />
  //     </Pressable>
  //   ));
  // };

  const [itemHeights, setItemHeights] = useState<any>({});

  const getItemLayout = (_: any, index: any) => ({
    length: itemHeights[index] || 100, // Set a default height if not yet measured
    offset: index * (itemHeights[index] || 100),
    index,
  });

  const renderItem = useCallback(
    ({item}: any) => (
      <Pressable
        key={item.id}
        onLayout={e => {
          const {height} = e.nativeEvent.layout;
          setItemHeights((prevHeights: any) => ({
            ...prevHeights,
            [item.id]: height,
          }));
        }}
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
          onPress={() => {}}
        />
        {/* <View
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginBottom: '1%',
          }}> */}
        {item?.mainDishes && renderMenuItems(item.mainDishes)}
        {item?.sideDishes && renderMenuItems(item.sideDishes)}
        {item?.liquor && renderMenuItems(item.liquor)}
        {item?.drink && renderMenuItems(item.drink)}
        {item?.etc && renderMenuItems(item.etc)}
        {/* </View> */}
      </Pressable>
    ),
    [renderMenuItems],
  );

  // console.log(itemHeights);
  const onPressCloseModal = () => {
    setModal(false);
  };
  const onPressOrderButton = () => {
    setModal(false);
    navigation.navigate('CompletedOrder');
  };
  const scrollViewRef = useRef<FlatList>(null);

  const FilterButton = () => (
    <>
      {Menu.map((item: any) => {
        const onPressFilter = (id: number) => {
          // scrollViewRef.current?.getScrollResponder().scrollToIndex();
          // const itemsHeight = 100;
          const index = Menu.findIndex((item: any) => item.id === id);
          // const viewPosition = index * itemHeights; // 정확한 위치 계산

          // Scroll to the item with the found index
          if (scrollViewRef.current && index !== -1) {
            scrollViewRef.current.scrollToIndex({
              index,
              viewPosition: 0, // 0은 맨 위에 위치
              animated: true,
              // viewOffset: -100,
            });
          }
        };
        const onPressHeightButton = (id: number) => {
          if (scrollViewRef.current) {
            const totalHeight = Object.keys(itemHeights)
              .filter(key => Number(key) < id)
              .reduce((acc, key) => acc + itemHeights[key], 0);

            const totalItemHeights: any = Object.values(itemHeights).reduce(
              (acc: any, height: any) => acc + height,
              0,
            );
            // console.log(totalItemHeights);
            // const viewPosition = (totalItemHeights - totalHeight) / 1000;
            const viewPosition = totalHeight / totalItemHeights - 0.44;
            console.log(viewPosition);

            scrollViewRef.current.scrollToItem({
              item: Menu.find(item => item.id === id),
              viewPosition,
              animated: true,
            });
          }
        };
        // itemHeights[id] + [id + 1]
        return (
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
            // onPress={() => onPressFilter(item.id)}
            onPress={() => onPressHeightButton(item.id)}
          />
        );
      })}
    </>
  );

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
            }}
            style={{
              backgroundColor: 'white',
            }}>
            <FilterButton />
          </ScrollView>

          <FlatList
            ref={scrollViewRef}
            data={Menu}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
            style={{marginHorizontal: '0%', marginBottom: '22%'}}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyList desc="메뉴가 없습니다" />}
            getItemLayout={getItemLayout}
            // onScroll={item => {
            //   console.log(item.nativeEvent.contentOffset.y);
            // }}
          />
        </>
      </View>
      <BasketModal
        visible={modal}
        onPressBottomButton={onPressOrderButton}
        onRequestClose={onPressCloseModal}
        onPressBG={onPressCloseModal}
        ListContents={
          <>
            {modalData.map(item => (
              <PressableListItem
                key={item.id}
                layoutStyle={{borderBottomWidth: 0.4, borderColor: '#9a9a9a'}}
                containerStyle={[styles.modalListItemContainer]}
                titleStyle={[globalStyles.fontBold18]}
                title={item.menuName}
                titleContent={
                  <View style={[styles.modalQuantityButton]}>
                    <MinusButton
                      style={{}}
                      hitSlop={6}
                      onPress={() => {
                        console.log('Minuse');
                      }}
                    />
                    <Text>1</Text>
                    <PlusButton
                      style={{}}
                      hitSlop={6}
                      onPress={() => {
                        console.log('Plus');
                      }}
                    />
                  </View>
                }
              />
            ))}
          </>
        }
      />
      <Pressable
        style={[styles.modalDropDownButton]}
        onPress={() => {
          setModal(true);
        }}>
        <IconMaterialIcons name="arrow-drop-up" size={30} color="#3a3a3a" />
        {/* <Text style={[globalStyles.fontBold18]}>장바구니</Text> */}
      </Pressable>
      {/* <BottomButton
        onPress={() => {
          navigation.push('Test');
        }}
      /> */}
    </>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginRight: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalQuantityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  modalDropDownButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    borderTopStartRadius: 26,
    borderTopEndRadius: 26,
    borderTopWidth: 0.4,
    borderLeftWidth: 0.4,
    borderRightWidth: 0.4,
    borderColor: '#cacaca',
    paddingVertical: '1%',
  },
  modalListItemContainer: {
    paddingVertical: '5%',
    marginHorizontal: '5%',
    justifyContent: 'center',
  },
});
