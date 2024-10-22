"use client"
import Image from "@/components/Image/image";

export default function HomeStat({data}) {

  return (
    <section className={`overflow-hidden py-11 bg-blue-600`}>
      <div className="container">
        <div className="flex justify-between">
          <div className="flex-col justify-start items-center inline-flex">
            <div className="bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent text-7xl font-semibold">92%</div>
            <div className=" text-center text-white/90 text-base font-normal  leading-7">{data?.title}</div>
          </div>
          <div className="flex-col justify-start items-center inline-flex">
            <div className="bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent text-7xl font-semibold">32k</div>
            <div className=" text-center text-white/90 text-base font-normal  leading-7">{data?.title}</div>
          </div>
          <div className="flex-col justify-start items-center inline-flex">
            <div className="bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent text-7xl font-semibold">100+</div>
            <div className=" text-center text-white/90 text-base font-normal  leading-7">{data?.title}</div>
          </div>
          <div className="flex-col justify-start items-center inline-flex">
            <div className="bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent text-7xl font-semibold">120k+</div>
            <div className=" text-center text-white/90 text-base font-normal  leading-7">{data?.title}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
