import Image from "next/image";

export default function Section5() {
  return (
    <section className="w-full px-6 py-10">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#F5F5F7] px-8 py-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[36px]  font-bold text-black flex items-center gap-2 mt-[50px] mb-[13px]">
            Pair with Other Essentials
            <span>→</span>
          </h2>

          <button className="rounded-full mb-[53px] bg-[#0B3A53] px-6 py-2 text-[20px] uppercase  font-medium text-white hover:opacity-90 transition">
            SHOP PEEL ACCESSORIES
          </button>
        </div>

        {/* Products */}
        <div className="mt-[104px] flex items-end justify-between gap-10">
          {/* Charger + badge */}
          <div className="relative">
            <Image
              src="/images/product1.png"
              alt="Charger"
              width={120}
              height={260}
              className="object-contain"
            />

            {/* Badge */}
            <div className="absolute top-6 left-14 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-center text-[10px] font-bold text-white leading-tight">
              DON&apos;T
              <br />
              FORGET!
            </div>
          </div>

          {/* Cables */}
          <div className="flex gap-6 mx-[53px]">
            <Image
              src="/images/product1.png"
              alt="USB Cable"
              width={80}
              height={260}
              className="object-contain"
            />
            <Image
              src="/images/product2.png"
              alt="USB Cable"
              width={80}
              height={260}
              className="object-contain"
            />
          </div>

          {/* Wireless Pad */}
          <Image
            src="/images/product3.png"
            alt="Wireless Pad"
            width={220}
            height={220}
            className="object-contain"
          />

          {/* Stand */}
          <Image
            src="/images/product4.png"
            alt="Phone Stand"
            width={180}
            height={220}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
