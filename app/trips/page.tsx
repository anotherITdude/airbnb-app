import EmptyState from "../components/EmptyState";
import ClientSide from "../components/ClientSide";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientSide>
        <EmptyState title="Unauthorized" subtitle="Please Login" />
      </ClientSide>
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientSide>
        <EmptyState
          title="No trips found"
          subtitle="Looks like you havent reserved any trips"
        />
      </ClientSide>
    );
  }

  return (
    <ClientSide>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientSide>
  );
};

export default TripsPage;
