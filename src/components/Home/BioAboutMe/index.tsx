import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import React from "react";

const BioAboutMe = () => {
  return (
    <div className="py-20 ">
      <div className="flex  justify-between max-w-[1395px] mx-auto border border-[#00A7E1] rounded-[15px]  px-20">
        <div className="max-w-[795px] py-20">
          <Text
            as="h1"
            className="font-bebasNeue text-[70px]  bg-gradient-to-b from-[#3284B6] to-[#163A50] bg-clip-text text-transparent"
          >
            My name is Eze Burts
          </Text>
          <Text className="text-[20px] max-w-[595px]">
            an innovator, who galvanizes people, industry, academia and
            government to achieve revolutionary breakthroughs, especially around
            my life’s purpose of alleviating water scarcity globally. Over 2
            decades of serving on and leading high performing teams – from NCAA
            Division I college basketball walk-on, to Fortune 500 Corporations,
            to Silicon Valley Startups – I’ve cultivated, engaged, equipped and
            unskilled people to unlock their fullest potential. My story is a
            multi-generational story of overcoming odds, thriving in the face of
            seemingly impossible adversities and advancing from “Sharecropping
            to Shareholder Value.” Looking forward to collaborating with you!
          </Text>

          <Button className="max-w-[216px] mt-8">Follow Eze</Button>
        </div>
        <div className="border-l-[1px] border-[#00A7E1] max-w-[395px] w-full">
          <div className="py-20 px-10">
            <Text className="text-[20px] max-w-[595px]">Initiatives</Text>
            <hr className="border border-[#00A7E1] w-[133px] mt-4" />
            <Text className="text-[20px] max-w-[595px] mt-10">Bio</Text>
            <hr className="border border-[#00A7E1] w-[133px] mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioAboutMe;
