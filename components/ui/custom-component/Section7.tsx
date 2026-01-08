import Image from "next/image";

export default function Section7() {
  return (
    <section className="w-full px-6 py-12">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#F6F6F6] px-10 py-12">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            <p className="text-sm text-gray-600 mb-2">Complete the Quiz</p>

            <h2 className="text-3xl font-bold` text-black mb-8">
              Which Case Is Right for You?
            </h2>

            {/* Question 1 */}
            <div className="mb-6">
              <p className="mb-3 text-lg font-medium">
                Prefer grip or ultra-thin?
              </p>
              <div className="flex gap-3">
                <button className="rounded-full bg-[#0B3A53] px-6 py-2 text-white font-medium">
                  Grip
                </button>
                <button className="rounded-full bg-white px-6 py-2 text-black font-medium shadow-sm">
                  ultra-thin
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div className="mb-6">
              <p className="mb-3 text-lg font-medium">Need MagSafe?</p>
              <div className="flex gap-3">
                <button className="rounded-full bg-white px-6 py-2 text-black font-medium shadow-sm">
                  Yes
                </button>
                <button className="rounded-full bg-[#0B3A53] px-6 py-2 text-white font-medium">
                  No
                </button>
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <p className="mb-3 text-lg font-medium">Want a pop of color?</p>
              <div className="flex gap-3">
                <button className="rounded-full bg-white px-6 py-2 text-black font-medium shadow-sm">
                  Yes
                </button>
                <button className="rounded-full bg-[#0B3A53] px-6 py-2 text-white font-medium">
                  No
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center">
            <div className="flex h-full w-full flex-col items-center justify-between rounded-3xl bg-[#E5E5E3] px-6 py-10">
              <p className="text-[30px] font-normal tracking-wide text-black text-center">
                RESULT OF QUIZ WILL
                <br />
                APPEAR HERE
              </p>

              <Image
                src="/images/section7banner.jpg"
                alt="Phone Case Result"
                width={260}
                height={420}
                className="object-contain"
              />

              <p className="text-[30px] font-normal tracking-wide text-black text-center">
                RESULT OF QUIZ WILL
                <br />
                APPEAR HERE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
