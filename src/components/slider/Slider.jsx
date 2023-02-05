import React from 'react'
import  './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderProducts } from '../../data/products'
import { Navigation, Pagination } from 'swiper'

const Slider = () => {
    return (
        <div className='s-container'>
            <Swiper
                modules={[Pagination,Navigation]}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                navigation ={true}
                loopFillGroupWithBlank ={true}
                loop={true}
                className='my-swiper'
            >
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide>
                        <div className='s-left'>
                            <div className='name'>
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>
                            <span>{slide.price}$</span>
                            <div>Shop Now</div>
                            <img src={slide.img} alt="" className='img-p' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider