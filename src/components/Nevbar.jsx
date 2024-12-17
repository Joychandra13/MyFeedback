import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { AiOutlineGlobal } from "react-icons/ai";
import SearchBar from "./Common/SearchBar";


export default function Nevbar() {
  return (
    <Navbar maxWidth="2xl" className="border-b-1 border-[#DCDCDC] pt-[42px] pb-[27px]">
      <NavbarBrand>
        <img src="/Logo.png" alt="" />
      </NavbarBrand>
      <NavbarContent className="flex gap-4 " justify="center" >
        <NavbarItem >
          <SearchBar/>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
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
