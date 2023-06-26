import { useState } from 'react'
import '../styles/_faq.scss'

const Faq = ({data}) => {

    const [queOpen, setQueOpen] = useState(Array(data.ques.length).fill(false));

    const handleOpen = (index) => {
        const newQueOpen = [...queOpen];
        newQueOpen[index] = !newQueOpen[index];
        setQueOpen(newQueOpen);
    }

  return (
    <div className="wrapper faq">
        <div className="faq-head">
            <h2>{data.title}</h2>
            <p>{data.text}</p>
        </div>
        <div className="ques">
            {
                data.ques && data.ques.map((que, index) => {
                    return <div className="que" key={index} >
                      <span className="head" onClick={() => handleOpen(index)}>
                          <h3>{que.que}</h3>
                          {queOpen[index] ? <que.open /> : <que.close />}
                      </span>
                      <p>{queOpen[index] ? que.ans : null}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Faq;