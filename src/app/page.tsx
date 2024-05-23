import Image from "next/image";
import snake1 from "~/assets/snake-1.png";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main className=" bg-slate-50">
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start"></div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
          <Image src={snake1} alt="fang-calse" className="w-full" />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
