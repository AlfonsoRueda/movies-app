import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities';
import {
  moviesNowPlayingUseCase,
  moviesPopularUseCase,
  moviesTopRatedUseCase,
  moviesUpComingUseCase,
} from '../../core/use-cases/movies';
import {movieDBFetcher} from '../../config/adapters/moviedb.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = moviesNowPlayingUseCase(movieDBFetcher);

    const popularPromise = moviesPopularUseCase(movieDBFetcher);

    const topRatedPromise = moviesTopRatedUseCase(movieDBFetcher);

    const upComingPromise = moviesUpComingUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upComingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };
  return {
    //Properties
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
  };
};
