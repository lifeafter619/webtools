import { JoinLayout } from "@/components/join/join-layout";
import { ArticleItem } from "@/components/join/mdx";
import { KEYSTATIC } from "@/server/keystatic";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default async function Join() {
  const items = await KEYSTATIC.tools();

  return (
    <div className="flex min-h-full flex-col bg-zinc-950">
      <JoinLayout>
        {items.map((item) => {
          return (
            <ArticleItem
              key={item!.slug}
              slug={item!.slug}
              collection={item?.collectionSlug!}
              date={new Date(item!.entry.createdAt)}
            >
              <Link
                href={`/${item!.collectionSlug}/${item!.slug}`}
                className="relative flex flex-col pl-18 transition-transform hover:translate-x-2"
              >
                <div className="flex text-lg font-semibold text-zinc-50">
                  <div className="absolute left-0 top-0 inline-block size-12">
                    <Image
                      className={twMerge("h-12 w-12 shrink-0", "")}
                      src={item!.entry.logo}
                      alt={item!.entry.name}
                      width={48}
                      height={48}
                    />
                  </div>
                  {item!.entry.name}
                </div>
                <div className="flex text-zinc-400">{item!.entry.headline}</div>
              </Link>
            </ArticleItem>
          );
        })}
      </JoinLayout>
    </div>
  );
}
