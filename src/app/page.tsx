"use client";
import CardNews from "@/components/layouts/CardNews";
import SkeletonCard from "@/components/layouts/SkeletonCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import fetchData from "@/utils/fetchData";
import { addDays, format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState<string>("");
  const [news, setNews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchDataBbc = async () => {
    setIsLoading(true);
    const result = await fetchData("bbc");
    setNews(result.articles);
    setIsLoading(false);
  };

  const contentFirst = news?.slice(2, 6);
  const contentSecond = news?.slice(7, 11);

  const saveHistory = async (data: any) => {
    try {
      if (!data.url) {
        return;
      }

      const history = JSON.parse(localStorage.getItem("history") || "[]");

      const isDuplicate = history.some((item: any) => item.url === data.url);
      if (isDuplicate) {
        return;
      }
      const articles = {
        urlToImage: data.urlToImage,
        title: data.title,
        url: data.url,
      };
      history.push(articles);
      localStorage.setItem("history", JSON.stringify(history));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    setIsLoading(true);
    const result = await fetchData(keyword);
    setNews(result.articles);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDataBbc();
  }, []);
  return (
    <>
      <section className="w-full flex content-center justify-center mt-5">
        <Input
          type="text"
          placeholder="Search"
          className="w-1/3"
          // value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </section>
      <main className="flex flex-wrap justify-between gap-5 px-10 mt-10 mb-10">
        <Link href="/history" className=" bottom-10 right-10 fixed ">
          <button className="bg-teal-200 opacity-75 p-2 w-20 h-20 rounded-full">
            <h2 className="text-center text-base font-bold shadow-2xl">
              History
            </h2>
          </button>
        </Link>

        {!isLoading && news.length > 0 ? (
          <div className="lg:w-[43%] md:w-full w-full border border-slate-200 rounded-md shadow-xl  p-5">
            <Image
              src={
                news[0]?.urlToImage ?? "https://picsum.photos/600/300?random=1"
              }
              alt={news[0]?.title}
              width={600}
              height={500}
              className="w-full"
            />
            <h1 className="mt-5 font-bold text-3xl">{news[0]?.title}</h1>
            <p className="text-sm font-semibold  mt-3">
              {format(
                addDays(new Date(news[0]?.publishedAt), 1),
                "EEEE, dd-MM-yyyy HH:mm:ss"
              )}
            </p>
            <p className="mb-3">{news[0]?.author}</p>
            <p>{news[0]?.description}</p>
            <div className="flex flex-nowrap mt-5 justify-between">
              <a
                href={
                  news[0]?.urlToImage ??
                  "https://picsum.photos/600/300?random=1"
                }
                className="bg-teal-200 p-2 rounded-lg"
              >
                Show Image
              </a>
              <a
                href={news[0]?.url}
                className="bg-teal-200 p-2 rounded-lg "
                onClick={() => saveHistory(news[0])}
              >
                Show More
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-[600px] space-y-3">
            <Skeleton className="h-[300px] w-full rounded-xl bg-slate-200" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full bg-slate-200" />
              <Skeleton className="h-4 w-[250px] bg-slate-200" />
              <Skeleton className="h-4 w-[250px] bg-slate-200" />
              <Skeleton className="h-10  bg-slate-200" />
              <div className="flex flex-nowrap justify-between">
                <Skeleton className="h-10 w-[100px] bg-slate-200" />
                <Skeleton className="h-10 w-[100px] bg-slate-200" />
              </div>
            </div>
          </div>
        )}
        <div className="lg:w-[53%] md:w-full  ">
          {!isLoading && news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-md shadow-xl p-5 gap-4">
              {contentFirst?.map((item, i) => (
                <CardNews
                  key={i}
                  title={item?.title}
                  url={item?.url}
                  urlToImage={item?.urlToImage}
                  author={item?.author}
                  description={item?.description}
                  publishedAt={item?.publishedAt}
                  saveHistory={saveHistory}
                />
              ))}
            </div>
          ) : (
            <SkeletonCard />
          )}
        </div>
        {/* //line 2 */}
        <div className="lg:w-[53%] md:w-full  ">
          {!isLoading && contentSecond.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-md shadow-xl p-5 gap-4">
              {contentSecond?.map((item, i) => (
                <CardNews
                  key={i}
                  title={item?.title}
                  url={item?.url}
                  urlToImage={item?.urlToImage}
                  author={item?.author}
                  description={item?.description}
                  publishedAt={item?.publishedAt}
                  saveHistory={saveHistory}
                />
              ))}
            </div>
          ) : (
            <SkeletonCard />
          )}
        </div>
        {!isLoading && news.length > 0 ? (
          <div className="lg:w-[43%] md:w-full w-full border border-slate-200 rounded-md shadow-xl  p-5">
            <Image
              src={
                news[7]?.urlToImage ?? "https://picsum.photos/600/300?random=1"
              }
              alt={news[7]?.title}
              width={600}
              height={500}
              className="w-full"
            />
            <h1 className="mt-5 font-bold text-3xl">{news[7]?.title}</h1>
            <p className="text-sm font-semibold  mt-3">
              {format(
                addDays(new Date(news[7]?.publishedAt), 1),
                "EEEE, dd-MM-yyyy HH:mm:ss"
              )}
            </p>
            <p className="mb-3">{news[7]?.author}</p>
            <p>{news[7]?.description}</p>
            <div className="flex flex-nowrap mt-5 justify-between">
              <a
                href={
                  news[7]?.urlToImage ??
                  "https://picsum.photos/600/300?random=1"
                }
                className="bg-teal-200 p-2 rounded-lg"
              >
                Show Image
              </a>
              <a
                // href={bitcoinNews[0]?.url}
                className="bg-teal-200 p-2 rounded-lg "
                onClick={() => saveHistory(news[0])}
              >
                Show More
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-[600px] space-y-3">
            <Skeleton className="h-[300px] w-full rounded-xl bg-slate-200" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full bg-slate-200" />
              <Skeleton className="h-4 w-[250px] bg-slate-200" />
              <Skeleton className="h-4 w-[250px] bg-slate-200" />
              <Skeleton className="h-10  bg-slate-200" />
              <div className="flex flex-nowrap justify-between">
                <Skeleton className="h-10 w-[100px] bg-slate-200" />
                <Skeleton className="h-10 w-[100px] bg-slate-200" />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
