"use client"
import Image from "@/components/Image/image";
import { Link } from "@/i18n/routing";

export default function HomeChoose({ data }) {
  console.log(data, "datadatadatadata");

  return (
    <section className={`overflow-hidden  relative `}>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 relative min-h-[400px]">
          <Image src={data?.cover?.url} fill className="object-cover" alt={data?.title} />
          {/* <Image src={'/images/u.svg'} fill className="object-contain" alt="" /> */}
        </div>
        <div className="col-span-12 lg:col-span-6 relative ">
          <div className="py-10 md:py-[60px] xl:py-[100px] px-5 lg:px-[50px] xl:px-[92px] bg-[#1164F2]">
            <h2 className=" text-white text-xl font-condensed font-semibold mb-3">{data?.title}</h2>
            <h3 className=" text-3xl lg:text-5xl xl:text-6xl font-semibold  lg:leading-normal xl:leading-snug bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent font-condensed mb-4 lg:mb-4">
              {data?.titleMain}
            </h3>
            <p className=" text-white/70 text-lg font-normal leading-loose mb-6">{data?.description}</p>
           <Link href={`${data?.link?.url}`} className="w-20 h-20 bg-white rounded-full  justify-center items-center gap-2.5 inline-flex mb-20 xl:mb-24">{data?.link?.label}</Link>
            <div className="items-center gap-11 flex">
              {data?.items?.map((item, i) => {
                return (
                  <div key={i} className="flex-col justify-start items-start gap-1 inline-flex max-w-[228px]">
                    <h4 className="text-white text-5xl lg:text-7xl font-semibold font-condensed leading-tight">{item?.title}</h4>
                    <p className=" text-white/90 text-sm lg:text-base font-normal leading-normal">{item?.description}</p>
                  </div>
                )
              })}
           
            </div>



          </div>
        </div>
      </div>

      {/* <div className="absolute aspect-[261/397] -left-[8%] -bottom-[70%] w-[14%] rotate-180">
        <Image src={'/images/u.svg'} fill className="object-contain" alt="" />
      </div> */}
    </section>
  );
}
