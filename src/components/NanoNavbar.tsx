import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import NavbarAvatar from "./NavbarAvatar";
import { usePathname } from "next/navigation";
import navbarConfig from "~/config/navbar.config";

export default function NanoNavbar() {
  const { data: sessionData } = useSession();
  const pathname = usePathname()

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">NanoShop</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarConfig.map((link, index) => (
          <NavbarItem key={index} isActive={link.url === pathname ? true : false}>
            <Link color={link.url === pathname ? undefined : "foreground"} href={link.url} aria-current={link.url === pathname ? "page" : undefined}>
              {link.text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {sessionData ? (
          <NavbarAvatar />
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              onClick={() => void signIn()}
            >
              Sign in
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  )
}