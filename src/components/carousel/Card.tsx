import React, { useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, Pressable, } from 'react-native';
import { MovieItem } from '../../constants/interfaces';
import { MovieDetailsModal } from '../movieDetails/MovieDetails'; // Ajusta el path según tu estructura

// Props type definition for the Card component
type Props = {
  movie: MovieItem;
  layout: 'portrait-card' | 'landscape-card' | 'thumbnail-card';
};

/**
 * Card Component
 * 
 * Displays a movie poster image based on the specified layout (portrait, landscape, or thumbnail).
 * Shows a loading spinner while the image is loading.
 * When tapped, opens a modal with movie details.
 */
export function Card({ movie, layout }: Props) {
  const [loading, setLoading] = useState(true); // State to control image loading spinner
  const [showDetails, setShowDetails] = useState(false); // State to control visibility of movie details modal

  // Variables to store the image URL and calculated aspect ratio
  let image = '';
  let aspectRatio = 2 / 3;

  /**
   * Parses a string ratio (e.g., "16/9") to a numeric aspect ratio
   * @param ratio - String representing the aspect ratio
   * @returns number - Calculated aspect ratio
   */
  const parseAspectRatio = (ratio: string) => {
    const [w, h] = ratio.split('/').map(Number);
    return w / h;
  };

  // Determine image and aspect ratio based on layout prop
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
    <>
      {/* Touchable card that opens the movie details modal */}
      <Pressable onPress={() => setShowDetails(true)}>
        <View style={[styles.card, { aspectRatio }]}>
          {/* Show loading spinner while image loads */}
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#ffffff" />
            </View>
          )}

          {/* Movie poster image */}
          <Image
            source={{ uri: image }}
            style={styles.cardImage}
            onLoad={() => setLoading(false)}
          />
        </View>
      </Pressable>

      {/* Modal for displaying movie details */}
      <MovieDetailsModal
        visible={showDetails}
        onClose={() => setShowDetails(false)}
        movie={movie}
      />
    </>
  );
}

// Styles for the card and its internal elements
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
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loadingContainer: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
