import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import bg from "@/public/images/home/herobg.png";
import ezebutrs from "@/public/images/about/ezeburts.png";
import design from "@/public/images/about/designbg.png";

const EzeBurts = () => {
  return (
    <>
      <div className="relative  mob:min-h-screen   overflow-hidden   ">
        <Image
          className="absolute object-cover object-center w-full h-full"
          src={bg}
          alt=""
          width={1440}
          height={1138}
        />

        <div className="absolute object-cover object-center w-full h-full bg-black/40">
          {" "}
        </div>
        <div className="w-full max-w-[1290px] relative z-10 mt-[250px] mb-[140px]  mob:pt-10    mob:mt-36 mx-auto px-5">
          <Text
            as="h1"
            className=" text-[72px] text-center  mob:text-[48px] leading-[88px] mob:leading-[120%] mob:px-5 mb-20"
          >
            About Eze Burts III
          </Text>

          {/*  */}
          <div className="border border-[#00A7E1] rounded-[15px] p-[40px] tab:p-[20px] flex tab:flex-wrap gap-[46px]">
            <Image
              className="max-w-[500px] tab:w-full"
              src={ezebutrs}
              alt="ezebutrs"
            />

            {/*right  */}
            <div className=" space-y-[22px]">
              <Text className="text-[54px] tab:text-[32px] text-[#FFFFFF] font-normal leading-[120%]">
                By 2040, there will be a worldwide freshwater shortage affecting
                the entire human race. 
              </Text>

              <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px]">
                That startling statistic drives my ambition as a seasoned
                executive with a penchant for bringing people together for
                industry-disrupting transformations.{" "}
              </Text>
              <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px]">
                My solution for the freshwater crisis is developing a water
                filtration system that makes seawater drinkable. But unlike
                common desalination, I’m tapping into leading university
                researchers to use reverse osmosis. When we solve this, we’ll
                achieve my goal in life: alleviating global water scarcity.{" "}
              </Text>
              <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px]">
                I’m an LA native, a dry region with year-round drought
                conditions. In fact, 24 million people in Southern California
                need water piped in from the north just to survive. It’s a
                constant reminder of the need to solve this overwhelming issue —
                and why I’m partnering with chemical, civil, and mechanical
                university research labs.{" "}
              </Text>
              <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px]">
                Together, we’ll disrupt the highly-centralized,
                stuck-in-their-old-ways big water industry. We’ll unlock
                revolutionary approaches to providing fresh water using seawater
                that covers nearly 70% of the planet.{" "}
              </Text>

              <div className="flex xl:flex-wrap  justify-between gap-5 mt-8">
                <Button className="max-w-[206px] mob:max-w-full">
                  Follow Eze
                </Button>
                <Button className="max-w-[206px] mob:max-w-full">
                  Initiatives
                </Button>
                <Button className="max-w-[206px] mob:max-w-full">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image className="w-full min-h-[205px]" src={design} alt="design" />
    </>
  );
};

export default EzeBurts;
