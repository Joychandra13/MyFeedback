import React from "react";

function ContactInformation() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 p-5 container mx-auto mt-[70px] border-b-1 pb-[52px]">
        {/* Info Section */}
        <div>
          <h3 className="text-[34px] font-semibold mb-[42px] font-Lexend">More informations</h3>
          <ul className="space-y-[35px] text-gray-700">
            <li className="flex gap-[17px] font-Roboto text-[20px]">
              <img className="w-[20px]" src="/Contact (2).png" alt="" />
              <a href="#" className="text-blue-600 underline">
                See the menu
              </a>
            </li>
            <li className="flex gap-[17px] font-Roboto text-[20px]">
              <img className="w-[20px]" src="/Contact (1).png" alt="" />{" "}
              <a href="tel:+84787372901" className="text-blue-600">
                +847 87 37 29 01
              </a>
            </li>
            <li className="flex gap-[17px] font-Roboto text-[20px]">
              <img className="w-[20px]" src="/Contact (9).png" alt="" /> Singapour, Bishan
            </li>
            <li className="flex gap-[17px] font-Roboto text-[20px]">
              <img className="w-[20px]" src="/Contact (8).png" alt="" /> 7j/7, 08:00 - 22:00
            </li>
            <li className="flex gap-[17px] font-Roboto text-[20px]">
              <img className="w-[20px]" src="/Contact (7).png" alt="" />{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
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
    </>
  );
}

export default ContactInformation;
