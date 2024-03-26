import {HttpAdapter} from '../../../config/adapters/http';
import {PopularMovieDBResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers';
import type {Movie} from '../../entities';

// eslint-disable-next-line prettier/prettier
export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<PopularMovieDBResponse>('/top_rated');
    return topRated.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching movies -- moviesTopRatedUseCase`);
  }
};
