import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex bg-[#ffffff] flex-col-reverse px-10 md:px-28 justify-between pt-16 pb-10 md:flex-row gap-8">
      <div className="flex flex-col md:w-1/2">
        <div className="flex mb-6">
          <Image
            src="/saaskaro.svg"
            width={140}
            height={80}
            alt="Homepage GIF"
            className="relative"
          />
        </div>
        <div className="flex text-sm text-[#808080] mb-24">
          SaasKaro is a cutting-edge billing and inventory management software
          designed specifically for small and medium-sized enterprises (SMSEs)
          and micro, small, and medium enterprises (MSMEs). Our platform
          simplifies your business operations by automating billing, tracking
          inventory, and providing insightful analytics, all in one intuitive
          interface.
        </div>
        <div className="flex text-sm text-[#000000]">
          ©2024 Furnate, Inc. All Rights Reserved.
        </div>
      </div>
      <div className="flex flex-col inline-block w-1/4 text-[#000000] font-bold gap-3">
        <div className="flex text-sm text-[#808080] mb-4">QUICK LINKS</div>
        <Link href="/">Features</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
      </div>
      <div className="flex flex-col w-1/4 text-[#000000] font-bold gap-3">
        <div className="flex text-sm text-[#808080] mb-4">CORPORATE</div>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
    </footer>
  );
};
