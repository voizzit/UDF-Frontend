"use client"
import Image from "@/components/Image/image";
import { Link } from "@/i18n/routing";

export default function DonateWidget({data }) {

  return (
    <section className={`overflow-hidden py-6 lg:py-20 bg-slate-800  relative `}>
      <div className="absolute aspect-[261/397] -right-[8%] -top-[40%] w-[14%]">
        <Image src={'/images/u.svg'} fill className="object-contain" alt="" />
      </div>
      <div className="absolute aspect-[261/397] -left-[8%] -bottom-[70%] w-[14%] rotate-180">
        <Image src={'/images/u.svg'} fill className="object-contain" alt="" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-7">
            <h2 className=" text-3xl lg:text-6xl font-semibold  lg:leading-tight  bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent font-condensed mb-4 lg:mb-0">
              {data?.title}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="flex gap-2 lg:justify-end">
              <Link href="#" className="btn btn-white">Donate now</Link>
              <Link href="#" className="btn btn-outline-white">Get in touch</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
