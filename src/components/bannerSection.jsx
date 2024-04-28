import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const BannerSection = () => {
    return (
        <div className='mx-auto w-11/12 max-w-[1200px]'>
        <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner1.jpg')] bg-no-repeat bg-cover bg-center h-full">
            <div className='h-[500px] flex justify-start items-center'>
                <h1 className='text-white text-8xl font-bold ms-5'>Discover Natural Elegance</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner2.jpg')] bg-no-repeat bg-cover bg-center h-full">
        <div className='h-[500px]'>
            
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner3.jpg')] bg-no-repeat bg-cover bg-center h-full">
        <div className='h-[500px]'>
            
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default BannerSection;