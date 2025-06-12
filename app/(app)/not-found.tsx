import { buttonVariants } from "@/components/button";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid place-items-center pt-28 pb-28 min-w-full">
      <div className="text-center">
        <p className="text-base font-semibold text-red-600 dark:text-red-500">
          404了哦....
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-50 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          你这什么链接嘛...找不到，回首页罢....🤣
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            <IconArrowLeft className="size-4 mr-2" />
            返回619の工具推荐主页
          </Link>
        </div>
      </div>
    </main>
  );
}
