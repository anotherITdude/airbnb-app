import Container from "./components/Container";
import ClientSide from "./components/ClientSide";
import EmptyState from "./components/EmptyState";
import getListings from "@/app/actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Suspense } from "react";

export default async function Home() {
  const currentUser = await getCurrentUser();
  const listings = await getListings();
  if (listings.length === 0) {
    return (
      <ClientSide>
        <EmptyState showReset />
      </ClientSide>
    );
  }
  return (
    <ClientSide>
      <Container>
        <div
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <Suspense fallback={<p>Loading....</p>}>
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            </Suspense>
          ))}
        </div>
      </Container>
    </ClientSide>
  );
}
