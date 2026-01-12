import Image from "next/image";
import { Button } from "../button";

export default function Section2() {
  const products = [1, 2, 3, 4, 5]; // Can map over real product data

  return (
    <div className="bg-[#F5F5F7] py-12 px-4 sm:px-6 lg:px-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Product Image */}
            <Image
              src={"/images/product_i16.png"}
              alt="product image"
              width={79}
              height={155}
              className="w-[60px] sm:w-[70px] md:w-[79px] object-contain"
            />

            {/* Product Title */}
            <span className="font-light text-lg sm:text-xl md:text-[32px] mt-4 text-center">
              Super Thin Case
            </span>

            {/* Stats */}
            <div className="w-full mt-6">
              {["THICKNESS", "WEIGHT", "PROTECTION"].map((stat, i) => (
                <div key={i} className="mb-4">
                  <span className="font-medium text-sm sm:text-base">
                    {stat}
                  </span>
                  <div className="w-full h-3 sm:h-4 rounded-full border border-[#003953] flex justify-start mt-1">
                    <span className="h-3 sm:h-4 w-8 sm:w-9 bg-[#003953] rounded-full border-2 border-green-800"></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Perfect For */}
            <div className="mt-6 text-center">
              <span className="font-medium text-sm sm:text-[18px]">
                PERFECT FOR THOSE WHO:
              </span>
              <ul className="font-light text-xs sm:text-[13px] list-disc pl-4 text-left mt-2">
                <li>Want scratch protection without the bul</li>
                <li>Love the feel of a naked phone</li>
                <li>Live for minimalist, clean design</li>
                <li>Needs a case that slides into your pocket</li>
                <li>Hates cases that ruin your phone's look</li>
              </ul>
            </div>

            {/* Button */}
            <Button className="mt-6 sm:mt-8 py-2 px-8 sm:px-12 text-[14px] sm:text-[20px] uppercase rounded-full">
              EXPLORE
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
