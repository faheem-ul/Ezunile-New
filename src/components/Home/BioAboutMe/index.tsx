import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Link from "next/link";
import React from "react";

const BioAboutMe = () => {
  return (
    <>
      <div className="py-20 px-5">
        <div className="flex tab:flex-wrap  justify-between max-w-[1290px] mx-auto border border-[#00A7E1] rounded-[15px]  px-20 tab:px-0">
          <div className="max-w-[795px] py-20 tab:py-5 tab:px-5">
            <Text
              as="h1"
              className="font-bebasNeue text-[70px]  bg-gradient-to-b from-[#3284B6] to-[#163A50] bg-clip-text text-transparent"
            >
              My name is Eze Burts
            </Text>
            <Text className="text-[20px] tab:text-[16px] max-w-[595px]">
              an innovator, who galvanizes people, industry, academia and
              government to achieve revolutionary breakthroughs, especially
              around my life’s purpose of alleviating water scarcity globally.
              Over 2 decades of serving on and leading high performing teams –
              from NCAA Division I college basketball walk-on, to Fortune 500
              Corporations, to Silicon Valley Startups – I’ve cultivated,
              engaged, equipped and unskilled people to unlock their fullest
              potential. My story is a multi-generational story of overcoming
              odds, thriving in the face of seemingly impossible adversities and
              advancing from “Sharecropping to Shareholder Value.” Looking
              forward to collaborating with you!
            </Text>

            <Link
              href="https://www.linkedin.com/in/ezunial-eze-burts-iii-3281b7b0/"
              className="max-w-[216px]"
            >
              <Button className="max-w-[216px] mt-8">Follow Eze</Button>
            </Link>
          </div>
          <div className="border-l-[1px] tab:border-l-0 mob:border-t-[1px] border-[#00A7E1] max-w-[395px] w-full">
            <div className="py-20 px-10 tab:px-5">
              <Text className="text-[20px] max-w-[595px]">Initiatives</Text>
              <hr className="border border-[#00A7E1] w-[133px] mt-4" />
              <Text className="text-[20px] max-w-[595px] mt-10">Bio</Text>
              <hr className="border border-[#00A7E1] w-[133px] mt-4" />
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-[#1E4D78] w-full mb-6 mt-10" />
    </>
  );
};

export default BioAboutMe;
