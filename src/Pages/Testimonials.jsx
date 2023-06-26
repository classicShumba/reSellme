import { A11y, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperNavButtons from '../components/SwiperNavButtons'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/_testimonials.scss'

const Testimonials = ({ data }) => {
  const tst = data
    return (
    <div className='testimonials'>
        <div className="wrapper test-inner">
        <div className="test-head">
            <h2>{tst.title}</h2>
            <p>{tst.text}</p>
        </div>
        <Swiper className="testimonies"
            modules={[Navigation, Pagination, A11y]}
            slidesPerView='auto'
        spaceBetween={30}
        >
            {
                tst.clients && tst.clients.map((testimony, index) => {
                    return <SwiperSlide className="testimony" key={index}>
                    <img src={testimony.img} alt={testimony.name} />
                    <div className="text">
                        <testimony.icon />
                        <h3>{testimony.name}</h3>
                        <h4>{testimony.company}</h4>
                        <p>{testimony.testimony}</p>
                    </div>
                </SwiperSlide>
                })
            }
            <SwiperNavButtons />
        </Swiper>
        </div>
    </div>
  )
}

export default Testimonials