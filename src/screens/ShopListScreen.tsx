import {useCallback, useEffect, useState} from 'react';
import {Animated, Image, Platform, TextInput} from 'react-native';
import {FlatList, Pressable, ScrollView, Text, View} from 'react-native';
import heartListData from '../lib/heartListData';
import {scale} from '../utils/scaling';

export default function ShopListScreen({route, navigation}: any) {
  const {id, state, city, liquorType} = route.params;
  console.log(city);

  const [scrollY] = useState(new Animated.Value(0));

  const handleScrolls = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [50, 0],
    extrapolate: 'clamp',
  });

  const renderItem = useCallback(({item}: any) => {
    const onPressPushContents = () => {
      navigation.push('Content', {
        id: item.id,
        title: item.title,
        address: item.address,
        heart: item.heart,
        chat: item.chat,
        imageUri: item.imageUri,
        category: item.category,
        desc: item.desc,
        reviewImageUri: item.reviewImageUri,
        menu: item.menu,
      });
    };

    return (
      <>
        <Pressable
          style={{
            // width: '100%',
            height: Platform.OS === 'android' ? scale(250) : scale(250),
            backgroundColor: 'white',
            marginBottom: '3%',
            marginHorizontal: '3%',
            borderWidth: 0.4,
            borderColor: '#9a9a9a',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          onPress={onPressPushContents}
          key={item.id}>
          <View style={{}}>
            <Image
              source={{uri: item.imageUri}}
              height={scale(180)}
              resizeMode="cover"
              style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
            />
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
              {item.title}
            </Text>
          </View>
        </Pressable>
      </>
    );
  }, []);

  return (
    <>
      <View style={{width: '100%', height: '100%'}}>
        {/* <View style={{height: '100%', marginHorizontal: '3%'}}> */}
        <FlatList
          data={heartListData}
          renderItem={renderItem}
          onScroll={handleScrolls}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          // style={{marginHorizontal: '3%'}}
        />
        {/* </View> */}
      </View>
    </>
  );
}

// <ShopsTab.Navigator>
//   <ShopsTab.Screen name="All" component={AllNavi} />
// </ShopsTab.Navigator>
// <SafeAreaView>
