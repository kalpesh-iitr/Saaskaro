// components/Navbar.js

import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#ffffff] py-9 border-b px-16">
      <div className="container flex justify-between items-center">
        <div className="text-[#808080] font-bold">
          <Link href="/">
          <Image
              src="/saaskaro.svg"
              alt="Saaskaro Logo"
            //   className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
        <div className="text-[#808080] space-x-16 font-medium text-base">
          <Link href="/products">
            Products 
          </Link>
          <Link href="/">
            Pricing
          </Link>
          <Link href="/">
            About Us
          </Link>
          <Link href="/">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
