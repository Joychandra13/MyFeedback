import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function GallerySection() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const openImageModal = (src) => {
    setSelectedImage(src);
    setIsImageModalOpen(true);
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-center mt-[-3.5%] z-50">
        <img
          className="rounded-full border-5 border-white "
          src="/Bellaitalia (3).png"
          alt=""
        />
      </div>
      <div className="text-start mb-[40px] container mx-auto mt-[79px]">
        <h2 className="text-3xl font-bold">
          Discover our magnificent place in photos
        </h2>
        <p className="text-gray-600 mt-2">
          The lorem ipsum is, in printing, a series of meaningless words used
          temporarily to calibrate a layout. The lorem ipsum is, in printing.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 container mx-auto mb-8">
        {/* Main Photo */}
        <div className="relative">
          <img
            src="/Bellaitalia (4).png"
            alt="Main View"
            className="rounded-lg object-cover w-full"
          />
          <Button
            onPress={onOpen}
            className="absolute bottom-[21px] left-[24px] bg-white px-4 py-2 rounded-full shadow-lg text-gray-800 font-semibold"
          >
            View all photos (7)
          </Button>
        </div>

        {/* Additional Photos */}
        <div className="flex flex-wrap gap-4 justify-center">
          <img
            src="/Bellaitalia (5).png"
            alt="Photo 2"
            className="rounded-lg object-cover w-[48%] md:w-[45%]"
          />
          <img
            src="/Bellaitalia (6).png"
            alt="Photo 3"
            className="rounded-lg object-cover w-[48%] md:w-[45%]"
          />
          <img
            src="/Bellaitalia (7).png"
            alt="Photo 4"
            className="rounded-lg object-cover w-[48%] md:w-[45%]"
          />
          <img
            src="/Bellaitalia (8).png"
            alt="Photo 5"
            className="rounded-lg object-cover w-[48%] md:w-[45%]"
          />
        </div>
      </div>

      {/* Gallery Modal */}
      <Modal
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
      >
        <ModalContent>
          <ModalBody>
            {/* Gallery Grid */}
            <div className="flex-col gap-4 py-[20px]">
              <img
                src="/Modal (1).png"
                alt=""
                className="w-full object-cover rounded-lg "
                onClick={() => openImageModal(src)}
              />
              <img
                src="/Modal (2).png"
                alt=""
                className="w-full object-cover rounded-lg mt-5 "
                onClick={() => openImageModal(src)}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default GallerySection;
