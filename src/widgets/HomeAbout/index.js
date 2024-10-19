"use client"
import Image from "@/components/Image/image";
import ImageGrid from "@/components/ImageGrid";
import { Link } from "@/i18n/routing";

export default function HomeAbout({ data }) {
  { console.log(data, "datadatadatadata"); }
  return (
    <section className={`overflow-hidden bg-slate-200 py-24`}>
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 w-full mx-auto">
            <ImageGrid data={data?.cover} />
          </div>
          <div className="flex-col justify-center items-start gap-16 flex col-span-12 lg:col-span-5 ">
            <div className="self-stretch  flex-col justify-start items-start gap-9 flex">
              <div className="">
                <h2 className="  text-blue-600 text-xl font-condensed font-semibold mb-3">{data?.title}</h2>
                <h3 className="  text-3xl lg:text-5xl xl:text-6xl font-semibold  lg:leading-normal xl:leading-tight bg-gradient-to-r from-[#242E49]  to-[#5B95F9] bg-clip-text text-transparent font-condensed mb-4 lg:mb-4">{data?.titleMain}</h3>
                <p className="text-neutral-700 text-base font-normal  leading-relaxed mb-9 max-w-[650px]">{data?.description}</p>
                {data?.link?.url && <Link href={data?.link?.url} className="btn btn-primary ">{data?.link?.label}</Link>}
              </div>
            </div>
            {data?.items?.length > 0 &&
              <div className="justify-start items-start gap-4 inline-flex">
                {data?.items?.map((item, i) => {
                  return (
                    <div className=" px-4 py-4 border border-zinc-300 min-w-[170px]" key={i}>
                      <div className="relative h-10 w-10 mb-9">
                      </div>
                      <div className="text-black text-lg font-medium ">{item?.title}</div>
                    </div>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
