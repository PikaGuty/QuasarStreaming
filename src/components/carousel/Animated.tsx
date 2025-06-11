import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Card } from './Card';

import { AnimatedCardsProps } from '../../constants/interfaces';

export function AnimatedCards({ movie, index, layout }: AnimatedCardsProps) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <Card movie={movie} layout={layout} />
    </Animated.View>
  );
}