import React from "react";
import { useRouter } from "next/router";
import { ArrowCircleDownIcon, XCircleIcon } from "@heroicons/react/outline";

export default function error() {
  const router = useRouter();
  const query = router.query;
  return (
    <>
      <div className="relative h-screen px-4 flex flex-col items-center justify-center space-y-10">
        <p className="text-5xl sm:text-7xl font-bold text-center">
          <span className="text-secondary">Resultaat</span> van jouw link
        </p>
        <div className="w-full max-w-screen-xl mx-auto ring-2 ring-red-500 rounded-md p-10 flex flex-col items-center space-y-5">
          <XCircleIcon className="w-24 h-24 sm:w-32 sm:h-32 text-red-500" />
          <div className="flex-col items-start">
            <p className="text-center sm:text-xl md:text-3xl">{query.message}</p>
          </div>
        </div>
        <div className="absolute bottom-0 max-w-screen-xl h-1/4 mx-auto flex flex-col items-center justify-center space-y-5">
          <p className="text-xl font-semibold">Wat nu?</p>
          <ArrowCircleDownIcon className="w-8 h-8 text-secondary animate-bounce" />
        </div>
      </div>
      <div className="px-4 py-20 max-w-screen-xl mx-auto">
        <h1 className="text-5xl font-semibold">Wat nu?</h1>
        <p className="text-lg max-w-screen-lg">
          Bezoek de website <span className="text-secondary">NIET</span>. Eens je de website betreed
          is de kans groot dat het al te laat is. Neem indien je nog steeds niet zeker bent contact
          op met het hoofdkantoor van jouw bank om na te vragen of de acties die ze jouw proberen te
          laten ondernemen wel degelijk nodig zijn en of zij daar van op de hoogte zijn. De
          contactgegevens van jouw bank vind je meestal in je banking app op je smartphone of via de
          officiele website van de desbetreffende bank.
        </p>
      </div>
    </>
  );
}
