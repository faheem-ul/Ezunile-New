import React from "react";
import Image from "next/image";
import Link from "next/link";

import location from "@/public/icons/location.svg";
import mail from "@/public/icons/mail.svg";
import linkedine from "@/public/icons/mdi_linkedin.svg";
import fb from "@/public/icons/fe_facebook.svg";
import insta from "@/public/icons/ri_instagram-fill.svg";
import eblogo from "@/public/images/home/eb white 1.png";

import Text from "../ui/Text";

const Footer = () => {
  return (
    <div className="px-5 pb-10 pt-14">
      <div className="max-w-[1290px] flex tab:flex-wrap tab:justify-center justify-between items-center mx-auto">
        <div className="max-w-[204px] space-y-[24px]">
          <Text className="text-[15px] font-medium">
            ALLEVIATING GLOBAL WATER SCARCITY
          </Text>
          <div className="flex gap-[8px] items-start">
            <Image src={location} alt="location" width={24} height={24} />
            <Text className="text-[15px] font-medium">
              Los Angeles, CA, USA
            </Text>
          </div>
          <div className="flex gap-[8px] items-start">
            <Image src={mail} alt="mail" width={24} height={24} />

            <Link href="mailto:contact@ezunile.io">
              <Text className="text-[15px] font-medium">
                contact@ezunile.io
              </Text>
            </Link>
          </div>
        </div>

        {/*  */}
        <div className="">
          <Image src={eblogo} alt="eblogo" width={219} height={180} />
        </div>

        {/*  */}
        <div className="flex gap-[21px]">
          <Link
            className="w-[41px]"
            href="https://www.linkedin.com/in/ezunial-eze-burts-iii-3281b7b0/"
          >
            <Image
              className="cursor-pointer"
              src={linkedine}
              alt="linkdin"
              width={41.22}
              height={41.22}
            />
          </Link>

          <Image
            className="cursor-pointer"
            src={fb}
            alt="fb"
            width={38.05}
            height={38.05}
          />
          <Image
            className="cursor-pointer"
            src={insta}
            alt="insta"
            width={38.05}
            height={38.05}
          />
        </div>
      </div>
      <hr className="max-w-[1290px] border border-[#D9D9D9]/60 w-full my-5 mx-auto" />
      <Text className="text-center text-[#838383] text-[13px] font-normal">
        Copyright © EzuNile Industries 2024. All rights reserved.
      </Text>
    </div>
  );
};

export default Footer;
