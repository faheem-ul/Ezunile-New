import React from "react";
import Image from "next/image";

import Resubale from "./Resubale";

import fortune from "@/public/images/professional/fortune.png";
import california from "@/public/images/professional/california.png";
import susutain from "@/public/images/professional/sustain.png";
import external from "@/public/images/professional/external.png";
import global from "@/public/images/professional/global.png";
import regulatory from "@/public/images/professional/regulatory.png";
import teaching from "@/public/images/professional/teaching.png";
import ezunile from "@/public/images/professional/ezunile.png";
import end from "@/public/images/professional/end.png";

const Expertise = () => {
  return (
    <div className="relative bg-[#0D1621]">
      <Resubale
        image={fortune}
        heading="Fortune 500 global Aerospace, Defense and Technology Manufacturer"
        descirption={
          "Oversee company-wide strategy and investment levels for 200+ external technical affiliations, global strategic partnerships, among other accomplishments."
        }
        classname={" mob:flex-col flex-row"}
      />
      <Resubale
        image={california}
        heading="California Drought Conditions, Mitigation Efforts"
        descirption={
          "Lifelong immersion in variable climate cycles, state-wide water pipeline distribution system and reservoir network."
        }
        classname="mob:flex-col flex-row-reverse"
      />
      <Resubale
        image={susutain}
        heading="Sustainability, Environment, Safety Leadership"
        descirption={
          "Led companywide remediation contracting for multi-site storm water, groundwater cleanup and restoration efforts."
        }
        classname="mob:flex-col flex-row"
      />
      <Resubale
        image={external}
        heading="External Technical Outreach / Affiliations"
        descirption={
          "Guided Fortune 500 company vision, strategy, investments with industry, government, academia, and trade associations."
        }
        classname="mob:flex-col flex-row-reverse"
      />
      <Resubale
        image={global}
        heading="Global Research and Development Strategy"
        descirption={
          "Oversaw $75M external sourcing activities, maintained research alliances with premier educational institutions."
        }
        classname="mob:flex-col flex-row"
      />
      <Resubale
        image={regulatory}
        heading="Regulatory Compliance, Government Interface"
        descirption={
          "Served as primary external interface with NASA, DOE and 40+ federal, state and local regulatory agencies."
        }
        classname="mob:flex-col flex-row-reverse"
      />
      <Resubale
        image={teaching}
        heading="Teaching"
        descirption={
          "Eze Burts is an instructor at California State University, Long Beach (CSULB) Center for International Trade and Transportation (CITT). He teaches Group Dynamics, Collaboration in Team Settings, and 21st Century Leadership Skills curriculum to students pursuing the Global Logistics Professional (GLP) designation."
        }
        classname="mob:flex-col flex-row"
      />
      <Resubale
        image={ezunile}
        heading="EzuNile Industries"
        descirption={
          "A research-led desalination transformation, using reverse osmosis to greatly increase efficiency in converting seawater. This commercially-viable revenue generator has tremendous potential to increase freshwater availability worldwide at a fraction of the cost."
        }
        classname="mob:flex-col flex-row-reverse mb-[67px]"
      />
      <Image
        src={end}
        alt="end"
        className="mob:h-[130px] mob:rounded-t-[12px]"
      />
    </div>
  );
};

export default Expertise;
