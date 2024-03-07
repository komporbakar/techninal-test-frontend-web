"use client";
import moment from "moment";
import Image from "next/image";

interface CardNews {
  urlToImage: string;
  title: string;
  publishedAt: Date;
  author: string;
  description: string;
  url: string;
  saveHistory: (data: any) => void;
}

const CardNews = ({
  urlToImage,
  title,
  publishedAt,
  author,
  description,
  url,
  saveHistory,
}: CardNews) => {
  const formattedDate = moment(publishedAt)
    .add(1, "day")
    .format("dddd, DD-MM-yyyy HH:mm:ss");
  return (
    <div>
      <Image
        src={urlToImage ?? "https://picsum.photos/600/300?random=1"}
        alt={title}
        width={600}
        height={400}
        className="max-h-[200px]"
      />
      <h1 className="mt-5 font-bold text-lg line-clamp-2">{title}</h1>
      <p className="text-sm font-semibold ">{formattedDate}</p>
      <p className="mb-3">{author}</p>
      <p className="text-sm">{description}</p>
      <div className="flex flex-nowrap mt-2 justify-between">
        <a
          href={urlToImage ?? "https://picsum.photos/600/300?random=1"}
          className="underline underline-offset-2 rounded-lg text-sm"
        >
          Show Image
        </a>
        <a
          href={url}
          className="underline underline-offset-2 rounded-lg text-sm"
          onClick={() => saveHistory({ urlToImage, url, title })}
        >
          Show More
        </a>
      </div>
    </div>
  );
};

export default CardNews;
