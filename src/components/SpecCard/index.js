"use client";
import Link from "next/link";
import Image from "../Image/image";

export default function SpecCard({ data }) {
  return (
    <Link href={"#"} className="group block w-full relative  px-8 py-8 bg-white">
      <span className="absolute bottom-0 left-0 w-full  bg-blue-600 h-[2px] z-20 scale-x-0 transform transition-transform origin-left duration-700 ease-in-out group-hover:scale-x-100" />
      <div className="w-12 h-12 p-2.5 bg-sky-100 rounded-lg relative mb-7">
        {data?.cover?.url && <Image src={data?.cover?.url} fill className="object-cover" alt={`${data?.title}`} />}
      </div>
      <div className="flex relative z-20 ">
        <div>
          <h4 className=" text-slate-800 text-xl font-semibold  leading-snug mb-3">ഐക്യജനാധിപത്യമുന്നണി കേരള നിയമസഭയിലേക്കുള്ള തിരഞ്ഞെടു...{data?.title}</h4>
          <p className="text-black/60 text-base leading-relaxed">കേരളം അക്ഷരാർഥത്തിൽ ഇന്ത്യ യുടെ രാഷ്ട്രീയ...കേരളം അക്ഷ രാർഥത്തിൽ ഇന്ത്യ..</p>
        </div>
      </div>
    </Link>
  );
}
