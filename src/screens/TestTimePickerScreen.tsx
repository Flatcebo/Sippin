import {Text, View, StyleSheet} from 'react-native';

export default function TestTimePickerScreen() {
  return <View style={styles.view}></View>;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
