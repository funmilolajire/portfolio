import { Link } from 'react-router-dom';
export const Logo = ({ fillColor }) => {
    return (
        <section className="logo">
            <Link to="/">
                <h1 style={{ color: fillColor }}>FO</h1>
            </Link>
        </section>
    )
}