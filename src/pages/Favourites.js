import { useContext } from 'react';

import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavouritesPage() {
  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>No favourites yet. Add some to get started!</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
