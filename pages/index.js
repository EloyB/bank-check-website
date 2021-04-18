import { useRef, useState } from "react";
import {
  ArchiveIcon,
  ArrowCircleDownIcon,
  ArrowRightIcon,
  ChatIcon,
  CurrencyDollarIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { activeLocale } from "../locale/translation";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const infoRef = useRef();

  const { locale } = router;
  const t = activeLocale(locale);

  const testUrl = async () => {
    const response = await fetch("https://bank-check.my-api.be/?url=" + url, {
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
    if (loading) {
      return;
    } else {
      setLoading(true);
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
        setLoading(false);
      });
    }
  };

  return (
    <div className="relative">
      <div className="h-screen">
        <div className="relative px-4 pt-20 max-w-screen-xl mx-auto h-3/4 flex items-center justify-center">
          <div className="space-y-5 w-full">
            <div className="text-center space-y-3">
              <p className="text-5xl sm:text-7xl font-bold">{parse(t.heroSection.title)}</p>
              <p className="text-lg sm:text-2xl">{t.heroSection.subtitle}</p>
            </div>
            <div className="w-full flex space-x-5">
              <input
                className="p-5 border-none bg-gray-50 w-full rounded-lg focus:outline-none ring-2 ring-gray-200 focus:ring-secondary"
                type="text"
                placeholder={t.heroSection.inputPlaceholder}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleClick();
                  }
                }}
              />
              <div className="p-5 bg-secondary cursor-pointer rounded-lg" onClick={handleClick}>
                {loading ? (
                  <RefreshIcon className="w-6 h-6 text-white animate animate-spin" />
                ) : (
                  <ArrowRightIcon className="w-6 h-6 text-white" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto h-1/4 flex flex-col items-center justify-center space-y-5">
          <p className="text-xl">{t.heroSection.learnMore}</p>
          <ArrowCircleDownIcon
            className="w-8 h-8 text-secondary animate-bounce cursor-pointer"
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
        <p className="text-5xl sm:text-7xl font-bold text-center">{parse(t.learnSection.title)}</p>
        <p className="text-lg sm:text-2xl text-center">[phi·shing] - {t.learnSection.subtitle}</p>
      </div>
      <div className="py-10 px-4 max-w-screen-xl mx-auto grid gap-5 content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center space-x-5 lg:justify-start">
          <div className="rounded-full w-20 h-20 bg-secondary flex items-center justify-center">
            <CurrencyDollarIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="font-semibold text-2xl">{t.numberSection.first.title}</p>
            <p>{t.numberSection.first.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center space-x-5 lg:justify-center">
          <div className="rounded-full w-20 h-20 bg-secondary flex items-center justify-center">
            <ChatIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="font-semibold text-2xl">{t.numberSection.second.title}</p>
            <p>{t.numberSection.second.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center space-x-5 lg:justify-end">
          <div className="rounded-full w-20 h-20 bg-secondary flex items-center justify-center">
            <ArchiveIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="font-semibold text-2xl">{t.numberSection.third.title}</p>
            <p>{t.numberSection.third.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="py-10 px-4 max-w-screen-xl mx-auto space-y-3">
        <h1 className="text-3xl font-semibold">{t.infoSection.first.title}</h1>
        <p className="text-lg max-w-screen-lg">{t.infoSection.first.description}</p>
      </div>
      <div className="py-10 px-4 max-w-screen-xl mx-auto space-y-3">
        <h1 className="text-3xl font-semibold">{t.infoSection.second.title}</h1>
        <p className="text-lg max-w-screen-lg">{t.infoSection.second.description}</p>
      </div>
      <div className="py-10 px-4 max-w-screen-xl mx-auto space-y-3">
        <h1 className="text-3xl font-semibold">{parse(t.infoSection.third.title)}</h1>
        <p className="text-lg max-w-screen-lg">{t.infoSection.third.description}</p>
      </div>
    </div>
  );
}
