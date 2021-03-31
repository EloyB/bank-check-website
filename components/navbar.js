import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Navbar() {
  const [hitScrollPoint, setHitScrollPoint] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHitScrollPoint(true);
      } else {
        setHitScrollPoint(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full py-4 px-4 fixed z-50 bg-white ${
        hitScrollPoint ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Image
          className="cursor-pointer"
          src="/logo.svg"
          layout="intrinsic"
          width="150"
          height="56"
          onClick={() => router.push("/")}
        />
        <div className="flex items-center space-x-5">
          <a
            href="mailto:info@bank-check.be"
            className="uppercase font-bold text-lg cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
