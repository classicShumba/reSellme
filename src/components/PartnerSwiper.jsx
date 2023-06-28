import {Swiper, SwiperSlide} from "swiper/react"
import SwiperNavButtons from "./SwiperNavButtons"
import { A11y, Navigation, Pagination } from "swiper"

const PartnerSwiper = ({data}) => {
  return (
    <Swiper className="p-swiper"
        modules={[Pagination, A11y, Navigation]}
        slidesPerView='auto'
        spaceBetween={30}
    >
        {
            data.features && data.features.map((item, index) => {
                return <SwiperSlide className="p-swiper-slide" key={index}>
                    <img src={item.partner} alt={item.name} />
                </SwiperSlide>
            })
        }
        <SwiperNavButtons />
    </Swiper>
  )
}

export default PartnerSwiper