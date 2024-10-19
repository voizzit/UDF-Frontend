"use client"
import IssueCard from "@/components/IssueCard";
import Slider from "@/components/Slider";
import { Link } from "@/i18n/routing";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { SwiperSlide } from "swiper/react";

export default function HomeIssues({ data }) {
  const customSettings = {

    slidesPerView: 5,
    pagination: false,
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };
  return (

    <section className={`overflow-hidden pt-6 lg:pt-20   relative bg-neutral-100`}>
      <div className="container relative z-10">
        <div className="grid grid-cols-12 items-end lg:mb-14">
          <div className="col-span-12 lg:col-span-6">
            <h2 className=" text-blue-600 text-xl font-semibold mb-3">{data?.title}</h2>
            <h3 className=" text-3xl lg:text-6xl font-semibold  lg:leading-tight  bg-gradient-to-r from-[#242E49]  to-[#5B95F9] bg-clip-text text-transparent font-condensed mb-4 lg:mb-0">
              {data?.titleMain}
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="flex gap-2 lg:justify-end">
              <button className="w-12 h-12 relative bg-white rounded-full border border-white flex items-center justify-center text-blue-600 text-2xl"><IoIosArrowRoundBack /></button>
              <button className="w-12 h-12 relative bg-white rounded-full border border-white flex items-center justify-center text-blue-600 text-2xl"><IoIosArrowRoundForward /></button>
            </div>
          </div>
        </div>
      </div>
      <Slider className={""} customSettings={customSettings}>
        {data?.items?.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <IssueCard data={item} />
            </SwiperSlide>
          )
        })}
      </Slider>
    </section>
  );
}
