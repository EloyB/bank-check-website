import React from "react";
import { useRouter } from "next/router";
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  LibraryIcon,
  LinkIcon,
} from "@heroicons/react/outline";

export default function success() {
  const router = useRouter();
  const query = router.query;
  return (
    <div className="sm:h-screen py-28 px-4 flex flex-col items-center justify-center space-y-10">
      <p className="text-5xl sm:text-7xl font-bold text-center">
        <span className="text-secondary">Resultaat</span> van jouw link
      </p>
      <div className="space-y-5 divide-y-2 sm:divide-y-0">
        <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-5 items-center space-y-3 lg:justify-start">
          <div className="rounded-full w-14 h-14 sm:h-20 sm:w-20 bg-secondary flex items-center justify-center">
            <CheckCircleIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-center sm:text-left text-lg">{query.message}</p>
          </div>
        </div>
        <div className="pt-5 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-5 items-center space-y-3 lg:justify-start">
          <div className="rounded-full w-14 h-14 sm:h-20 sm:w-20 bg-secondary flex items-center justify-center">
            <LinkIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-center sm:text-left text-lg">{query.officialSite}</p>
          </div>
        </div>
        <div className="pt-5 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-5 items-center space-y-3 lg:justify-start">
          <div className="rounded-full w-14 h-14 sm:h-20 sm:w-20 bg-secondary flex items-center justify-center">
            <LibraryIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-center sm:text-left text-lg">{query.organisation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
