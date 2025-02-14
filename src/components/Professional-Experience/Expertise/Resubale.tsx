import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils/twMerge";

import check from "@/public/images/professional/check.svg";

interface PropTypes {
  image: StaticImageData;
  heading: string;
  descirption: string;
  classname: string;
}

const Resubale = (props: PropTypes) => {
  const { image, heading, descirption, classname } = props;
  return (
    <div className="w-full flex justify-center items-center px-5">
      <div
        className={cn(
          "flex pt-[78px] w-full max-w-[1410px] justify-between mob:pt-10",
          classname
        )}
      >
        <Image
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          src={image}
          alt="image"
          className="w-full max-w-[711px]"
        />
        <div
          className="w-full max-w-[647px]"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
        >
          <Text className="text-[48px] leading-[60px] mob:text-[28px] mob:leading-[35px] font-semibold text-white mb-[36px] mob:mt-[30px]">
            {heading}
          </Text>
          <div className="bg-gradient-to-t from-[#48707D]/5 via-[#48707D]/35] to-[#48707D]/35 py-[20px] mob:items-start min-h-[126px] flex justify-center items-center px-[25px] rounded-[16px] gap-4">
            <div className="w-[24px] h-[24px] bg-[#00A7E1] flex items-center justify-center rounded-full flex-shrink-0 mob:mt-2">
              <Image src={check} alt="check" />
            </div>
            <Text className="text-[18px] text-white leading-[28px]">
              {descirption}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resubale;
