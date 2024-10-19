"use client"
import Image from "@/components/Image/image";
import LeaderCard from "@/components/LeaderCard";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";

export default function HomeLeaders({ data }) {
  const customSettings = {

    slidesPerView: 4,
    pagination: false,
    spaceBetween: 24,
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };

  return (
    <section className={`overflow-hidden py-24 bg-slate-800`}>
      <div className="container">
        <div className="grid grid-cols-12 lg:mb-20 items-end">
          <div className="col-span-5">
            <h2 className="text-sky-500 text-2xl font-semibold  leading-tight ">{data?.title} </h2>
            <h3 className="  text-3xl lg:text-6xl font-semibold  lg:leading-tight  bg-gradient-to-r from-[#fff]  to-[#5B95F9] bg-clip-text text-transparent font-condensed mb-4 lg:mb-0">{data?.titleMain}</h3>

          </div>
          <div className="col-span-7 text-right">
            <button className="btn btn-white ">കൂടുതൽ വായിക്കൂ</button>
          </div>
        </div>

        <Slider className={""} customSettings={customSettings}>
          {data?.leaders?.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <LeaderCard data={item} />
              </SwiperSlide>
            )
          })}

        </Slider>
      </div>
    </section>
  );
}
