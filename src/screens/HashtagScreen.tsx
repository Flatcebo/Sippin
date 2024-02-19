import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import SearchBarV2 from '../components/SearchBarV2';
import {IconFeather, IconMaterialCommunityIcons} from '../lib/Icon';
import HashtagData from '../data/HashtagData.json';
import PressableListItem from '../components/PressableListItem';
import EmptyList from '../components/EmptyList';
import {HashtagScreenProp} from '../types/RootStackProps';

type HashtagItemProps = {
  items: Array<{text: string}>;
};

export default function HashtagScreen({navigation}: HashtagScreenProp) {
  const [filterData, setFilterData] = useState(HashtagData);
  const HashtagItem = ({items}: HashtagItemProps) => {
    return (
      <>
        {items.map((i, idx) => (
          <TouchableOpacity style={[styles.hashtagItem]} key={idx}>
            <Text style={[styles.hashtagText]}>{i.text}</Text>
            <IconMaterialCommunityIcons
              name="close"
              size={14}
              color="black"
              style={{marginLeft: 6}}
            />
          </TouchableOpacity>
        ))}
      </>
    );
  };
  const renderItem = ({item}: any) => {
    return (
      <PressableListItem
        key={item.id}
        title={item.text}
        titleStyle={{fontSize: 16}}
        layoutStyle={[styles.listItemLayout]}
        containerStyle={[styles.listItemContainer]}
        titleContent={<Text>{item.count}회</Text>}
      />
    );
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <Appbar.Header style={{}} collapsable={true}>
        <Appbar.BackAction onPress={goBack} />
        <SearchBarV2 />
        <TouchableOpacity style={[styles.checkIcon]}>
          <IconFeather name="check" size={22} />
        </TouchableOpacity>
      </Appbar.Header>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.hashtagView]}
        contentContainerStyle={{paddingHorizontal: 10}}>
        <HashtagItem
          items={[
            {text: '#시작'},
            {text: '#목포'},
            {text: '#유달산'},
            {text: '#유달산장'},
            {text: '#스텔라'},
            {text: '#목포'},
            {text: '#장터식당'},
            {text: '#유달산'},
            {text: '#유달산장'},
            {text: '#스텔라'},
            {text: '#목포'},
            {text: '#장터식당'},
            {text: '#끝'},
          ]}
        />
      </ScrollView>
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<EmptyList desc="검색어를 입력해주세요." />}
        style={{backgroundColor: 'white', height: '92%'}}
      />
    </>
  );
}

const styles = StyleSheet.create({
  hashtagItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    flexDirection: 'row',
  },
  hashtagText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  hashtagView: {
    backgroundColor: 'white',
    height: '8%',
    borderBottomWidth: 2,
    borderColor: '#eaeaea',
  },
  listItemLayout: {
    paddingHorizontal: '5%',
  },
  listItemContainer: {
    paddingVertical: '5%',
    borderBottomWidth: 0.4,
    borderColor: '#eaeaea',
  },
  checkIcon: {
    width: '16%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
});
