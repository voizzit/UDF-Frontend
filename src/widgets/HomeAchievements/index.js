"use client"
import IssueCard from "@/components/IssueCard";
import MediaCard from "@/components/MediaCard";
import Slider from "@/components/Slider";
import SpecCard from "@/components/SpecCard";
import { Link } from "@/i18n/routing";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { SwiperSlide } from "swiper/react";

export default function HomeAchievements({ data }) {
  const customSettings = {

    slidesPerView: 4,
    pagination: false,
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };
  return (

    <section className={`overflow-hidden pt-6 lg:py-24   relative bg-neutral-100`}>
      <div className="container relative z-10">
        <div className="grid grid-cols-12 items-end lg:mb-14">
          <div className="col-span-12 lg:col-span-7">
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
        <Slider className={"mb-12"} customSettings={customSettings}>
          <SwiperSlide>
            <SpecCard/>
          </SwiperSlide>
          {data?.items?.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <IssueCard data={item} />
              </SwiperSlide>
            )
          })}
        </Slider>
        <div className="text-center">
          <Link href="/" className="btn btn-primary">Explore more</Link>
        </div>
      </div>

    </section>
  );
}
