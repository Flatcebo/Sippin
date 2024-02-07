import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  ImageBackground,
  Keyboard,
  Pressable,
  ScrollResponderEvent,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import BorderInput from '../components/BorderInput';
import BottomButton from '../components/BottomButton';
import ImageCard from '../components/ImageCard';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
  Coord,
} from 'react-native-nmap';
import {NMAP_API_KEY, NMAP_API_KEY_ID} from '../lib/NMAP_API_KEY';
import axios from 'axios';

export default function TestScreen({navigation}: any) {
  return <></>;
}
