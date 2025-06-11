import { View, Text, StyleSheet, FlatList } from 'react-native';

import { MyCarouselProps,} from '../../constants/interfaces';
import { AnimatedCards } from './Animated';

/**
 * Carousel Component
 * 
 * Displays a horizontal scrolling list of AnimatedCards with a title above.
 * 
 * Props:
 * - title: The title displayed above the carousel.
 * - data: Array of movie objects to be rendered in the carousel.
 * - layout: Layout style passed to each card (e.g., portrait, landscape).
 */
export function Carousel( {title, data, layout}: MyCarouselProps ) {
  return (
    <View style={styles.carouselContainer}>
      {/* Title of the carousel */}
      <Text style={styles.carouselTitle}>{title}</Text>
      {/* Horizontally scrollable list of movie cards */}
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        renderItem={({ item, index }) => (
          // Render each movie as an animated card
          <AnimatedCards movie={item} index={index} layout={layout} />
        )}
      />
    </View>
  );
};

// Styles for the carousel container and title
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