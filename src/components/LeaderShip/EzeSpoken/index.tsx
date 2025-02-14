import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";

import bg from "@/public/images/home/herobg.png";
import ezebutrs from "@/public/images/about/ezeburts.png";
import circle from "@/public/circleblue.svg";
import Button from "@/components/ui/Button";

const EzeSpoken = () => {
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

        <div className="absolute object-cover object-center w-full h-full bg-black/60">
          {" "}
        </div>
        <div
          className="w-full max-w-[1290px] relative z-10 mt-[250px] mb-[70px]  mob:pt-10    mob:mt-36 mx-auto mob:px-5"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
        >
          <Text
            as="h1"
            className=" text-[72px] text-center  mob:text-[54px] leading-[88px] mob:leading-[120%] mob:px-5 mb-20"
          >
            Eze Burts
          </Text>

          {/* */}
          <div
            className="border border-[#00A7E1] rounded-[15px] p-[40px] tab:p-[20px] "
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            <div className="flex tab:flex-wrap gap-[46px]">
              {/* left */}
              <div className="w-full max-w-[800px] relative">
                <Image
                  className=" w-full h-full object-cover rounded-[12px] tab:w-full"
                  src={ezebutrs}
                  alt="ezebutrs"
                />
                <Link
                  href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fezun.innovativedemo.online%2Fwp-content%2Fuploads%2F2022%2F10%2FBio_Eze-Burts_Sept-2022.docx&wdOrigin=BROWSELINK"
                  className="absolute left-4 bottom-4 w-full max-w-[150px]"
                  target="_blank" // Opens in a new tab
                >
                  <Button className="">Full Bio</Button>
                </Link>
              </div>

              {/*right  */}
              <div className=" space-y-[22px] max-w-[628px]">
                <Text className="font-inter text-[54px] font-bold  bg-gradient-to-b from-[#3284B6] to-[#163A50] bg-clip-text text-transparent  leading-[48px] tracking-[2px]">
                  Eze Spoken
                </Text>

                <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px]">
                  Eze has spoken and provided training solutions at conferences,
                  conventions, companies, non-profit organizations, youth
                  groups, grassroots community organizations, and high
                  performing teams in numerous countries across 6 continents.”
                  Add this underneath the previous sentence: “Main Topics for
                  Speaking Engagements and Professional Training Solutions”…
                </Text>
                <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px] flex gap-2">
                  <Image
                    className=" w-[26px] h-[27px] mr-1"
                    src={circle}
                    alt="circle"
                  />{" "}
                  <span>
                    Water and Scarce Natural Resource Management strategies
                  </span>
                </Text>
                <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px] flex gap-2">
                  <Image
                    className=" w-[26px] h-[27px] mr-1"
                    src={circle}
                    alt="circle"
                  />{" "}
                  <span>
                    Team Leadership, Group Dynamics in Corporate Settings and
                    Sports (including empowering former athletes to re-establish
                    their identity, successfully transition and thrive in life
                    after sports).
                  </span>
                </Text>
                <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px] flex gap-2">
                  <Image
                    className=" w-[26px] h-[27px] mr-1"
                    src={circle}
                    alt="circle"
                  />{" "}
                  <span>
                    STEM Talent Pipeline Cultivation: Inspiring, galvanizing and
                    equipping emerging and mid-career professionals, and next
                    generation leaders to thrive in the future STEM economy
                  </span>
                </Text>
                <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px] flex gap-2">
                  <Image
                    className=" w-[26px] h-[27px] mr-1"
                    src={circle}
                    alt="circle"
                  />{" "}
                  <span>
                    Corporate Innovation Ecosystems and Workforce Talent
                    Management: implementing agile talent acquisition processes,
                    accelerating leadership development, advancing diversity and
                    equity strategies and building inclusive cultures, bridging
                    generation gaps in the workplace.
                  </span>
                </Text>
                <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px] flex gap-2">
                  <Image
                    className=" w-[26px] h-[27px] mr-1"
                    src={circle}
                    alt="circle"
                  />{" "}
                  <span>
                    Major Life Transitions: quickly adapting, while boldly
                    setting healthy boundaries, and thriving in new and
                    unfamiliar territory (including successfully managing
                    relocations, navigating Corporate downsizing, and
                    communicating through complexity and difficulty when life
                    events turn you upside down).
                  </span>
                </Text>
              </div>
            </div>
            {/* bottom */}
            <div
              className="space-y-[20px] mt-[30px]"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px] flex gap-2">
                <Image
                  className=" w-[26px] h-[27px] mr-1"
                  src={circle}
                  alt="circle"
                />{" "}
                <span>
                  Strategic Corporate Philanthropy and Non-profit Governance
                  Leadership: Strategic Alliance Formation and cultivation:
                  Equip leaders of nonprofit organizations to alleviate barriers
                  and cultivate meaningful, long-term, strategic partnerships
                  with corporate philanthropy leaders. Help non-profit leaders
                  fully unlock the “Triple Impact Corporate Growth Engine“ by
                  galvanizing
                  <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px] flex gap-2 mt-3">
                    1. Corporate Donations
                  </Text>
                  <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px] flex gap-2 mt-3">
                    2. Volunteer Grants, and
                  </Text>
                  <Text className="text-[18px] tab:text-[16px] text-[#FFFFFF] font-normal leading-[26px] flex gap-2 mt-3">
                    3. Employee Match Donations to revitalize their service
                    delivery models, imbed new life into their programming, and
                    more effectively serve their stakeholders.
                  </Text>
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EzeSpoken;
