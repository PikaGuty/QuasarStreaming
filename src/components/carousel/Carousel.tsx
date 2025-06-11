import { View, Text, StyleSheet, FlatList } from 'react-native';

import { MyCarouselProps,} from '../../constants/interfaces';
import { AnimatedCards } from './Animated';

export function Carousel( {title, data, layout}: MyCarouselProps ) {
  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.carouselTitle}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        renderItem={({ item, index }) => (
          <AnimatedCards movie={item} index={index} layout={layout} />
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    carouselContainer: {
        marginVertical: 25,
    },
    carouselTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 16,
        marginBottom: 10,
    },

});