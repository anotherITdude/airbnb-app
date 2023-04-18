'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <Image
      className="hidden md:block cursor-pointer"
      alt="logo"
      height="100"
      width="100"
      src="/logo.png"
    />
  );
};

export default Logo;
