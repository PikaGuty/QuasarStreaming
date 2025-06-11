import { View, Text } from 'react-native';
import { getMovieContainers } from '../hooks/getMovieContainers';

export function Home() {

    const apiUrl = 'https://nxvgg8i9w3.execute-api.us-east-2.amazonaws.com/functionQuasarStreaming';
    console.log('API URL:', apiUrl);
    const { movieData, loading, error } = getMovieContainers(apiUrl);

    if (loading) return <Text>Cargando...</Text>;
    if (error || movieData == null) return <Text>Error: {error ? error.message : 'Unknown error'}</Text>;

    console.log('Movie Data:', movieData);

  return (
    <View>
        <Text style={{color:'white'}}>Hola Mundo!</Text>
    </View>
  );
}