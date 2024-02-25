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
import CountModal from '../components/CountModal';

type HashtagItemProps = {
  items: Array<{text: string}>;
  //   onPress: (idx: number) => void;
};

export default function HashtagScreen({navigation}: HashtagScreenProp) {
  const [filterData, setFilterData] = useState<
    {id: number; text: string; count: number}[]
  >([]);
  const [searchText, setSearchText] = useState('');
  const [hashtagItems, setHashtagItems] = useState<{text: string}[]>([]);

  const onPressAddHashtagItem = (text: string) => {
    setHashtagItems([...hashtagItems, {text: text}]);
  };

  const onPressRemoveHashtagItem = (idToRemove: number) => {
    const updatedItems = hashtagItems.filter((item, idx) => idx !== idToRemove);
    setHashtagItems(updatedItems);
  };

  const HashtagItem = ({items}: HashtagItemProps) => {
    return (
      <>
        {items.map((i, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.hashtagItem]}
            onPress={() => onPressRemoveHashtagItem(idx)}>
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
        titleContent={<Text style={{fontSize: 13}}>{item.count}회</Text>}
        onPress={() => onPressAddHashtagItem(item.text)}
      />
    );
  };

  const goBack = () => {
    navigation.goBack();
  };

  const sortedData = [...HashtagData].sort(
    (a, b) => Number(b.count) - Number(a.count),
  );

  const onChangeText = (text: string) => {
    setSearchText(text);
    const filter = sortedData.filter(value => value.text.includes(text));

    const trueState = setFilterData(filter);

    return text.trim() !== '' ? trueState : setFilterData([]);
  };

  const onPressCheck = () => {
    navigation.navigate('GroupCreate', {hashtag: hashtagItems});
  };

  return (
    <>
      <Appbar.Header style={{}} collapsable={true}>
        <Appbar.BackAction onPress={goBack} />
        <SearchBarV2 value={searchText} onChangeText={onChangeText} />
        <TouchableOpacity style={[styles.checkIcon]} onPress={onPressCheck}>
          <IconFeather name="check" size={22} />
        </TouchableOpacity>
      </Appbar.Header>

      {hashtagItems.length >= 1 ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.hashtagView]}
          contentContainerStyle={{paddingHorizontal: 10}}>
          <HashtagItem items={hashtagItems} />
        </ScrollView>
      ) : null}

      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<EmptyList desc="해시태그를 입력해주세요." />}
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
    justifyContent: 'center',
  },
  checkIcon: {
    width: '16%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
});
