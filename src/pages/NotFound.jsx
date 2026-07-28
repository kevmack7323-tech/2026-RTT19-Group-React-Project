import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="not-found">
            <h1>404</h1>
            <p>This movie isn't listed</p>
            <Link to="/">Back to Home</Link>
        </main>
    );
}