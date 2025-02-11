import React from "react";
import Image from "next/image";

import bg from "@/public/images/home/herobg.png";
// import waterimg from "@/public/images/home/water.png";
import Text from "@/components/ui/Text";
// import Button from "@/components/ui/Button";

const BoardHero = () => {
  return (
    <div className="relative h-screen mob:h-full min-h-[908px] mob:min-h-screen  flex justify-center items-center overflow-hidden  ">
      <Image
        className="absolute object-cover object-center w-full h-full"
        src={bg}
        alt=""
        width={1440}
        height={1138}
      />

      <div className="absolute object-cover object-center w-full h-full bg-gradient-to-b from-[#0D1723]/90 to-[#0D1723]/80">
        {" "}
      </div>
      <div className="w-full max-w-[1290px] relative z-10 mt-20 mob:pt-10 xl:pl-5 mob:pl-0 mob:mt-[80px]">
        <Text
          as="h1"
          className="text-[72px] text-center mob:text-[48px] leading-[88px] mob:leading-[120%] mob:px-5"
        >
          Boards and Advisory Committees
        </Text>
      </div>
    </div>
  );
};

export default BoardHero;
