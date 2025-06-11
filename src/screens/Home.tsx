import { ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Cover } from '../components/cover/Cover';
import { getMovieContainers } from '../hooks/getMovieContainers';
import { Container } from '../constants/interfaces';

export function Home() {
    const insets = useSafeAreaInsets();

    const apiUrl = 'https://nxvgg8i9w3.execute-api.us-east-2.amazonaws.com/functionQuasarStreaming';
    const { movieData, loading, error } = getMovieContainers(apiUrl);

    if (loading) return <Text>Cargando...</Text>;
    if (error || movieData == null) return <Text>Error: {error ? error.message : 'Unknown error'}</Text>;

    const trendingContainer = movieData.containers.find(
        (container: Container) => container.id === 'trending'
        );

    return (
        <ScrollView
        style={{ flex: 1, backgroundColor: 'black' }}
        contentContainerStyle={{ paddingBottom: insets.bottom }}
        >
        {trendingContainer?.items[0] && <Cover {...trendingContainer.items[0]} />}

        </ScrollView>
    );
}