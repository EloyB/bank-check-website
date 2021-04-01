import { useEffect, useRef, useState } from "react";
import {
  ArchiveIcon,
  ArrowCircleDownIcon,
  ArrowRightIcon,
  ChatIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
export default function Home() {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const infoRef = useRef();

  const testUrl = async () => {
    const response = await fetch("https://api.bank-check.be/?url=" + url, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  const handleClick = () => {
    testUrl().then((data) => {
      if (data.status === "error") {
        router.push({
          pathname: "/responses/error",
          query: { ...data, testedUrl: url },
        });
      } else if (data.status === "success") {
        router.push({
          pathname: "/responses/success",
          query: data,
        });
      }
    });
  };

  return (
    <div className="relative">
      <div className="h-screen">
        <div className="relative px-4 pt-20 max-w-screen-xl mx-auto h-3/4 flex items-center justify-center">
          <div className="space-y-5 w-full">
            <div className="text-center space-y-3">
              <p className="text-5xl sm:text-7xl font-bold">
                Vul je <span className="text-secondary">link</span> in
              </p>
              <p className="text-lg sm:text-2xl">En laat hem automatisch controleren op phishing</p>
            </div>
            <div className="w-full flex space-x-5">
              <input
                className="p-5 border-none bg-gray-50 w-full rounded-lg focus:outline-none ring-2 ring-gray-200 focus:ring-secondary"
                type="text"
                placeholder="Vul hier je link in..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleClick();
                  }
                }}
              />
              <div className="p-5 bg-secondary cursor-pointer rounded-lg" onClick={handleClick}>
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto h-1/4 flex flex-col items-center justify-center space-y-5">
          <p className="text-xl">Leer meer over phishing</p>
          <ArrowCircleDownIcon
            className="w-8 h-8 text-secondary animate-bounce"
            onClick={() => infoRef.current.scrollIntoView({ behavior: "smooth" })}
          />
        </div>
      </div>
      <div
        ref={infoRef}
        className="pt-72 pb-40 px-4 max-w-screen-xl mx-auto space-y-5 flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/hook.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <p className="text-5xl sm:text-7xl font-bold text-center">
          Laat je niet vangen door <span className="text-secondary">phishing</span>
        </p>
        <p className="text-lg sm:text-2xl text-center">
          [phi·shing] - oplichterij waarbij iemand via email of internet geheime financiële gegevens
          afhandig worden gemaakt
        </p>
      </div>
      <div className="py-10 px-4 max-w-screen-xl mx-auto grid gap-5 content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center space-x-5 lg:justify-start">
          <div className="rounded-full w-20 h-20 bg-secondary flex items-center justify-center">
            <CurrencyDollarIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="font-semibold text-2xl">34 miljoen euro</p>
            <p>gestolen door phishers</p>
          </div>
        </div>
        <div className="flex items-center space-x-5 lg:justify-center">
          <div className="rounded-full w-20 h-20 bg-secondary flex items-center justify-center">
            <ChatIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="font-semibold text-2xl">3.200.000</p>
            <p>verdachte berichten verstuurd</p>
          </div>
        </div>
        <div className="flex items-center space-x-5 lg:justify-end">
          <div className="rounded-full w-20 h-20 bg-secondary flex items-center justify-center">
            <ArchiveIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="font-semibold text-2xl">3438</p>
            <p>cases van phishing</p>
          </div>
        </div>
      </div>
      <div className="py-10 px-4 max-w-screen-xl mx-auto space-y-3">
        <h1 className="text-3xl font-semibold">Een diepere duik in phishing</h1>
        <p className="text-lg max-w-screen-lg">
          Phishing is een vorm van cybercriminaliteit waarbij men aan de hand van een valse email,
          sms of telefoon bankgegevens en andere gevoelige gegevens probeert te achterhalen van een
          persoon. Eens deze gegevens zijn gevonden heeft de phisher vrij spel. Hiermee kan hij/zij
          bijvoorbeeld aan je bankaccounts komen of nog erger, je identiteit stelen.
        </p>
      </div>
      <div className="py-10 px-4 max-w-screen-xl mx-auto space-y-3">
        <h1 className="text-3xl font-semibold">Verschillende vormen en maten</h1>
        <p className="text-lg max-w-screen-lg">
          Phishing komt voor op veel verschillende manieren. Zo kan iemand zich voordoen als jou
          bank en je zo handelingen laten verrichten om uiteindelijk al jouw bankgegevens te stelen.
          Dit kan op veel verschillende manieren gebeuren, je kan gebeld worden, een mail krijgen,
          een sms krijgen of zelf via sociale media benaderd worden. Niet alleen bankgegevens worden
          hiermee gestolen, ook wachtwoorden, identiteiten of eender welke persoonlijke gegevens.
        </p>
      </div>
      <div className="py-10 px-4 max-w-screen-xl mx-auto space-y-3">
        <h1 className="text-3xl font-semibold">
          En toen was er <span className="text-secondary">BankCheck</span>{" "}
        </h1>
        <p className="text-lg max-w-screen-lg">
          Omdat phishing de laatste tijd zo een opmars maakt en zo een schokkende cijfers
          presenteerde voelden wij de nood om hier iets aan te doen. Met de nodige research en
          programmeer vaardigheid hebben we dit systeem op poten kunnen zetten. Op deze manier kan
          je verschillende URL's waarvan je niet zeker bent of deze wel echt van jouw bank komen kan
          laten nakijken en zo zeker geen risico lopen om gephished te worden.
        </p>
      </div>
    </div>
  );
}
