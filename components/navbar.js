import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MailIcon } from "@heroicons/react/outline";
import { toggleLocale } from "../locale/translation";
export default function Navbar() {
  const [hitScrollPoint, setHitScrollPoint] = useState(false);
  const router = useRouter();
  const { locale } = router;
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
          <div className="hidden sm:flex divide-x-2 space-x-2 ">
            <p
              className={`cursor-pointer ${locale === "nl" ? "text-secondary" : "text-black"}`}
              onClick={() => toggleLocale("nl", router)}
            >
              NL
            </p>
            <p
              className={`cursor-pointer pl-2 ${
                locale === "en-US" ? "text-secondary" : "text-black"
              }`}
              onClick={() => toggleLocale("en-US", router)}
            >
              ENG
            </p>
          </div>
          <a
            href="mailto:info@bank-check.be"
            className="cursor-pointer p-4 rounded-full bg-secondary"
          >
            <MailIcon className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
