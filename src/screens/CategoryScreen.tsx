import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import FilterItem from '../components/FilterItem';
import {BusanCity} from '../lib/Citys/BusanCity';
import {ChungbukDo} from '../lib/Citys/ChungbukDo';
import {ChungnamDo} from '../lib/Citys/ChungnamDo';
import {DaeguCity} from '../lib/Citys/DaeguCity';
import {DaejeonCity} from '../lib/Citys/DaejeonCity';
import {GangwonDo} from '../lib/Citys/GangwonDo';
import {GwangjuCity} from '../lib/Citys/GwangjuCity';
import {GyeongbukDo} from '../lib/Citys/GyeongbukDo';
import {GyeonggiDo} from '../lib/Citys/GyeonggiDo';
import {GyeongnamDo} from '../lib/Citys/GyeongnamDo';
import {IncheonCity} from '../lib/Citys/IncheonCity';
import {JejuDo} from '../lib/Citys/JejuDo';
import {JeonbukDo} from '../lib/Citys/JeonbukDo';
import {JeonnamDo} from '../lib/Citys/JeonnamDo';
import {SeoulCity} from '../lib/Citys/SeoulCity';
import {UlsanCity} from '../lib/Citys/UlsanCity';
import {globalStyles} from '../lib/GlobalStyles';
import {shopData} from '../lib/shopData';
import {RootStackNavigationProp} from '../types/RootStackProps';
export default function CategoryScreen() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleItemClick = (itemId: any) => {
    setSelectedCategory(itemId);
  };

  const ContentMap: any = {
    0: SeoulCity,
    1: IncheonCity,
    2: GyeonggiDo,
    3: DaejeonCity,
    4: GwangjuCity,
    5: BusanCity,
    6: UlsanCity,
    7: DaeguCity,
    8: GangwonDo,
    9: ChungbukDo,
    10: ChungnamDo,
    11: JeonbukDo,
    12: JeonnamDo,
    13: GyeongbukDo,
    14: GyeongnamDo,
    15: JejuDo,
    // ... content for other categories
  };
  return (
    <>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          //   height:60
          // borderWidth: 1,
        }}
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          //   height: '30%',
          // position: 'absolute',
          borderBottomWidth: 0.4,
          borderColor: '#eaeaea',
        }}>
        <FilterItem title="최근 검색어" marginLeft recentSearch borderRadius />
        <FilterItem title="평택" recentSearch borderRadius />
        <FilterItem title="청주" recentSearch borderRadius />
        <FilterItem title="광주" marginRight recentSearch borderRadius />
        <FilterItem title="광주" marginRight recentSearch borderRadius />
        <FilterItem title="광주" marginRight recentSearch borderRadius />
      </ScrollView>
      <View
        style={{
          height: '92%',
          flexDirection: 'row',
          // borderTopWidth: 2,
          // borderColor: '#cacaca',
        }}>
        <ScrollView style={{width: '30%'}} showsVerticalScrollIndicator={false}>
          {shopData.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleItemClick(item.id)}
              style={{
                backgroundColor:
                  selectedCategory === item.id ? 'white' : '#eaeaea',
                // paddingVertical: 15,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
              }}>
              <Text style={[globalStyles.fontBold16]}>{item.state}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          style={{backgroundColor: 'white', width: '60%'}}
          showsVerticalScrollIndicator={false}>
          {ContentMap[selectedCategory]?.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate('ByRegionContents', {title: item.name});
              }}
              style={{
                // paddingVertical: 15,
                justifyContent: 'center',
                // alignItems: 'center',
                borderBottomWidth: 1,
                marginHorizontal: '10%',
                borderColor: '#9a9a9a2c',
                height: 50,
              }}>
              <Text style={[globalStyles.fontNormal14]}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
