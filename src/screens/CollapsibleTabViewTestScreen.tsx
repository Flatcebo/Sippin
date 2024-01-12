import React, {useState, useCallback, useRef, useEffect} from 'react';
import {View, StyleSheet, Animated, TouchableOpacity, Text} from 'react-native';
import {TabView} from 'react-native-tab-view';

import CollapsibleHeader from '../components/TEst/CollapsibleHeader';
import CollapsibleFlatList from '../components/TEst/CollapsibleFlatList';

const TABBAR_HEIGHT = 60;

function CollapsibleTabViewTestScreen(props: any) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [tabRoutes, setTabRoutes] = useState([
    {key: 'screen1', title: 'screen1'},
    {key: 'screen2', title: 'screen2'},
  ]);
  const [tabIndex, setTabIndex] = useState(0);
  const tabIndexRef = useRef(0);
  /**
   * isListGlidingRef
   * - scroll이 움직일 때는 true, 멈춰있을 때는 false가 저장된다.
   * - scroll이 움직일 때 tab 전환을 방지할 때 사용된다.
   */
  const isListGlidingRef = useRef(false);
  const listArrRef = useRef<any>([]);
  const listOffsetRef = useRef<any>({});

  const scrollY = useRef(new Animated.Value(0)).current;
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp',
  });

  /**
   * tabBarTranslateY
   * - scrollY에 따라 변하는 값
   * - 해당 값을 tabBar의 translateY에 지정하면 scroll이 내려가면 tabBar의 위치가 위로 올라간다.
   */
  const tabBarTranslateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [headerHeight, 0],
    extrapolateRight: 'clamp',
  });

  const headerOnLayout = useCallback((event: any) => {
    const {height} = event.nativeEvent.layout;
    setHeaderHeight(height);
  }, []);

  const onTabIndexChange = useCallback((id: any) => {
    setTabIndex(id);
    tabIndexRef.current = id;
  }, []);

  const onTabPress = useCallback((idx: any) => {
    if (!isListGlidingRef.current) {
      setTabIndex(idx);
      tabIndexRef.current = idx;
    }
  }, []);
  useEffect(() => {
    scrollY.addListener(({value}) => {});

    return () => {
      scrollY.removeListener('');
    };
  }, []);

  // const syncScrollOffset = ()=>{
  //     const focusedTabKey = tabRoutes[tabIndexRef.current].key;

  //     listArrRef.current.forEach((item:any)=>{
  //         if (item.key !== focusedTabKey) {
  //             if (scrollY < headerHeight && scrollY >= 0) {
  //                 if (item.value) {
  //                     item.value.scrollToOffset({
  //                         offset: scrollY,
  //                         animated: false,
  //                     });
  //                     listOffsetRef.current[item.key] = scrollY;
  //                 }
  //             } else if (scrollY >= headerHeight) {
  //                 if ( listOffsetRef.current[item.key] < headerHeight ||
  //                      listOffsetRef.current[item.key] === null) {
  //                     if (item.value) {
  //                         item.value.scrollToOffset({
  //                             offset: headerHeight,
  //                             animated: false,
  //                         });
  //                         listOffsetRef.current[item.key] = headerHeight;
  //                     }
  //                 }
  //             }
  //         } else{
  //             if (item.value) {
  //                 listOffsetRef.current[item.key] = scrollY;
  //             }
  //         }
  //     })
  // }

  const onMomentumScrollBegin = useCallback(() => {
    isListGlidingRef.current = true;
  }, []);
  const onMomentumScrollEnd = useCallback(() => {
    isListGlidingRef.current = false;
  }, [headerHeight]);
  const onScrollEndDrag = useCallback(() => {}, [headerHeight]);

  /**
   * renderTabBar
   * - 탭바를 렌더링하는 함수
   * - tabBarTranslateY에 따라 translateY가 변하도록 style 값 지정
   * => scroll의 위치에 따라 tabBar의 위치가 변하는 효과 구현
   */
  const renderTabBar = useCallback(
    (props: any) => {
      return (
        <Animated.View
          style={[
            styles.collapsibleTabBar,
            {transform: [{translateY: tabBarTranslateY}]},
          ]}>
          {props.navigationState.routes.map((route: any, idx: any) => {
            return (
              <TouchableOpacity
                style={styles.collapsibleTabBarButton}
                key={idx}
                onPress={() => {
                  onTabPress(idx);
                }}>
                <View style={styles.collapsibleTabBarLabelContainer}>
                  <Text style={styles.collapsibleTabBarLabelText}>
                    {route.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </Animated.View>
      );
    },
    [headerHeight],
  );

  const renderScene = useCallback(
    ({route}: any) => {
      const isFocused = route.key === tabRoutes[tabIndex].key;

      return (
        <CollapsibleFlatList
          headerHeight={headerHeight}
          tabBarHeight={TABBAR_HEIGHT}
          scrollY={scrollY}
          onMomentumScrollBegin={onMomentumScrollBegin}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onScrollEndDrag={onScrollEndDrag}
          tabRoute={route}
          listArrRef={listArrRef}
          isTabFocused={isFocused}
        />
      );
    },
    [headerHeight, tabIndex],
  );

  return (
    <View style={styles.rootContainer}>
      {headerHeight > 0 ? (
        <TabView
          navigationState={{index: tabIndex, routes: tabRoutes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={onTabIndexChange}
        />
      ) : null}
      <Animated.View
        style={{
          ...styles.headerContainer,
          transform: [{translateY: headerTranslateY}],
        }}
        onLayout={headerOnLayout}
        pointerEvents="box-none">
        <CollapsibleHeader />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    width: '100%',
  },
  collapsibleTabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: TABBAR_HEIGHT,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  collapsibleTabBarButton: {
    flex: 1,
  },
  collapsibleTabBarLabelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  collapsibleTabBarLabelText: {
    fontSize: 15,
    color: '#587058',
  },
});

export default CollapsibleTabViewTestScreen;
