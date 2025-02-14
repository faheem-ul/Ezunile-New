import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";

import borderIcon from "@/public/images/board/border-icon.svg"; // Replace with actual path

type CommunityCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  isLast?: boolean;
};

const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  description,
  image,
  isLast,
}) => {
  return (
    <div className="flex gap-[40px] mob:gap-7 min-h-screen">
      {/* Left Section with Border and Icons */}
      <div className=" flex-col items-center hidden mob:block">
        <Image src={borderIcon} alt="Bottom icon" width={34} height={34} />
        {!isLast && ( // Hide the line for the last item
          <div className="border border-[#21587A] flex-grow"></div>
        )}
      </div>

      {/* Right Content Section */}
      <div className="flex-1 space-y-4">
        {" "}
        {/* Apply spacing here */}
        <Text className="text-[32px] leading-[43px] text-white font-bold">
          {title}
        </Text>
        <Text className="text-[16px] text-white">{description}</Text>
        <Image
          src={image}
          alt="image"
          className="w-full max-w-[605px] min-h-[255px] rounded-lg pb-[60px]"
        />
      </div>
    </div>
  );
};

export default CommunityCard;
