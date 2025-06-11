import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { MovieItem } from '../../constants/interfaces';

const { width } = Dimensions.get('window');

export function Cover(movie: MovieItem){
    return (
        <ImageBackground
        source={{uri: movie.posters.portrait.url}} // O usa uri si es remota
        style={styles.background}
        resizeMode="cover"
        >
        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
        />

        <View style={styles.infoContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.row}>
            <Text style={styles.meta}>{movie.year}</Text>
            <Text style={styles.meta}>{movie.duration}</Text>
            <Text style={styles.badge}>{movie.rating}</Text>
            </View>
            <View style={styles.row}>
                <FontAwesome name="tv" size={16} color="white" />
                <Text style={styles.rankText}>  #1 in Movies Today</Text>
            </View>
        </View>
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
  background: {
    width: width,
    height: 400,
    justifyContent: 'flex-end',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: 200, // cubre solo la mitad inferior (ajusta según tu caso)
    width: '100%',
  },
  infoContainer: {
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  meta: {
    color: 'white',
    fontSize: 14,
    marginRight: 5,
  },
  dot: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 5,
  },
  badge: {
    backgroundColor: 'transparent',
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
    fontSize: 12,
  },
  rankText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 4,
  },
});