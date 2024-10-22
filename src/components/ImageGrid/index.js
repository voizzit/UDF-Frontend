"use client";
import Image from "../Image/image";
export default function ImageGrid({ data }) {
  
  return (
    <div className="grid grid-cols-2 gap-2 items-end max-w-[90%] mx-auto">
      <div>
        <div className="aspect-[1/1] bg-black mb-2 w-[55%] ml-auto relative"><Image src={data && data[0]? data[0]?.url : '/images/no-image.jpg' } fill className="object-cover" alt=""/></div>
        <div className="aspect-[1/1] bg-black mb-2 w-[75%] ml-auto relative"><Image src={data && data[1]? data[1]?.url : '/images/no-image.jpg'} fill className="object-cover" alt=""/></div>
        <div className="aspect-[1/1] bg-black mb-2 w-[50%] ml-auto relative"><Image src={data && data[2]? data[2]?.url : '/images/no-image.jpg'} fill className="object-cover" alt=""/></div>
      </div>
      <div>
        <div className="aspect-[1/1] bg-black mb-2 w-[70%] relative"><Image src={data && data[3]? data[3]?.url : '/images/no-image.jpg'} fill className="object-cover" alt=""/></div>
        <div className="aspect-[1/1] bg-black mb-2 relative"><Image src={data && data[4]? data[4]?.url : '/images/no-image.jpg'} fill className="object-cover" alt=""/></div>
      </div>
    </div>
  );
}
