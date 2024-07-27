import Image from "next/image";
export const CardsComponent=()=>{
    return<div className="bg-[#ffffff] px-6 md:px-28 flex flex-col pt-60">
    <div className="flex text-black headingLarge mb-4">Why Choose SaaSKaro?</div>
    <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
    <div className="flex p-6 flex-col items-center md:items-start border rounded-lg">
        <div className="flex mb-6">
            <Image
            src="/star-icon.svg"
            width={20}
            height={20}
            alt="star"
            className="relative"
          />
        </div>
        <div className="flex font-semibold text-2xl">Ease of Use</div>
        <div className="flex font-medium text-base text-[#808080]">Intuitive interface that anyone can use without technical knowledge.</div>
      </div>
      <div className="flex p-6 flex-col items-center md:items-start border rounded-lg">
        <div className="flex mb-6">
            <Image
            src="/star-icon.svg"
            width={20}
            height={20}
            alt="star"
            className="relative"
          />
        </div>
        <div className="flex font-semibold text-2xl">Efficency</div>
        <div className="flex font-medium text-base text-[#808080]">Intuitive interface that anyone can use without technical knowledge.</div>
      </div>
      <div className="flex p-6 flex-col items-center md:items-start border rounded-lg">
        <div className="flex mb-6">
            <Image
            src="/star-icon.svg"
            width={20}
            height={20}
            alt="star"
            className="relative"
          />
        </div>
        <div className="flex font-semibold text-2xl">Ease of Use</div>
        <div className="flex font-medium text-base text-[#808080]">Intuitive interface that anyone can use without technical knowledge.</div>
      </div>
      <div className="flex p-6 flex-col items-center md:items-start border rounded-lg">
        <div className="flex mb-6">
            <Image
            src="/star-icon.svg"
            width={20}
            height={20}
            alt="star"
            className="relative"
          />
        </div>
        <div className="flex font-semibold text-2xl">Ease of Use</div>
        <div className="flex font-medium text-base text-[#808080]">Intuitive interface that anyone can use without technical knowledge.</div>
      </div>
    </div>
    </div>;
}