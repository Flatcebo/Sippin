import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {IconOcticons} from '../lib/Icon';
import {scale} from '../utils/scaling';
interface SearchBarV2Props {
  value?: string;
  onChangeText?: () => void;
}
export default function SearchBarV2({value, onChangeText}: SearchBarV2Props) {
  return (
    <View style={[styles.searchContainer]}>
      <TextInput
        style={[styles.searchBar]}
        value={value}
        onChangeText={onChangeText}
      />
      <IconOcticons name="search" size={20} style={[styles.searchIcon]} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white',
    paddingVertical: '3%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '70%',
    // borderWidth: 1,
  },
  searchBar: {
    width: '100%',
    height: scale(40),
    backgroundColor: '#f4f3f3',
    borderWidth: 1.4,
    borderColor: '#cacaca',
    borderRadius: 4,
    paddingHorizontal: '5%',
    paddingRight: '14%',
    fontWeight: 'bold',
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    color: 'black',
  },
});
