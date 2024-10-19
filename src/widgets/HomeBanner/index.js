"use client"
import Image from "@/components/Image/image";
import Slider from "@/components/Slider";
import { Link } from "@/i18n/routing";
import { SwiperSlide } from "swiper/react";


export default function HomeBanner({ data }) {
  const customSettings = {

    slidesPerView: 1,
    pagination: false,
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };
  return (
    <section className={`overflow-hidden bg-slate-50`}>
      <Slider className={""} customSettings={customSettings}>
        {data?.slides?.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="h-[100vh] w-full relative flex items-end lg:pb-[100px]">
                <span className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-black to-transparent h-[50%] z-10 " />
                <span className="absolute top-0 left-0 w-full  bg-gradient-to-t from-transparent to-black h-[70%] z-10 " />
                <Image
                  src={item?.cover?.url}
                  fill
                  className="object-cover"
                  alt={item?.title}
                />

                <div className="container z-10 relative">
                  <div className="grid grid-cols-12">
                    <div className="col-span-7">
                      <h2 className="text-3xl lg:text-[64px] font-semibold  lg:leading-tight  text-white font-condensed mb-4 lg:mb-5">{item?.title}</h2>
                      <p className="text-white text-xl  leading-9 mb-11">{item?.description}</p>
                      <Link href="/" className="btn btn-white">Watch now</Link>
                    </div>
                  
                  </div>

                </div>
              </div>

            </SwiperSlide>
          )
        })}

      </Slider>
    </section>
  );
}
