import About from './About'
import Hero from './Hero'
import { Data } from '../../data/db';
import Features from './Features';
import Cases from './Cases';
import Testimonials from './testimonials';
import Faq from './Faq';
import Partners from './Partners';
import SignUp from './SignUp';

const Home = () => {
  
  return (
    <>
      {
        Data && Data.map(( home, index) => {
          return <div className="home" key={index}>
          <Hero />
          {
            home.about && home.about.map((data, index) => {
              return <About data={data}  key={index}/>
            })
          }
          {
            home.features && home.features.map((data, index) => {
              return <Features data={data} key={index}/>
            })
          }
          {
            home.cases && home.cases.map((data, index) => {
              return <Cases data={data} key={index}/>
            })
          }
          {
            home.testimonials && home.testimonials.map((data, index) => {
              return <Testimonials data={data} key={index} />
            })
          }
          {
            home.faq && home.faq.map((data, index) => {
              return <Faq data={data} key={index}/>
            })
          }
          {
            home.featuring && home.featuring.map((data, index) => {
              return <Partners data={data} key={index}/>
            })
          }
          {
            home.signup && home.signup.map((data, index) => {
              return <SignUp data={data} key={index}/>
            })
          }
          {
            home.partners && home.partners.map((data, index) => {
              return <Partners data={data} key={index}/>
            })
          }
        </div>
        })
      }
    </>
  )
}

export default Home