import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {

    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFav = favoriteCtx.isItemFavorite(props.id);

    function toggleFavoriteHandler() {


        if (itemIsFav) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite(
                {
                    id: props.id,
                    title: props.description,
                    address: props.address,
                    descriptio: props.description,
                    image: props.image
                }
            )
        }


    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteHandler}>
                        {itemIsFav ? "Remove form favorites" : "Add To Favorites"}
                    </button>
                </div>
            </Card>

        </li>
    );
}

export default MeetupItem;