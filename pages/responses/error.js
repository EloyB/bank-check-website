import React, { useRef } from "react";
import { useRouter } from "next/router";
import { ArrowCircleDownIcon, XCircleIcon } from "@heroicons/react/outline";
import { activeLocale } from "../../locale/translation";

export default function error() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);
  const query = router.query;
  const infoRef = useRef();
  return (
    <div>
      <div className="relative h-screen py-28 px-4 flex flex-col items-center justify-center space-y-10">
        <p className="text-5xl sm:text-7xl font-bold text-center">
          <span className="text-secondary">Resultaat</span> van jouw link
        </p>
        <div className="space-y-5 divide-y-2 sm:divide-y-0">
          <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-5 items-center space-y-3 lg:justify-start">
            <div className="rounded-full w-14 h-14 sm:h-20 sm:w-20 bg-red-500 flex items-center justify-center">
              <XCircleIcon className="w-10 h-10 text-white" />
            </div>
            <div>
              <p className="text-center sm:text-left text-lg">{query.message}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 max-w-screen-xl mx-auto h-1/4 flex flex-col items-center justify-center space-y-5">
          <p className="text-xl">{t.errorPage.description.title}</p>
          <ArrowCircleDownIcon
            className="w-8 h-8 text-secondary animate-bounce"
            onClick={() => infoRef.current.scrollIntoView({ behavior: "smooth" })}
          />
        </div>
      </div>
      <div
        ref={infoRef}
        className="max-w-screen-xl mx-auto px-4 py-20 space-y-16 lg:grid lg:grid-cols-2 lg:gap-10 sm:space-y-0"
      >
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">{t.errorPage.description.title}</h1>
          <p className="text-lg max-w-screen-lg">{t.errorPage.description.paragraph}</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl font-semibold">
            Phishing <span className="text-secondary">rapporteren</span>
          </h1>
          <p className="text-lg">
            <span className="font-bold">URL: </span>
            {query.testedUrl}
          </p>
          <div className="space-y-3">
            <input
              className="p-5 border-none bg-gray-50 w-full rounded-lg focus:outline-none ring-2 ring-gray-200 focus:ring-secondary"
              type="text"
              placeholder="Bank"
            />
            <textarea
              className="p-5 resize-none border-none bg-gray-50 w-full rounded-lg focus:outline-none ring-2 ring-gray-200 focus:ring-secondary"
              cols="30"
              rows="7"
              placeholder="Omschrijving van de phishing"
            ></textarea>
            <button className="w-full bg-secondary py-4 rounded-lg text-white font-semibold">
              Rapporteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
