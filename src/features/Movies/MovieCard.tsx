import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";


interface MovieCardProps {
    id: number;
    title: string;
    overview: string;
    popularity: number;
}

export function MovieCard({ id, title, overview, popularity }: MovieCardProps) {
    return (
        <div className={styles.card}>
            <img className={styles.thumbnail} src="/movie-thumb.webp" alt="Movie thumbnail"/>
            <div className={styles.content}>
                <Link to={`/movies/${id}`}>{title}</Link>
                <div className={styles.overview}>{overview}</div>
                <div className={styles.popularity}>{popularity}</div>
            </div>
            
        </div>
    )
}