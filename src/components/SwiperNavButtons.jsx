import { useSwiper } from "swiper/react"
import { ReactComponent as LeftArrow } from "../assets/images/left-arrow-fill.svg"
import { ReactComponent as RightArrow } from "../assets/images/right-arrow-fill.svg"

function SwiperNavButtons() {

    const swiper = useSwiper()

  return (
    <div className="swiper-nav-btns">
        <span onClick={() => swiper.slidePrev()}><LeftArrow/></span>
        <span onClick={() => swiper.slideNext()}><RightArrow/></span>
    </div>
  )
}

export default SwiperNavButtons