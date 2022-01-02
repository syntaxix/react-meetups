import classes from './Layout.module.css';
import MainNav from './MainNav';

function Layout(props) {
    return (
        <div>
            <MainNav></MainNav>
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout;