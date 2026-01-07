import Image from "next/image";

export default function Section6() {
  return (
    <div
      className="bg-[#FAFAFA] w-[1440x] h-[156px] mt-[177px]  flex justify-center py-[27px] mb-[138px]

gap-[40px]  "
    >
      <div className=" flex flex-col items-center gap-8 ]">
        <Image
          src={"/images/Truck.png"}
          width="60"
          height="60"
          alt="icon png"
        />
        <div className="flex flex-col items-center  gap-4">
          <span className="font-light text-[24px] leading-[60%]">
            Free shipping in{" "}
          </span>
          <span className="font-light text-[24px] leading-[60%]">
            orders over $40
          </span>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-8">
        <Image
          src={"/images/Truck.png"}
          width="60"
          height="60"
          alt="icon png"
        />
        <div className="flex flex-col items-center  gap-4">
          <span className="font-light text-[24px] leading-[60%]">
            Free shipping in{" "}
          </span>
          <span className="font-light text-[24px] leading-[60%]">
            orders over $40
          </span>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-8">
        <Image
          src={"/images/Truck.png"}
          width="60"
          height="60"
          alt="icon png"
        />
        <div className="flex flex-col items-center  gap-4">
          <span className="font-light text-[24px] leading-[60%]">
            Free shipping in{" "}
          </span>
          <span className="font-light text-[24px] leading-[60%]">
            orders over $40
          </span>
        </div>
      </div>
    </div>
  );
}
