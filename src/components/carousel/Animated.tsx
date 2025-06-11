// Importing necessary modules and components from React and React Native
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

// Importing the Card component to be animated
import { Card } from './Card';

// Importing the prop types for the component
import { AnimatedCardsProps } from '../../constants/interfaces';


/**
 * AnimatedCards Component
 * 
 * This component wraps a Card component inside an animated container.
 * On mount or when the index changes, it performs a fade-in animation.
 * 
 * Props:
 * - movie: Object representing the movie data to be displayed.
 * - index: The index of the card in a list, used to re-trigger animation.
 * - layout: Layout type used to determine how the card is displayed.
 */
export function AnimatedCards({ movie, index, layout }: AnimatedCardsProps) {
  // Creating an animated value for controlling opacity
  const opacity = useRef(new Animated.Value(0)).current;

  // useEffect hook to start the fade-in animation when component mounts or index changes
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  // Render the Card component wrapped in an Animated.View with the animated opacity
  return (
    <Animated.View style={{ opacity }}>
      <Card movie={movie} layout={layout} />
    </Animated.View>
  );
}