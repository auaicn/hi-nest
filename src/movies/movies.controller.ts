import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {
    console.log('MoviesController created');
  }

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  //   @Get('search')
  //   search(@Query('year') searchingYear: string) {
  //     return `We are searching for a movie made after: ${searchingYear}`;
  //   }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Post()
  create(@Body() createData) {
    return this.moviesService.createOne(createData);
  }

  //   @Patch(':id')
  //   path(@Param('id') movieId: string, @Body() updateData) {
  //     this.movies = this.movies.map((movie) => {
  //       if (movie.id === +movieId) {
  //         return {
  //           ...movie,
  //           ...updateData,
  //         };
  //       }

  //       return movie;
  //     });

  //     return this.movies;
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') movieId: number) {
  //     console.log('movieId    ', movieId);
  //     const found = this.movies.find((movie) => movie.id === movieId);
  //     console.log(found ? 'found' : 'not found');

  //     if (found) {
  //       this.movies = this.movies.filter((movie) => movie.id !== movieId);

  //       return true;
  //     }

  //     this.movies = [];

  //     return false;
  //   }

  //   @Patch(':id')
  //   patch(@Param('id') movieId: number) {
  //     return `This will patch a movie ${movieId}`;
  //   }

  //   @Put('/put')
  //   put(@Body() movieData) {
  //     console.log(movieData);
  //     return movieData;
  //   }
}
