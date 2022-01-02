
import { Link } from 'react-router-dom';
import classess from './MainNav.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNav() {

    const favoriteCtx = useContext(FavoritesContext);

    return (
        <header className={classess.header}>
            <div className={classess.logo}>React Meetups</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="new-meetup">New Meetup</Link>
                </li>
                <li>
                    <Link to="favorites">
                        Favorites
                        <span className={classess.badge}>{favoriteCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default MainNav;