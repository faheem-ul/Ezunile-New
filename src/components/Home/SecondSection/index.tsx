import React from "react";
import Image from "next/image";

import bg from "@/public/images/home/section2bg.png";
import Text from "@/components/ui/Text";

const SecondSection = () => {
  return (
    <div className="relative min-h-[430px] flex justify-center items-center overflow-hidden ">
      <Image
        className="absolute object-cover object-center w-full h-full"
        src={bg}
        alt=""
        width={1440}
        height={1138}
      />
      <div className="w-full max-w-[1440px] relative z-10 gap-5 flex flex-wrap tab:justify-center justify-between items-center">
        <div className="flex-col  max-w-[310px]">
          <Text
            as="h1"
            className="font-bebasNeue text-[50px] text-center bg-gradient-to-b from-[#3284B6] to-[#163A50] bg-clip-text text-transparent"
          >
            GALVANIZING
          </Text>
          <Text className="text-[16px] text-center">
            of the planet is covered in water — but only 3% of that is
            freshwater
          </Text>
        </div>
        <div className="flex-col  max-w-[330px]">
          <Text
            as="h1"
            className="font-bebasNeue text-[50px] text-center bg-gradient-to-b from-[#3284B6] to-[#163A50] bg-clip-text text-transparent"
          >
            CULTIVATING
          </Text>
          <Text className="text-[16px] text-center">
            engaging, equipping and upskilling people so they can realize their
            fullest potential
          </Text>
        </div>
        <div className="flex-col  max-w-[310px]">
          <Text
            as="h1"
            className="font-bebasNeue text-[50px] text-center bg-gradient-to-b from-[#3284B6] to-[#163A50] bg-clip-text text-transparent"
          >
            BRIDGING GENERATION GAPS
          </Text>
          <Text className="text-[16px] text-center">
            breaking down communication barriers, creating inclusive
            environments
          </Text>
        </div>
        <div className="flex-col  max-w-[311px] mt-6">
          <Text
            as="h1"
            className="font-bebasNeue text-[50px] text-center bg-gradient-to-b from-[#3284B6] to-[#163A50] bg-clip-text text-transparent"
          >
            INNOVATING
          </Text>
          <Text className="text-[16px] text-center">
            revitalizing, imbedding new life and vitality into existing business
            models, frameworks and processes; setting new standards of
            excellence
          </Text>
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
