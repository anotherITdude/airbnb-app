import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import ClientSide from "./components/ClientSide";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./Providers/ToasterProvider";
import LoginModal from './components/Modals/LoginModal';
import getCurrentUser from './../app/actions/getCurrentUser'
import RentModal from "./components/Modals/RentModal";
export const metadata = {
  title: "AnotherItDude | Airbnb App",
  description:
    "Airbnb app using NextJS, Typescript, Tailwind CSS and Authentication using next-auth",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;

}) {

  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientSide>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientSide>
        <div className="pb-20 pt-28">
        {children}
        </div>
      </body>
    </html>
  );
}
