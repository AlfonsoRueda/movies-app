import {HttpAdapter} from '../../../config/adapters/http';
import {PopularMovieDBResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers';
import type {Movie} from '../../entities';

// eslint-disable-next-line prettier/prettier
export const moviesUpComingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<PopularMovieDBResponse>('/upcoming');
    return upcoming.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching movies -- moviesUpComingUseCase`);
  }
};
