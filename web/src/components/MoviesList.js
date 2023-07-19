import React from 'react';

const MoviesList = props => {
  const renderMovieList = () => {
    if (props.movies && props.movies.length) {
      return <ul className="cards">{renderMovies()}</ul>;
    } else {
      return renderEmptyList();
    }
  };

  const renderMovies = () => {
    if (props.movies && props.movies.length) {
      return props.movies.map(movie => (
        <li key={movie.id} className="card">
          <img className="card__img" src={movie.image} alt={`Carátula de ${movie.title}`} />
          <h3 className="card__title">{movie.title}</h3>
          <p className="card__description">Género: {movie.genre}</p>
        </li>
      ));
    } else {
      return null; // Return null or an empty array depending on how you want to handle this case.
    }
  };

  const renderEmptyList = () => {
    return <p>No hay películas en este listado</p>;
  };

  return renderMovieList();
};

export default MoviesList;
