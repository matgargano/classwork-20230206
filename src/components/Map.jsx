import movies from "../utils/movies";
import '../css/card.css';

const Map = () => {
    return <div className="cards">
        {movies.map((movie) => {
            const {
                title,
                director,
                year,
                
                genre,
                imdbRating
            } = movie;

            const image = 'https://placebear.com/300/500';
            return <div key={`${title}${director}${year}`} className="cards--card">
                <img className="cards--image" src={image} alt={title} />
                <div className="cards--text-content">
                    <p className="cards--title">{title} ({year})</p>
                    <p className="cards--directed-by">{director}</p>
                    <p className="cards--imdbRating">Rating: {imdbRating}</p>
                    <div>
                        {genre.map(genreSingle => {
                                return <span key={genreSingle} className="cards--genre">
                                    {genreSingle}
                                </span>;
                        })}
                    </div>
                </div>
            </div>
        })}

    </div>
}

export default Map;