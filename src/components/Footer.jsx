import { Link } from "react-router-dom"
import { Data } from "../../data/db"

const Footer = () => {
  return (
    <>
    {
        Data && Data.map((data, index) => {
            return <div className="footer" key={index}>
                {
                    data.footer && data.footer.map((footer, index) => {
                        return <div className="wrapper footer-inner" key={index}>
                            {
                                footer.sitemap && footer.sitemap.map((sitemap, index) => {
                                    return <div className="sitemap" key={index}>
                                        <h3>{sitemap.title}</h3>
                                        <div className="links">
                                            {
                                                sitemap.links && sitemap.links.map((link, index) => {
                                                    return <Link className="link" to={link.url} key={index}>{link.title}{link.icon && <link.icon />}</Link>
                                                })
                                            }
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    })
                }
                <small>Copyright &copy; 2023 | <Link className="tag" to={'https://classicshumba.co.zw'}>classic_shumba</Link></small>
            </div>
        })
    }
    </>
  )
}

export default Footer