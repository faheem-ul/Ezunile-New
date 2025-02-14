import React from "react";
import Image from "next/image";

import bg from "@/public/images/home/herobg.png";
import waterimg from "@/public/images/home/water.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";

const HeroHome = () => {
  return (
    <div className="relative h-screen mob:h-full min-h-[908px] mob:min-h-screen  flex justify-center items-center overflow-hidden  ">
      <Image
        className="absolute object-cover object-center w-full h-full"
        src={bg}
        alt=""
        width={1440}
        height={1138}
      />
      <Image
        className="absolute right-0 z-10 w-[45%] mob:hidden top-[20px]"
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
        src={waterimg}
        alt=""
        width={658.71}
        height={1254.77}
      />
      <div className="absolute object-cover object-center w-full h-full bg-black/50">
        {" "}
      </div>
      <div
        className="w-full max-w-[1290px] relative z-10 mt-20 mob:pt-10   mob:mt-36"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
      >
        <Text
          as="h1"
          className="max-w-[709px] text-[72px]  mob:text-[48px] leading-[88px] mob:leading-[120%] mob:px-5"
        >
          My purpose in life is alleviating global water scarcity.
        </Text>
        <Link className="w-full max-w-[216px]" href="/bio">
          <Button className="max-w-[216px] mob:mx-5 mt-[50px]">
            Learn More
          </Button>
        </Link>
        <Image
          className="z-10 w-full mt-[-50px] hidden mob:block"
          src={waterimg}
          alt=""
          width={658.71}
          height={1254.77}
        />
      </div>
    </div>
  );
};

export default HeroHome;
