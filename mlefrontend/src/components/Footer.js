import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

return (<>

        <div className="footer-copyright-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-copy-right">
                            <p>Copyright © 2021 <Link to="/">JLE</Link> All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>)
}

export default Footer