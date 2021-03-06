import { FC } from "react";

const DEFAULT_PLACEMENT_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

type Props = { movie: string; poster: any; title: string; year: number };

const Movie: FC<Props> = (props) => {
  const { movie, poster, title, year } = props;

  return (
    <div className="movie">
      <h2>{movie}</h2>
      <div>
        <img width="200" alt={`The movie titled:${title}`} src={poster} />
      </div>
      <p>{year}</p>
    </div>
  );
};

export default Movie;
