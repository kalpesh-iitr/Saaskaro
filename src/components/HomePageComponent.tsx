import Image from "next/image";
import Button from "./Button";

function HomePageComponent() {
    const handleGetStarted=()=>{
        console.log("asas");
    }
  return (<>
    <div className="bg-[#ffffff] px-6 md:px-28 flex flex-col justify-between items-center">
      <div className="flex text-black w-full headingLarge mb-4">What We Do?</div>
      <div className="flex flex-col md:flex-row w-full items-center md:items-start">
        <div className="flex justify-center md:justify-start md:w-1/2">
          <Image
            src="/dukaanImage.jpg"
            width={700}
            height={500}
            alt="Homepage GIF"
            className="relative"
          />
        </div>
        <div className="flex flex-col text-black paraStyle mt-4 md:mt-0 md-pt-8 md:w-1/2 md:pl-8 items-center">
          <p>
            <span className="text-[#00A3FF]">SaaSKaro</span> helps small and medium-sized enterprises manage their billing and inventory with ease, allowing you to focus on growing your business.
          </p>
          <div className="flex mt-8">
            <Button customClassName="white_btn ml-4" onClick={handleGetStarted} text="Learn More"/>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePageComponent;
