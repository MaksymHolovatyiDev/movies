import 'dotenv/config';
import {methods} from '@/environment/variables';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND,
  cache: new InMemoryCache(),
});

export const newReq = (action: string) => {
  switch (action) {
    case methods.getMovies:
      return gql`
        query getMovies {
          getMovies {
            Title
            Year
            Type
            Poster
          }
        }
      `;

    case methods.getMovieByName:
      return gql`
        query getImages($movieTitle: String) {
          getMovieByName(Title: $movieTitle) {
            Title
            Released
            Runtime
            Genre
            Director
            Writer
            Actors
            Plot
            Awards
            Metascore
            imdbRating
            Type
            Poster
            Images
          }
        }
      `;

    case methods.searchMovies:
      return gql`
        query getMovies($movieTitle: String) {
          searchMoviesByName(Title: $movieTitle) {
            Title
            Year
            Type
            Poster
          }
        }
      `;
    case methods.addMovie:
      return gql`
        mutation addMovie($body: InputMovie!) {
          addMovie(body: $body) {
            Title
            Year
            Type
            Poster
          }
        }
      `;

    case methods.updateMovie:
      return gql`
        mutation updateMovie($body: InputMovie!, $mainTitle: String) {
          updateMovie(mainTitle: $mainTitle, body: $body) {
            Title
            Year
            Type
            Poster
          }
        }
      `;

    case methods.deleteMovie:
      return gql`
        mutation deleteMovie($movieTitle: String) {
          deleteMovie(Title: $movieTitle) {
            Title
            Year
            Type
            Poster
          }
        }
      `;
    default:
      return gql`
        query getMovies {
          getMovies {
            Title
            Year
            Type
            Poster
          }
        }
      `;
  }
};
