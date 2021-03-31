import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-dark py-10">
      <div className="max-w-screen-xl mx-auto px-4 space-y-5 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center justify-center">
          <Image
            className="block cursor-pointer"
            src="/dark-logo.svg"
            layout="intrinsic"
            width="150"
            height="56"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="flex flex-col space-y-5 items-center sm:flex-row sm:space-y-0 sm:space-x-10">
          <a href="#" className="text-secondary uppercase">
            Terms & Conditions
          </a>
          <a href="https://www.qwebdesign.be/" className="text-white uppercase">
            &#169; QWeb Design 2021
          </a>
        </div>
      </div>
    </div>
  );
}
