import css from './Testimonials.module.css'
// import hero from '../../assets/hero.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TestimonialsData } from '../../data/testimonials.js'
import { Navigation, Pagination } from 'swiper'
const Testimonials = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>From cleansers and moisturizers, to serums and exfoliants, there’s no shortage of skin care products on the market.</span>
                </div>
                <div className={css.heroimg}>
                    {/* <img src={hero} alt="" /> */}
                </div>
                <div className={css.container}>
                    <span>100k </span>
                    <span>Happy customers with us</span>
                </div>
            </div>
            <div className={css.reviews}><span>Reviews</span>
                <div className={css.carousol}>
                    <Swiper
                     modules={[Pagination,Navigation]}
                     pagination
                         spaceBetween={20}
                         slidesPerView={3}
                        slidesPerGroup={1}
                        className={css.tswiper}
                    >
                        {TestimonialsData.map((slide, i) => (
                            <SwiperSlide>
                                <div className={css.testimonial}>
                                <img src={slide.image} alt="" />
                                <span>{slide.comment}</span>
                                <hr/>
                                <span>{slide.name}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </div>
    )
}

export default Testimonials