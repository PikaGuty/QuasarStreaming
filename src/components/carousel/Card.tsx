import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { MovieItem } from '../../constants/interfaces';

type Props = {
  movie: MovieItem;
  layout: 'portrait-card' | 'landscape-card' | 'thumbnail-card';
};

export function Card({ movie, layout }: Props) {
  let image = '';
  let aspectRatio = 2 / 3;

  const parseAspectRatio = (ratio: string) => {
    const [w, h] = ratio.split('/').map(Number);
    return w / h;
  };

  if (layout === 'portrait-card') {
    image = movie.posters.portrait.url;
    aspectRatio = parseAspectRatio(movie.posters.portrait.aspectRatio);
  } else if (layout === 'landscape-card') {
    image = movie.posters.landscape.url;
    aspectRatio = parseAspectRatio(movie.posters.landscape.aspectRatio);
  } else if (layout === 'thumbnail-card') {
    image = movie.posters.thumbnail.url;
    aspectRatio = parseAspectRatio(movie.posters.thumbnail.aspectRatio);
  }

  return (
    <View style={[styles.card, { aspectRatio }]}>
      <Image source={{ uri: image }} style={styles.cardImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#222',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
