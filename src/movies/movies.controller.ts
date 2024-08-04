import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  movies: {
    id: number;
    name: string;
  }[] = [
    {
      id: 1,
      name: 'one',
    },
  ];

  @Get()
  getAll() {
    return this.movies;
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: number) {
    return `This will return one movie ${movieId} `;
  }

  @Post()
  create(@Body() movie) {
    this.movies.push(movie);

    return movie;
  }

  @Patch(':id')
  path(@Param('id') movieId: string, @Body() updateData) {
    this.movies = this.movies.map((movie) => {
      if (movie.id === +movieId) {
        return {
          ...movie,
          ...updateData,
        };
      }

      return movie;
    });

    return this.movies;
  }

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
