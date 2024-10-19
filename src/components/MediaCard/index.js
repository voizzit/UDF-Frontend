"use client";
import Link from "next/link";
import Image from "../Image/image";

export default function MediaCard({ data }) {
  return (
    <Link href={"#"} className="group block w-full relative  ">
      <span className="absolute bottom-0 left-0 w-full  bg-[#dbdbdb] h-[2px] z-10 " />
      <span className="absolute bottom-0 left-0 w-full  bg-blue-600 h-[2px] z-20 scale-x-0 transform transition-transform origin-left duration-700 ease-in-out group-hover:scale-x-100" />
      <div className="aspect-[470/263] relative bg-white w-full">
        {data?.cover?.url && <Image src={data?.cover?.url} fill className="object-cover" alt={`${data?.title}`} />}
      </div>
      <div className="flex relative z-20 pt-4 pb-8">
        <div>
          <p className=" text-black text-base  leading-none mb-3">31 May 2024</p>
          <h4 className=" text-black text-xl font-normal  leading-9 mb-3">ഐക്യജനാധിപത്യമുന്നണി കേരള നിയമസഭയിലേക്കുള്ള തിരഞ്ഞെടു...{data?.title}</h4>
          <p className="text-black text-base font-medium ">കൂടുതൽ വായിക്കൂ</p>
        </div>
      </div>
    </Link>
  );
}
