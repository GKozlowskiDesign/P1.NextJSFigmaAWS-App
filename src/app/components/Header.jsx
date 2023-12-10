'use client';

import React from "react";

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link, 
  
} from "@nextui-org/react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Mission", "Vision", "Ecosystem", "Community"];

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    // Close the menu after clicking on a link
    setIsMenuOpen(false);
  };

  return (
    <div name="header" className="grid grid-cols-3 w-full">
      <Navbar
        className="w-screen max-h-full p-6 bg-black text-white "
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
      >
        <div className="cols-span-1 grid justify-items-start">
          <NavbarContent>
            <NavbarBrand className="items-center justify-center">
              <Image
                className="items-center p-1"
                src="/assets/MetaverseOfThings.png"
                alt="Metaverse-Of-Things"
                width={60}
                height={60}
                priority
              />
            </NavbarBrand>
          </NavbarContent>

        
        </div>

      
      </Navbar>
    </div>
  );
}