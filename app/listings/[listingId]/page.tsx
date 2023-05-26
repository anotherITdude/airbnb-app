import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientSide from "@/app/components/ClientSide";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  if (!listing) {
    return (
      <ClientSide>
        <EmptyState />
      </ClientSide>
    );
  }

  return (
    <ClientSide>
      <ListingClient listing={listing} currentUser={currentUser} />
    </ClientSide>
  );
};

export default ListingPage;
