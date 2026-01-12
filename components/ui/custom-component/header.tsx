import Image from "next/image";
import { Button } from "../button";

export default function Header() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div
        className={`
          flex flex-col items-center justify-start
          min-h-screen
          
          pt-20 sm:pt-0
          bg-white
          w-full
          sm:bg-[url('/headerbg.png')]
          sm:bg-cover
          sm:bg-center
          sm:bg-no-repeat
          overflow-hidden
        `}
      >
        {/* Logo */}
        <div className="mb-4 sm:mb-8">
          <Image
            src="/peel.svg"
            alt="logo image"
            width={119}
            height={30}
            className="w-[80px] sm:w-[110px] md:w-[119px]"
          />
        </div>

        {/* Text */}
        <div className="mb-6 sm:mb-8 flex flex-col items-center text-center">
          <span className="font-light text-xl sm:text-3xl md:text-[32px]">
            Meet iPhone 17.
          </span>
          <span className="font-bold text-2xl sm:text-4xl md:text-[36px]">
            Now protected by Peel.
          </span>
        </div>

        {/* Button */}
        <Button
          className="
            rounded-full
            font-medium
            uppercase
            text-white
            text-xs sm:text-base md:text-lg
            px-6 sm:px-8
            py-2.5 sm:py-3
          "
        >
          Find Your Fit
        </Button>

        {/* Mobile Image (ONLY on mobile) */}
        <div className="mt-10 sm:hidden w-screen flex justify-center overflow-hidden">
          <Image
            src="/headerbg.png"
            alt="iPhone image"
            width={420}
            height={600}
            className="w-screen max-w-screen object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
