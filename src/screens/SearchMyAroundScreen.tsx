import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import {GwangjuCity} from '../lib/Citys/GwangjuCity';
import {SeoulCity} from '../lib/Citys/SeoulCity';
import {IconOcticons} from '../lib/Icon';
import {shopData} from '../lib/shopData';
import {scale} from '../utils/scaling';
export default function SearchMyAroundScreen() {
  const [text, setText] = useState('');
  const [data, setData] = useState<
    {id: number; state: string; city: {id: number; name: string}[]}[]
  >([]);
  const handleSearchText = (t: string) => {
    setText(t);

    const filteredData = shopData.filter(item => {
      //   console.log(item.city.filter(city => city.name));
      return (
        item.state.includes(t) ||
        (item.city &&
          item.city
            .filter(city => city.name)
            .join('')
            // .toLowerCase()
            .includes(t))
      );
    });
    t.length === 0 ? setData([]) : setData(filteredData);
    // console.log(filteredData);
  };
  return (
    <View>
      <View style={[styles.searchContainer]}>
        <TextInput
          style={[styles.searchBar]}
          value={text}
          onChangeText={handleSearchText}
        />
        <IconOcticons name="search" size={20} style={[styles.searchIcon]} />
      </View>
      <ScrollView>
        {data.map(item => (
          <TouchableOpacity key={item.id}>
            <Text style={{fontWeight: 'bold'}}>{item.state}</Text>
            <Text>{item.city.map(city => city.name)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white',
    paddingVertical: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: '80%',
    height: scale(40),
    backgroundColor: '#f4f3f3',
    borderWidth: 1.4,
    borderColor: '#cacaca',
    borderRadius: 4,
    paddingHorizontal: '5%',
    paddingRight: '14%',
    fontWeight: 'bold',
    color: 'black',
  },
  searchIcon: {
    position: 'absolute',
    right: '15%',
    color: 'black',
  },
});
