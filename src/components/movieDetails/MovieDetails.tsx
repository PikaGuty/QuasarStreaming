import React from 'react';
import { Modal, View, Text, StyleSheet, Image, ScrollView, Pressable, } from 'react-native';
import { MovieItem } from '../../constants/interfaces';

type Props = {
  visible: boolean;     // Determines whether the modal is visible
  onClose: () => void;  // Function to close the modal
  movie: MovieItem | null; // Movie data to display
};

/**
 * MovieDetailsModal Component
 *
 * Displays detailed information about a movie inside a modal.
 * Includes poster image, title, year, duration, classification,
 * rating, description, cast, and crew members.
 */
export function MovieDetailsModal({ visible, onClose, movie }: Props) {
  if (!movie) return null; // If no movie is provided, render nothing

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <ScrollView style = {{ flex: 1, backgroundColor: 'black', }} contentContainerStyle={styles.container}>
        <Image
          source={{ uri: movie.posters.thumbnail.url }}
          style={styles.thumbnail}
        />
        <Text style={styles.title}>{movie.title} ({movie.year})</Text>
        <Text style={styles.detail}>Duration: {movie.duration}</Text>
        <Text style={styles.detail}>Classification: {movie.classification.rating} ({movie.classification.advisoryContent.join(', ')})</Text>
        <Text style={styles.detail}>Quality: {movie.quality}</Text>
        <Text style={styles.detail}>Rating: {movie.rating}</Text>
        <Text style={styles.description}>{movie.description}</Text>

        <Text style={styles.sectionTitle}>Cast:</Text>
        {movie.cast.map((actor, index) => (
          <Text key={index} style={styles.listItem}>
            - {actor.actorName} as {actor.characterName}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Crew:</Text>
        <Text style={styles.listItem}>Director: {movie.crew.directors.join(', ')}</Text>
        <Text style={styles.listItem}>Producers: {movie.crew.producers.join(', ')}</Text>
        <Text style={styles.listItem}>Writers: {movie.crew.writers.join(', ')}</Text>

        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Cerrar</Text>
        </Pressable>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    paddingBottom: 50,
    alignItems: 'center',
    backgroundColor: '#111',
    borderRadius: 12,
  },
  thumbnail: {
    width: 500,
    height: 300,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  detail: {
    color: '#ccc',
    marginBottom: 4,
  },
  description: {
    color: '#ddd',
    marginTop: 12,
    marginBottom: 12,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 12,
  },
  listItem: {
    color: '#ccc',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#e50914',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
