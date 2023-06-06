import EmptyState from "../components/EmptyState";
import ClientSide from "../components/ClientSide";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const favorites = await getFavoriteListings();

  if (!currentUser) {
    return;
    <ClientSide>
      <EmptyState title="Unauthorised" subtitle="Please Login" />;
    </ClientSide>;
  }

  if (favorites.length === 0) {
    return (
      <ClientSide>
        <EmptyState
          title="No favorites found"
          subtitle="Please add favorites by clicking on hearrt icon on any property"
        />
      </ClientSide>
    );
  }

  return (
    <ClientSide>
      <FavoritesClient favorites={favorites} currentUser={currentUser} />
    </ClientSide>
  );
};

export default FavoritesPage;
