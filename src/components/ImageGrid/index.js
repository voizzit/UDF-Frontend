"use client";
import Image from "../Image/image";

export default function ImageGrid({ data }) {
  return (
    <div className="grid grid-cols-2 gap-2 items-end max-w-[90%] mx-auto">
      <div>
        <div className="aspect-[1/1] bg-black mb-2 w-[55%] ml-auto relative"><Image src={data[0]?.url} fill className="object-cover" alt=""/></div>
        <div className="aspect-[1/1] bg-black mb-2 w-[75%] ml-auto relative"><Image src={data[1]?.url} fill className="object-cover" alt=""/></div>
        <div className="aspect-[1/1] bg-black mb-2 w-[50%] ml-auto relative"><Image src={data[2]?.url} fill className="object-cover" alt=""/></div>
      </div>
      <div>
        <div className="aspect-[1/1] bg-black mb-2 w-[70%] relative"><Image src={data[3]?.url} fill className="object-cover" alt=""/></div>
        <div className="aspect-[1/1] bg-black mb-2 relative"><Image src={data[4]?.url} fill className="object-cover" alt=""/></div>
      </div>
    </div>
  );
}
