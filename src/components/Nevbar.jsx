import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { AiOutlineGlobal } from "react-icons/ai";
import SearchBar from "./Common/SearchBar";
import { NavLink } from "react-router";


export default function Nevbar() {
  return (
    <Navbar maxWidth="2xl" className="border-b-1 border-[#DCDCDC] pt-[42px] pb-[27px]">
      <NavbarBrand className="md:flex gap-4 hidden">
        <NavLink to="/">
           <img src="/Logo.png" alt="" />
        </NavLink>
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center" >
        <NavbarItem >
          <SearchBar/>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="md:flex gap-4 hidden">
        <NavbarItem >
            <a href="/"><AiOutlineGlobal className="w-[20px] h-[20px]"/></a>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} radius="full" href="#" variant="flat" className="bg-secondary text-white">
          MyFeedback for business
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
