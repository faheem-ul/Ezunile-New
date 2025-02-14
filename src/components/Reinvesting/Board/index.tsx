// src/components/CommunitySection.tsx
import React from "react";
import CommunityCard from "./ReusableBoardCard";

import Text from "@/components/ui/Text";

import boardone from "@/public/images/board/image1.png";
import boardtwo from "@/public/images/board/board2.png";
import boardthree from "@/public/images/board/board3.png";
import boardfour from "@/public/images/board/board4.png";
import boardfive from "@/public/images/board/board5.png";
import boardsix from "@/public/images/board/board6.png";
import boardseven from "@/public/images/board/board7.png";
import Image from "next/image";

import borderIcon from "@/public/images/board/border-icon.svg"; // Replace with actual path

const communityData = [
  {
    title: "Technology Council Member, Chicagoland Chamber of Commerce",
    description:
      "The Technology Council of the Chicagoland Chamber of Commerce educates the business community and other key stakeholders about emerging technologies, trends, and disruptions that will impact our economy and future workforce. Comprising chief technology officers, chief innovation officers, heads of product, and leaders in healthcare, biotech, manufacturing, operations and business, the Technology Council has broad representation from industries vital to the region’s diverse economy.",
    image: boardone,
  },
  {
    title:
      "Member of the Board of Directors, CHISE- Chicago Pre-College Science and Engineering Program",
    description:
      "ChiS&E is a non-profit organization dedicated to equipping the next generation of innovators with the skills necessary to lead and thrive in the STEM economy of the future. We harness the natural curiosity of young people through investments, volunteerism, and strategic partnerships with academia, industry and government to inspire students to pursue STEM career paths and solve real-world problems.",
    image: boardtwo,
  },
  {
    title:
      "Member, Boeing Employees Community Fund Chicago Chapter Grant-making Committee",
    description:
      "While serving as a volunteer and committee member over a 5-year period, the Fortune 500 Corporate charitable giving and philanthropy program extended more than $50 million in grants to more than 500 community-based organizations across 50 countries globally. I also meaningfully engaged with and inspired 1,500+ students in the Chicago Public Schools system - many of whom are next-generation STEM leaders, innovators and entrepreneurs.",
    image: boardthree,
  },
  {
    title: "Member of the Board of Directors, Thriving Elements",
    description:
      "Director of Governance, Compliance and Audit. Provide a structured, sustainable mentoring relationship to create opportunities in STEM for girls in underserved, underprivileged neighborhoods and school districts. Thriving Elements' vision is to create a dynamic community of women leaders in STEM who have overcome adversity in a way that empowers them to make an impact in their communities and help facilitate the success of others around them.",
    image: boardfour,
  },
  {
    title:
      "Enterprise Professional Development Program Manager, Boeing REACH Employee Development (eDev) Team",
    description:
      "Collaborated with Boeing Human Resources Strategic Workforce Planning to implement multigenerational workforce initiatives. Inspired a team of volunteers to deploy a new Enterprise Career Development Framework targeting 50,000 employees with 0-5 years of service with 60% Engineering and Technical job classification representation, as well as 47% Union representation. Increased retention of impactful professionals, developed underperformers and cultivated a diverse talent pipeline to fuel Boeing's 2nd century of innovation.",
    image: boardfive,
  },
  {
    title:
      "StartingBloc Fellow and Member of U.S. West Coast Expansion Alumni Leadership Team",
    description:
      "Inducted as a StartingBloc Fellow in 2008 after completing the Institute for Innovation at London School of Business, United Kingdom – a transformative five-day experience that teaches innovators how to maximize their impact. Institute connects entrepreneurs, change makers and corporate innovators to new resources and a framework proven to facilitate global economic growth. The Institute is a gateway into the StartingBloc network of 3,100 Fellows from over 50 countries and 221 universities.",
    image: boardsix,
  },
  {
    title: "Compliance Council Member and University Delegate, NCAA",
    description:
      "As a member of USC Men's Varsity Basketball team, I was appointed to serve alongside a select number of Pacific 12 conference (then Pac-10) student-athletes as an NCAA National Student-Athletic Advisory Committee (SAAC) Compliance Council member. SAAC endeavors to enhance the holistic student-athlete experience by promoting opportunity, protecting student-athlete welfare and fostering a positive student-athlete image. SAAC has numerous functions: (1) generate a student-athlete voice within the NCAA structure; (2) obtain student-athlete response to proposed NCAA legislation; (3) empower student-athletes to recommend, review and comment on potential NCAA legislation; (4) enable active participation in the administrative process of the NCAA and collegiate athletics programs; and (5) promote a positive student-athlete image.",
    image: boardseven,
  },
];

const CommunitySection: React.FC = () => {
  return (
    <div className="bg-[#0D1723]/90 px-5">
      <div className="relative z-20 flex items-start mob:items-center mob:flex-col gap-[82px] justify-center py-5">
        {/* Sticky Left Section */}
        <div className=" w-full max-w-[567px] sticky mob:relative top-2 flex flex-col justify-center mob:items-center">
          <Text className="text-[96px] mob:text-[60px] mob:leading-[65px] font-bebasNeue font-medium leading-[100px] uppercase bg-gradient-to-t from-[#163A50] to-[#3284B6]/90 text-transparent bg-clip-text">
            Reinvesting in <br /> the Community
          </Text>

          <Text className="mt-6 text-[32px] mob:text-center">
            Past and present board and advisory committee involvement
          </Text>
        </div>

        <div className="flex flex-col items-center sticky mob:relative top-0 h-[100vh] mob:hidden min-w-[34px]">
          <div className="relative h-[100vh] flex justify-center items-start">
            <Image
              className="relative z-20"
              src={borderIcon}
              alt="Bottom icon"
              width={34}
              height={34}
            />
            <Image
              className="bottom-0 absolute z-20"
              src={borderIcon}
              alt="Bottom icon"
              width={34}
              height={34}
            />
            <div className="border border-[#21587A] w-[1px] mx-auto h-full absolute top-0"></div>
          </div>
        </div>

        {/* Scrollable Right Section */}
        <div className="overflow-y-auto w-full max-w-[690px] flex flex-col gap-[0px] ">
          {communityData.map((item, index) => (
            <CommunityCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              isLast={index === communityData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
