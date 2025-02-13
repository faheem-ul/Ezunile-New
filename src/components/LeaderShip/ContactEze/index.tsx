import React from "react";
import Image from "next/image";

import bg from "@/public/images/leadership/bgcontact.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const ContactEze = () => {
  return (
    <div className="relative ">
      <Image
        className="w-full h-full object-cover absolute z-0"
        src={bg}
        alt="bg"
      />

    <div className="py-14">
    <div className="w-full border border-[#00A7E1] rounded-[15px] p-[40px] py-[50px] tab:p-[20px]   relative z-10 max-w-[1290px] mx-auto">
        <Text
          as="h1"
          className=" text-[72px] text-center  font-semibold mob:text-[48px] leading-[88px] mob:leading-[120%] mob:px-5 mb-20"
        >
          Contact Eze Burts
        </Text>

        <form action="" className="space-y-[64px] w-full max-w-[848px] mx-auto">
          <input
            className="border-b-[1px] border-[#FFFFFF] bg-transparent w-full py-[15px] outline-none placeholder:text-white placeholder:text-[24px] text-[24px] text-white font-inter font-bold"
            placeholder="Name"
            type="text"
          />
          <input
            className="border-b-[1px] border-[#FFFFFF] bg-transparent w-full py-[15px] outline-none placeholder:text-white placeholder:text-[24px] text-[24px] text-white font-inter font-bold"
            placeholder="Email"
            type="email"
          />
          <select className="border-b-[1px] border-[#FFFFFF] bg-transparent w-full py-[15px] outline-none text-white text-[24px] font-inter font-bold">
            <option className="bg-[#21587A] text-white" value="">
              Choose Services
            </option>
            <option className="bg-[#21587A] text-white" value="web-development">
              Web Development
            </option>
            <option className="bg-[#21587A] text-white" value="ui-ux">
              UI/UX Design
            </option>
          </select>
          <textarea
            className="border-b-[1px] border-[#FFFFFF] bg-transparent w-full py-[15px] outline-none placeholder:text-white placeholder:text-[24px] text-[24px] text-white font-inter font-bold"
            placeholder="Message"
            rows={3} // Use curly braces for numbers
          ></textarea>

          <Button className="mx-auto max-w-[216px]">Submit</Button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactEze;
