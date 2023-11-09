'use client';

import React from "react";

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link, 
  Button
} from "@nextui-org/react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
      <div name="header" className="grid grid-cols-3 w-full">
      <Navbar className="w-screen max-h-full p-6" onMenuOpenChange={setIsMenuOpen} maxWidth="full">

      <div className="cols-span-1 grid justify-items-start">
      <NavbarContent>
       
       <NavbarBrand className="items-center justify-center">
       <Image
         className="items-center p-4"
         src="/assets/MVoTLogo.png"
         alt="Metaverse-Of-Things"
         width={100}
         height={100}
         priority
         />                        
       </NavbarBrand>

        
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="w-full mt-14 bg-indigo-90 rounded-md">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full text-white"
              href="#"
              size="full"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      </div>


      <div className="grid justify-items-center cols-span-1">

      </div>

      <div className="cols-span-1 grid justify-items-end"> 
      <NavbarContent className="p-0">
        <NavbarMenuToggle className="p-4"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          
        />
      </NavbarContent></div>


      </Navbar>


      </div>
  


  );
}