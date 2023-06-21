import '../styles/_features.scss'

const Features = ({data}) => {
    const ftr = data
    console.log(ftr)
  return (
    <div className="features">
        <div className="features-head">
            <h2>{ftr.title}</h2>
            <p>{ftr.text}</p>
        </div>
        <div className="feature-items">
            {
                ftr.feature && ftr.feature.map((feature, index) => {
                    return <div className="feature" key={index}>
                        <feature.icon />
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Features