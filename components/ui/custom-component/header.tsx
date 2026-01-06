import Image from "next/image";
import { Button } from "../button";

export default function Header() {
  return (
    <div className="min-h-screen  overflow-hidden">
      <div
        className="flex justify-start flex-col pt-[12]  items-center h-[98vh]"
        style={{
          backgroundImage: "url('headerbg.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <div className="mb-[22]">
          <Image src={"peel.svg"} alt="logo image" width="119" height="30" />
        </div>
        <div className="mb-[8]   flex flex-col items-center">
          <span className="font-light text-[32px]  ">Meet iPhone 17.</span>
          <span className="font-bold text-[36px]">Now protected by Peel.</span>
        </div>
        <Button className="rounded-full font-medium text-[20px] uppercase text-white">
          Find Your Fit
        </Button>
      </div>
    </div>
  );
}
