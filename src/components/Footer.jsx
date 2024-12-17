import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

function Footer() {
  return (
    <>
      <footer class="bg-white dark:bg-gray-900 border-t-1 border-[#DCDCDC]">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
            <div>
              <h2 class="mb-[11px] text-[20px] font-extrabold font-Lexend text-secondary">
                About
              </h2>
              <ul class="text-[#5E5E5E] font-Roboto font-normal text-sm">
                <li class="mb-[13px]">
                  <a href="#" class=" hover:underline">
                    About MyFeedback
                  </a>
                </li>
                <li class="mb-[13px]">
                  <a href="#" class="hover:underline">
                    Investor Relations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-[11px] text-[20px] font-extrabold font-Lexend text-secondary ">
                MyFeedback
              </h2>
              <ul class="text-[#5E5E5E] font-Roboto font-normal text-sm">
                <li class="mb-[13px]">
                  <a href="#" class="hover:underline">
                    MyFeedback for business
                  </a>
                </li>
                <li class="mb-[13px]">
                  <a href="#" class="hover:underline">
                    Collections
                  </a>
                </li>
                <li class="mb-[13px]">
                  <a href="#" class="hover:underline">
                    Talk
                  </a>
                </li>
                <li class="mb-[13px]">
                  <a href="#" class="hover:underline">
                    Events
                  </a>
                </li>
                <li class="mb-[13px]">
                  <a href="#" class="hover:underline">
                    MyFeedback blog
                  </a>
                </li>
                <li class="mb-[13px]">
                  <a href="#" class="hover:underline">
                    Support
                  </a>
                </li>
                <li class="mb-[13px]">
                  <a href="#" class="hover:underline">
                    Developers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-[11px] text-[20px] font-extrabold font-Lexend text-secondary ">
                Languages
              </h2>
              <Dropdown class="text-[#5E5E5E] font-Roboto font-normal text-sm">
                <DropdownTrigger>
                  <Button variant="light">English <AiOutlineDown /></Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Action event example"
                  onAction={(key) => alert(key)}
                >
                  <DropdownItem key="new">English</DropdownItem>
                  <DropdownItem key="copy">Bengali</DropdownItem>
                  <DropdownItem key="edit">French</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <h2 class="mb-[11px] mt-[31px] text-[20px] font-extrabold font-Lexend text-secondary ">
                Countries
              </h2>
              <Dropdown class="text-[#5E5E5E] font-Roboto font-normal text-sm">
                <DropdownTrigger>
                  <Button variant="light">Singapour <AiOutlineDown /></Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Action event example"
                  onAction={(key) => alert(key)}
                >
                  <DropdownItem key="new">Singapour</DropdownItem>
                  <DropdownItem key="copy">Us</DropdownItem>
                  <DropdownItem key="edit">French</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div class="px-4 py-6 flex items-center justify-center">
            <h1 class="text-sm text-secondary font-semibold text-center">
              Copyright © 2023 Septembre 2023 myfeedback, designed by scott
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
