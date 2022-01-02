import FavoritesContext from '../store/favorites-context';
import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {

    const favoriteCtx = useContext(FavoritesContext);
    const favMeetups = favoriteCtx.favorites;

    let content;
    if (favoriteCtx.totalFavorites === 0) {
        content = <h3>No Favorites yet.</h3>;
    }
    else {
        content = <MeetupList meetups={favMeetups}></MeetupList>;
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>

    )
}

export default FavoritesPage;