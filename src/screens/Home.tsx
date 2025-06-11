import { ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Constants from 'expo-constants';


import { Cover } from '../components/cover/Cover';
import { Carousel } from '../components/carousel/Carousel';
import { getMovieContainers } from '../hooks/getMovieContainers';
import { Container } from '../constants/interfaces';


/**
 * Home Screen Component
 * 
 * This component serves as the main screen of the app, displaying a cover image
 * for the featured movie and a carousel of other movie containers.
 * It fetches movie data from an API and handles loading and error states.
 * 
 * @returns {JSX.Element} The rendered Home screen.
 */
export function Home() {
    const insets = useSafeAreaInsets();

    // URL of the API endpoint to fetch movie data
    const { API_URL } = Constants.expoConfig?.extra || {};
    const { movieData, loading, error } = getMovieContainers(API_URL);

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
        {trendingContainer?.items[0] && <Cover {...trendingContainer.items[0]} />} // Display the cover for the first item in the trending container
        // Map through the containers and render a Carousel for each one, excluding the 'trending' container
        {movieData.containers
        .filter((container: Container) => container.id.toLowerCase() !== 'trending')
        .map((container: Container) => (
            <Carousel
            key={container.id}
            title={container.title}
            data={container.items}
            layout={container.layout}
            />
        ))}
        </ScrollView>
    );
}