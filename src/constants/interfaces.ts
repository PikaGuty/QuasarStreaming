export interface Poster {
  url: string;
  aspectRatio: string;
}

export interface CastMember {
  characterName: string;
  actorName: string;
}

export interface Crew {
  directors: string[];
  producers: string[];
  writers: string[];
}

export interface Classification {
  rating: string;
  advisoryContent: string[];
}

export interface MovieItem {
  id: string;
  title: string;
  year: number;
  duration: string;
  rating: string;
  quality: string;
  description: string;
  isTopMovie: boolean;
  similarContent: string[];
  posters: {
    portrait: Poster;
    landscape: Poster;
    thumbnail: Poster;
  };
  cast: CastMember[];
  crew: Crew;
  classification: Classification;
}

export interface Container {
  id: string;
  title: string;
  layout: 'portrait-card' | 'landscape-card' | 'thumbnail-card';
  items: MovieItem[];
}

export interface ApiResponse {
  containers: Container[];
}

export interface MyCarouselProps {
    title: string;
    layout: 'portrait-card' | 'landscape-card' | 'thumbnail-card';
    data: MovieItem[];
}

export interface AnimatedCardsProps {
    movie: MovieItem;
    index: number;
    layout: 'portrait-card' | 'landscape-card' | 'thumbnail-card';
};

export interface CardProps {
  image: string;
}