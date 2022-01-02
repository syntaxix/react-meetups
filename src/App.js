import { Route, Routes } from 'react-router-dom';

import MainNav from './components/layout/MainNav';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {

  return <div>
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage></AllMeetupsPage>} />
        <Route path="new-meetup" element={<NewMeetupPage></NewMeetupPage>} />
        <Route path="favorites" element={<FavoritesPage></FavoritesPage>} />
      </Routes>

    </Layout>

  </div>;
}

export default App;
