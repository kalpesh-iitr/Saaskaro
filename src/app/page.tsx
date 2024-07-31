"use client";
import Button from "@/components/Button";
import { CardsComponent } from "@/components/CardsComponent";
import ContactComponent from "@/components/ContactComponent";
import { Footer } from "@/components/Footer";
import HomePageComponent from "@/components/HomePageComponent";
import Image from "next/image";

export default function Home() {
  const handleGetStarted = () => {
    console.log("asas");
  };
  return (
    <>
      <div className="bg-[#ffffff] px-10 md:px-28 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col text-left text-[#000000] w-full md:w-1/2 mb-8 md:mb-0">
          <div className="text-3xl md:text-6xl">
            Effortless Billing & Inventory Management for Your Business
          </div>
          <div className="text-lg md:text-xl mt-4">
            Streamline your operations with SaasKaro - the ultimate solution for
            SMSEs/MSMEs
          </div>
          <div className="flex mt-8">
            <Button
              customClassName="blue_btn"
              onClick={handleGetStarted}
              text="Get Started for Free"
            />
            <Button
              customClassName="white_btn ml-4"
              onClick={handleGetStarted}
              text="Contact Us"
            />
          </div>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-[500px] md:h-[500px] bg-[#00A3FF] rounded-full opacity-10"></div>
            </div>
            <Image
              src="/homepage-gif.gif"
              width={500}
              height={500}
              alt="Homepage GIF"
              className="relative w-64 h-64 md:w-[500px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
      <HomePageComponent />
      <CardsComponent />
      <ContactComponent />
      <Footer />
    </>
  );
}
