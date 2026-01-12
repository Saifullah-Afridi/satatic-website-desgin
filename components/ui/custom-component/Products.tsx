import Image from "next/image";
// import caseBlue from "/public/9db68560-efdf-4c01-8381-4a20f25beaae.png"; // Your uploaded image

const filters = ["Sort by", "Type", "Phone Model", "Color"];
const tabs = ["Magnetic", "Super Thin", "Flex", "Bumper", "RePeel"];

const products = [
  {
    title: "Super Thin iPhone 17 Pro Max Case",
    category: "Super Thin Case",
    price: "$35.00",
    oldPrice: "$39.00",
    colors: ["white", "black", "gray", "blue", "beige"],
    // image: caseBlue,
  },
  {
    title: "Magnetic iPhone 17 Pro Max Case",
    category: "Magnetic Case",
    price: "$35.00",
    oldPrice: "$39.00",
    colors: ["white", "black", "gray", "blue", "beige"],
    // image: caseBlue,
  },
  {
    title: "RePeel iPhone 17 Pro Max recycled Case",
    category: "RePeel Case",
    price: "$35.00",
    oldPrice: "$39.00",
    colors: ["white", "black", "gray", "blue", "beige"],
    // image: caseBlue,
  },
  {
    title: "RePeel iPhone 17 Pro Max recycled Case",
    category: "RePeel Case",
    price: "$35.00",
    oldPrice: "$39.00",
    colors: ["white", "black", "gray", "blue", "beige"],
    // image: caseBlue,
  },
  {
    title: "RePeel iPhone 17 Pro Max recycled Case",
    category: "RePeel Case",
    price: "$35.00",
    oldPrice: "$39.00",
    colors: ["white", "black", "gray", "blue", "beige"],
    // image: caseBlue,
  },
  {
    title: "RePeel iPhone 17 Pro Max recycled Case",
    category: "RePeel Case",
    price: "$35.00",
    oldPrice: "$39.00",
    colors: ["white", "black", "gray", "blue", "beige"],
    // image: caseBlue,
  },
];

export default function Products() {
  return (
    <div className="p-8 bg-white mynp-20">
      {/* Top Tabs */}
      <div className="flex space-x-2 justify-end mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-8 py-4 rounded-full text-sm font-medium ${
              idx === 0 ? "bg-black text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex  gap-8">
        {/* Sidebar Filters */}
        <div className="w-48 space-y-4">
          {filters.map((filter) => (
            <div key={filter} className="border-b pb-2">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="font-medium">{filter}</span>
                <span className="text-xl">+</span>
              </div>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="border p-4 rounded-lg text-center hover:shadow-lg transition"
            >
              <div className="relative w-full h-64 mb-4">
                <Image
                  src="/images/section7banner.jpg"
                  alt="product image"
                  className="object-contain"
                  fill
                />
              </div>
              <p className="text-gray-400 text-sm">{product.category}</p>
              <h3 className="text-gray-900 font-medium mb-2">
                {product.title}
              </h3>
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="text-red-500 font-semibold">
                  {product.price}
                </span>
                <span className="text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              </div>
              {/* Color options */}
              <div className="flex justify-center gap-2">
                {product.colors.map((color, i) => (
                  <span
                    key={i}
                    className={`w-4 h-4 rounded-full border cursor-pointer bg-${color}-500`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
