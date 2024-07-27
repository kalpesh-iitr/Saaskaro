import Link from "next/link";
import Image from "next/image";


export const Footer=()=>{
    return (
        <footer className="flex bg-[#ffffff] flex-col px-6 md:px-28 justify-between gap-40 pt-16 pb-10 md:flex-row">
            <div className="flex flex-col">
                <div className="flex mb-6">
                    <Image
                        src="/saaskaro.svg"
                        width={140}
                        height={80}
                        alt="Homepage GIF"
                        className="relative"
                    />
                </div>
                <div className="flex text-sm text-[#808080] mb-24">SaasKaro is a cutting-edge billing and inventory management software designed specifically for small and medium-sized enterprises (SMSEs) and micro, small, and medium enterprises (MSMEs). Our platform simplifies your business operations by automating billing, tracking inventory, and providing insightful analytics, all in one intuitive interface.</div>
                <div className="flex text-sm text-[#000000]">©2024 Saaskaro, Inc. All Rights Reserved.</div>
            </div>
            <div className="flex flex-col inline-block">
                <Link href="/about">Features</Link>
                <Link href="/contact">Pricing</Link>
                <Link href="/privacy-policy">
                    <div className="inline-block flex">About Us</div>
                </Link>
                <Link href="/privacy-policy">Contact Us</Link>
            </div>
            <div className="flex flex-col inline-block">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/contact">Terms of Service</Link>
            </div>
        </footer>
      );
}