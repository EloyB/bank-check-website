import React from "react";
import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/outline";

export default function success() {
  const router = useRouter();
  const query = router.query;
  return (
    <div className="h-screen px-4 flex flex-col items-center justify-center space-y-10">
      <p className="text-5xl sm:text-7xl font-bold text-center">
        <span className="text-secondary">Resultaat</span> van jouw link
      </p>
      <div className="w-full max-w-screen-xl mx-auto ring-2 ring-secondary rounded-md p-10 flex flex-col items-center space-y-5">
        <CheckCircleIcon className="w-24 h-24 sm:w-32 sm:h-32 text-secondary" />
        <div className="flex-col items-start">
          <p className="text-center sm:text-xl md:text-3xl">{query.message}</p>
        </div>
      </div>
    </div>
  );
}
