import React from "react";
import CategoryCard from "../components/CategoryCard";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/api";
import { FadeLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import Image1 from "../assets/images/2023-06-25.jpg";
import Image2 from "../assets/images/image2.jpg";
import Image3 from "../assets/images/p_0009.jpg";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-40 h-40">
          <FadeLoader color="#2291aadb" height={15} width={5} radius={2} />
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* اسلایدر به جای هدر */}
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]} // حذف Navigation
        className="mySwiper"
        autoplay={{ delay: 4000, disableOnInteraction: false }} // اینجا autoplay اضافه شد
      >
        <SwiperSlide>
          <img
            className="w-full h-96 object-cover"
            src={Image1}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96 object-cover"
            src={Image2}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96 object-cover"
            src={Image3}
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center items-center p-10 bg-blue-600 h-16 text-lg">
        <div className="flex p-4 w-fit text-center items-center bg-blue-900 rounded-full">
          <span className="text-white text-xl">حضرت امام خامنه ای (ره): </span>
          <p className="text-white text-sm ml-2">دانشجو و مجموعه‌های دانشجویی به یک تفکر زیربنایی محکم احتیاج دارند. این نیاز قطعی آنهاست.</p>
        </div>
      </div>

      {/* محتوای بعد از اسلایدر */}
      <main className="bg-[url('./assets/images/_MG_8439.JPG')] bg-center bg-cover min-h-screen w-full mx-auto py-6 px-4">
        <h2 className="text-2xl text-center font-semibold text-white mb-6 mt-12">
          دسته‌بندی‌ها
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((category) => (
            <CategoryCard
              key={category._id}
              name={category.name}
              description={category.description}
              id={category._id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
