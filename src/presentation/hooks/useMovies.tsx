import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities';
import {moviesNowPlayingUseCase} from '../../core/use-cases/movies';
import {movieDBFetcher} from '../../config/adapters/moviedb.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>();

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies = await moviesNowPlayingUseCase(movieDBFetcher);
  };
  return {};
};
