import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {View} from 'react-native';
import {IconEntypo, IconMaterialCommunityIcons} from '../lib/Icon';

interface RankingTableProps {
  title?: string;
  number?: string;
  up?: boolean;
  down?: boolean;
  stay?: boolean;
  redNumber?: boolean;
}
// export default function RankingTable({}) {
export const Columns = ({
  title,
  number,
  up,
  down,
  stay,
  redNumber,
}: RankingTableProps) => (
  <View style={[styles.column]}>
    <Text style={[styles.cell, {color: redNumber ? 'red' : 'black'}]}>
      {number}
    </Text>
    <Text style={[styles.cell]}>
      {up && (
        <IconMaterialCommunityIcons
          name="arrow-up-bold"
          size={14}
          color="#fc5d5d"
        />
      )}
      {down && (
        <IconMaterialCommunityIcons
          name="arrow-down-bold"
          size={14}
          color="#5c5cff"
        />
      )}
      {stay && <IconEntypo name="minus" size={14} color="#aaaaaa" />}
    </Text>
    <Text style={[styles.cell]}>{title}</Text>
  </View>
);

//   return (
//     <View style={styles.table}>
//       <View
//         style={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginRight: '28%',
//         }}>
//         <View style={[styles.row]}>
//           <Columns number="1" redNumber stay title="경성주막" />
//           <Columns number="2" redNumber up title="경성주막" />
//           <Columns number="3" redNumber down title="경성주막" />
//           <Columns number="4" stay title="경성주막" />
//           <Columns number="5" stay title="경성주막" />
//         </View>
//       </View>
//       <View style={[styles.row]}>
//         <Columns number="6" stay title="경성주막" />
//         <Columns number="7" stay title="경성주막" />
//         <Columns number="8" stay title="경성주막" />
//         <Columns number="9" stay title="경성주막" />
//         <Columns number="10" stay title="경성주막" />
//       </View>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  cell: {
    // flex: 1,
    // padding: 8,
    // borderRightWidth: 1,
    // borderBottomWidth: 1,
    // textAlign: 'right',
    // alignItems: 'flex-end',
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',

    // borderWidth: 1,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    paddingVertical: '8%',
  },
});
