import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function ContactInformation() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const openImageModal = (src) => {
    setSelectedImage(src);
    setIsImageModalOpen(true);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 p-5 container mx-auto mt-[70px] border-b-1 pb-[52px]">
        {/* Info Section */}
        <div>
          <h3 className="text-[34px] font-semibold mb-[42px] font-Lexend">
            More informations
          </h3>
          <ul className="space-y-[35px] text-[#232323]">
            <li className="flex gap-[17px] font-Roboto items-center">
              <img
                className="h-[27px] w-[17px]"
                src="/Contact (2).png"
                alt=""
              />
              <Button
                onPress={onOpen}
                variant="light"
                className=" underline text-[20px] text-[#232323]"
              >
                {" "}
                See the menu{" "}
              </Button>
            </li>
            <li className="flex gap-[17px] font-Roboto items-center">
              <img
                className="h-[24px] w-[23.01px]"
                src="/Contact (1).png"
                alt=""
              />{" "}
              <a href="tel:+84787372901" className=" text-[20px]">
                +847 87 37 29 01
              </a>
            </li>
            <li className="flex gap-[17px] font-Roboto items-center">
              <img
                className="h-[24px] w-[19px]"
                src="/Contact (9).png "
                alt=""
              />{" "}
              <span className="text-[20px]">Singapour, Bishan</span>
            </li>
            <li className="flex gap-[17px] font-Roboto items-center">
              <img
                className="h-[20px] w-[20px]"
                src="/Contact (8).png"
                alt=""
              />{" "}
              <span className="text-[20px]">7j/7, 08:00 - 22:00</span>
            </li>
            <li className="flex gap-[17px] font-Roboto items-center">
              <img
                className="h-[17px] w-[20.61px]"
                src="/Contact (7).png"
                alt=""
              />{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline text-[20px]"
              >
                www.bellaitalia.com
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-[27px]">
            <img src="/Contact (3).png" alt="" />
            <img src="/Contact (4).png" alt="" />
            <img src="/Contact (5).png" alt="" />
            <img src="/Contact (6).png" alt="" />
          </div>
        </div>

        {/* Map Section */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9238179057953!2d103.8182266153346!3d1.357107599046566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17b6e7226d9b%3A0xf2b4aaf7741ed6b6!2sBishan%20Ang%20Mo%20Kio%20Park!5e0!3m2!1sen!2ssg!4v1706535532521!5m2!1sen!2ssg"
            width="100%"
            height="432px"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      <Modal
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20 ",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
      >
        <ModalContent>
          <ModalBody>
            {/* Gallery Grid */}
            <div className="flex-col gap-4 py-[20px] items-center justify-center">
              <img
                src="/manu.png"
                alt=""
                className="w-full object-cover rounded-lg "
                onClick={() => openImageModal(src)}
                css={{
                  maxWidth: "1127px", // Ensures responsiveness
                }}
              />
              <div className="flex-col justify-center text-center">
                <h1 className="text-[32px] font-Lexend font-semibold mt-[23px] mb-[18px]">
                  Menu Bella Italia
                </h1>
                <Button
                  color="primary"
                  variant="bordered"
                  size="lg"
                  className="text-[19px] font-Roboto font-medium"
                >
                  {" "}
                  <img src="/Vector.png" alt="" /> Dowload this menu
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ContactInformation;
