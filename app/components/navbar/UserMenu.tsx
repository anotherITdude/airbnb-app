"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from './../../hooks/useRegister'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((val) => !val);
  }, []);
  const resigterModal = useRegisterModal()
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div onClick={() => {}} className="navbar__menu_main">
          Airbnb your home
        </div>
        <div onClick={toggleOpen} className="navbar__burger_main">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="navbar__menu_dropdown">
          <div className="lex flex-col cursor-pointer">
            <>
              <MenuItem
                onClick={() => {
                  console.log("Login");
                }}
                label="Login"
              />
              <MenuItem
                onClick={() => {
                  console.log("Signup");
                  resigterModal.onOpen()
                }}
                label="Sign up"
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
