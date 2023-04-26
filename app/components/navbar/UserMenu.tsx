"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from '@/app/hooks/useRegister'
import useLoginModal from '@/app/hooks/useLogin';
import  {signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SafeUser } from '@/app/types'

interface userMenuProps {
  currentUser?: SafeUser |null
}

const UserMenu: React.FC<userMenuProps> = ({currentUser}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((val) => !val);
  }, []);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const router = useRouter();
  
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
          <div className="flex flex-col cursor-pointer">
            <>
            {currentUser ? (
              <>
                <MenuItem 
                  label="My trips" 
                  onClick={() => router.push('/trips')}
                />
                <MenuItem 
                  label="My favorites" 
                  onClick={() => router.push('/favorites')}
                />
                <MenuItem 
                  label="My reservations" 
                  onClick={() => router.push('/reservations')}
                />
                <MenuItem 
                  label="My properties" 
                  onClick={() => router.push('/properties')}
                />
                <MenuItem 
                  label="Airbnb your home" 
                  onClick={() => {}}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
