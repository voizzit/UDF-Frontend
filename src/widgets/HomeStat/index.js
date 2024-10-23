"use client"
import Image from "@/components/Image/image";

export default function HomeStat({data}) {
  return (
    <section className={`overflow-hidden py-11 bg-blue-600`}>
      <div className="container">
        <div className="flex justify-between">
          {data?.items && data.items.map((item)=>(
            <div className="flex-col justify-start items-center inline-flex">
              <div className="bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent text-7xl font-semibold">{item.description}</div>
              <div className=" text-center text-white/90 text-base font-normal  leading-7">{item.title}</div>
            </div>
          ))}
          {/* <div className="flex-col justify-start items-center inline-flex">
            <div className="bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent text-7xl font-semibold">{data?.items[0]?.description}</div>
            <div className=" text-center text-white/90 text-base font-normal  leading-7">{data?.items[0]?.title}</div>
          </div>
          <div className="flex-col justify-start items-center inline-flex">
            <div className="bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent text-7xl font-semibold">{data?.items[1]?.description}</div>
            <div className=" text-center text-white/90 text-base font-normal  leading-7">{data?.items[1]?.title}</div>
          </div>
          <div className="flex-col justify-start items-center inline-flex">
            <div className="bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent text-7xl font-semibold">{data?.items[2]?.description}</div>
            <div className=" text-center text-white/90 text-base font-normal  leading-7">{data?.items[2]?.title}</div>
          </div>
          <div className="flex-col justify-start items-center inline-flex">
            <div className="bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent text-7xl font-semibold">{data?.items[3]?.description}</div>
            <div className=" text-center text-white/90 text-base font-normal  leading-7">{data?.items[3]?.title}</div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
