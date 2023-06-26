import PartnerSwiper from '../components/PartnerSwiper'
import '../styles/_partners.scss'

const Partners = ({data}) => {
  return (
    <div className='wrapper partners'>
        <h2>{data.title}</h2>
        <PartnerSwiper data={data} />
    </div>
  )
}

export default Partners