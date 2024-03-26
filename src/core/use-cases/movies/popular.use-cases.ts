import {HttpAdapter} from '../../../config/adapters/http';
import {PopularMovieDBResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers';
import type {Movie} from '../../entities';

// eslint-disable-next-line prettier/prettier
export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularMovieDBResponse>('/popular');
    return popular.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching movies -- moviesPopularUseCase`);
  }
};
