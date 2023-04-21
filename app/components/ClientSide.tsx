"use client";
import { useState, useEffect } from "react";

interface ClientSideProps {
  children: React.ReactNode | null;
}
const ClientSide: React.FC<ClientSideProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};
export default ClientSide;
