"use client";

import Image from "next/image";
import Link from "next/link";

const History = () => {
  const history = JSON.parse(localStorage.getItem("history") || "[]");
  console.log(history);
  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-5 mb-7">
        <Link href="/" className="text-lg me-5 font-normal">
          Back
        </Link>
        History Reading
      </h1>
      <div className="flex flex-col w-full  items-center  p-5">
        <div className="md:w-1/2 w-fullrounded-lg shadow-lg p-5  ">
          {history.length > 0 &&
            history.map((item: any) => (
              <div
                key={item?.urlToImage}
                className="w-full border border-slate-200 rounded-lg shadow-lg p-5 mb-3 flex flex-row"
              >
                <Image
                  src={item?.urlToImage}
                  alt={item?.title}
                  width={600}
                  height={400}
                  className="w-1/3 "
                />
                <div className="ms-5 flex flex-col">
                  <h1 className="mt-5 font-bold text-lg">{item?.title}</h1>
                  <a
                    href={item?.url}
                    className="flex justify-end underline underline-offset-1 "
                  >
                    Continue Reading...
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default History;
