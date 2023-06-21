import About from './About'
import Hero from './hero'
import { Data } from '../../data/db';
import Features from './Features';
import Cases from './Cases';

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
        </div>
        })
      }
    </>
  )
}

export default Home