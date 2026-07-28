function Item({ movie }) {
    return (
        <div>
            <h2>{movie.Title}</h2>
            <img
            src={movie.Poster}
            alt={movie.Title}
            />
        </div>
    )
}