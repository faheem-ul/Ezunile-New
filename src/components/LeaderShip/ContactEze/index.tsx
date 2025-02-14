"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";

import bg from "@/public/images/leadership/bgcontact.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const ContactEze = () => {
  // Define the form data state with proper types
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle form submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    setLoading(true); // Set loading state to true while sending data

    try {
      const { name, email, service, message } = formData;

      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, name, service, message }), // Send the form data
      });

      const data = await response.json();

      if (response.ok) {
        alert("Email sent successfully!");
        // Optionally clear the form after success
        // setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false after request
    }
  };

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="relative overflow-hidden ">
      <Image
        className="w-full h-full object-cover absolute z-0"
        src={bg}
        alt="bg"
      />
      <div className="absolute object-cover object-center w-full h-full bg-black/40">
        {" "}
      </div>
      <div
        className="py-14 mob:px-5"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <div className="w-full border border-[#00A7E1] rounded-[15px] p-[40px] py-[60px] tab:p-[20px]   relative z-10 max-w-[1290px] mx-auto ">
          <Text
            as="h1"
            className=" text-[72px] text-center  font-semibold mob:text-[54px] leading-[88px] mob:leading-[120%] mob:px-5 mb-20"
          >
            Contact Eze Burts
          </Text>
          <form
            action=""
            className="space-y-[64px] w-full max-w-[848px] mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              className="border-b-[1px] border-[#FFFFFF] bg-transparent w-full py-[15px] outline-none placeholder:text-white placeholder:text-[24px] text-[24px] text-white font-inter font-bold"
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required // Make the field required
              autoComplete="off" 
            />
            <input
              className="border-b-[1px] border-[#FFFFFF] bg-transparent w-full py-[15px] outline-none placeholder:text-white placeholder:text-[24px] text-[24px] text-white font-inter font-bold"
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required // Make the field required
              autoComplete="off" 
            />
            <select
              className="border-b-[1px] border-[#FFFFFF] bg-transparent w-full py-[15px] outline-none text-white text-[24px] font-inter font-bold"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required // Make the field required
            >
              <option
                className="bg-[#21587A] text-white mob:text-[18px]"
                value=""
              >
                Choose Services
              </option>
              <option
                className="bg-[#21587A] text-white mob:text-[18px]"
                value="leadership-growth"
              >
                Leadership Growth
              </option>
              <option
                className="bg-[#21587A] text-white mob:text-[18px]"
                value="professional-solutions"
              >
                Professional Solutions
              </option>
              <option
                className="bg-[#21587A] text-white mob:text-[18px]"
                value="speaking-engagements"
              >
                Speaking Engagements
              </option>
            </select>
            <textarea
              className="border-b-[1px] border-[#FFFFFF] bg-transparent w-full py-[15px] outline-none placeholder:text-white placeholder:text-[24px] text-[24px] text-white font-inter font-bold"
              placeholder="Message"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required // Make the field required
            ></textarea>

            <Button type="submit" className="mx-auto max-w-[216px]">
             {loading ? 'Submiting...' : 'Submit'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactEze;
