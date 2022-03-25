

export default function Footer(props) {
    const {poster, movie, weekday, hour} = props

    return (
        <footer>
            <section className="poster">
                <div className="movie">
                    <img src={poster} alt="cartaz do filme"></img>
                </div>
            </section>
            <div className="movieInfo">
                <span>{movie}</span>
                {weekday !== undefined &&
                    <span>{weekday} - {hour}</span>
                }
            </div>
        </footer>
    )
}