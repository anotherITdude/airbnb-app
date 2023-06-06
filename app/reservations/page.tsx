import EmptyState from "../components/EmptyState";
import ClientSide from "../components/ClientSide";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientSide>
        <EmptyState title="Unauthorised" subtitle="Please login" />
      </ClientSide>
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientSide>
        <EmptyState
          title="No Reservations found"
          subtitle="Looks like there are no reservations on your property"
        />
      </ClientSide>
    );
  }

  return (
    <ClientSide>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientSide>
  );
};

export default ReservationsPage;
