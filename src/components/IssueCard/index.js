"use client";
import Link from "next/link";
import Image from "../Image/image";

export default function IssueCard({ data }) {
  return (
    <Link href={"#"} className="group flex items-end aspect-[432/458] w-full relative px-10 py-10 ">
      <span className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-black to-transparent h-[50%] z-10 " />
      <span className="absolute bottom-0 left-0 w-full  bg-blue-600 h-[100%] z-10 scale-x-0 transform transition-transform origin-left duration-700 ease-in-out group-hover:scale-x-100" />
      <Image src={data?.cover?.url} fill className="object-cover" alt="logo" />
      <div className="flex relative z-20">
        <div>
          <h4 className="text-white text-3xl font-semibold   leading-normal">{data?.title}</h4>
          <p className="text-white/90 text-sm  leading-snug h-0  duration-700 ease-in-out overflow-hidden group-hover:h-10">{data?.description}</p>
        </div>
      </div>
    </Link>
  );
}
