import React from "react";

export default function Section9() {
  return (
    <div className="bg-black text-white">
      <div className="py-5 flex justify-between mx-20 mr-36  ">
        <div className="space-y-4">
          <p>Subscribe to our emails</p>
          <span>
            Be the first to know about the collection and exculsive offfer
          </span>
          <input
            type="text"
            placeholder="Email"
            className="block bg-white mt-3   h-10 w-80 rounded-full text-black pl-5"
          />
          <p>
            By subscribing you agree to the Terms of Use and Privicay Policiy{" "}
          </p>
        </div>
        <div>
          <p>Quick Links</p>
          <ul className="text-[12px] space-y-1 mt-2">
            <li>About Us</li>
            <li>Why Peel</li>
            <li>Warrently Policy </li>
            <li>Help/FAQ's </li>
            <li>Terms of Service </li>
            <li>Privacy Policy </li>
            <li>DO Not Sell Or</li>
            <li>Share Information</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
