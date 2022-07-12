import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';

import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new'>
          <NewMeetupPage />
        </Route>
        <Route path='/fav'>
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
