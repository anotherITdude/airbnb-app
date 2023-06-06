import React from "react";
import ClientSide from "../components/ClientSide";
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "../trips/TripsClient";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getListings({
    userId: currentUser?.id,
  });
  if (!currentUser) {
    return (
      <ClientSide>
        <EmptyState title="Unauthorized" subtitle="Please Login" />
      </ClientSide>
    );
  }

  if (listings.length === 0) {
    return (
      <ClientSide>
        <EmptyState
          title="No Properties found"
          subtitle="Looks like you have no properties listed"
        />
      </ClientSide>
    );
  }

  return (
    <ClientSide>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientSide>
  );
};

export default PropertiesPage;
