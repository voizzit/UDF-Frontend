"use client";
import Link from "next/link";
import Image from "../Image/image";

export default function LeaderCard({ data }) {
  return (
    <Link href={"#"} className="group flex items-end aspect-[350/528] w-full relative px-10 py-10 ">
      <span className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-[#063C98] to-transparent h-[50%] z-10 " />
      <Image src={data?.cover?.url} fill className="object-cover" alt="logo" />
      <div className="flex relative z-20">
        <div>
          <h4 className="text-white text-3xl font-semibold   leading-normal">{data?.name}</h4>
          <p className="text-white/90 text-sm  leading-snug  duration-700 ease-in-out overflow-hidden group-hover:text-white font-condensed">{data?.designation}</p>
        </div>
      </div>
    </Link>
  );
}
