import React, { useEffect } from 'react'
import Sider from './Sider'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const DummyData = () => {
    
    let navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('userInfo')){
            navigate('login')
        }
    }, [])

          return (<>

                <Sider/>
                <div className="all-content-wrapper">
                    <Header />
                   <div className="section-admin container-fluid">
            <div className="row admin text-center">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="admin-content analysis-progrebar-ctn res-mg-t-15">
                                <h4 className="text-left text-uppercase"><b>Orders</b></h4>
                                <div className="row vertical-center-box vertical-center-box-tablet">
                                    <div className="col-xs-3 mar-bot-15 text-left">
                                        <label className="label bg-green">30% <i className="fa fa-level-up" aria-hidden="true"></i></label>
                                    </div>
                                    <div className="col-xs-9 cus-gh-hd-pro">
                                        <h2 className="text-right no-margin">10,000</h2>
                                    </div>
                                </div>
                                <div className="progress progress-mini">
                                    <div style={{width : '78%'}} className="progress-bar bg-green"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" style={{marginTop : '1px'}}>
                            <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                                <h4 className="text-left text-uppercase"><b>Tax Deduction</b></h4>
                                <div className="row vertical-center-box vertical-center-box-tablet">
                                    <div className="text-left col-xs-3 mar-bot-15">
                                        <label className="label bg-red">15% <i className="fa fa-level-down" aria-hidden="true"></i></label>
                                    </div>
                                    <div className="col-xs-9 cus-gh-hd-pro">
                                        <h2 className="text-right no-margin">5,000</h2>
                                    </div>
                                </div>
                                <div className="progress progress-mini">
                                    <div style={{width : '38%'}} className="progress-bar progress-bar-danger bg-red"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                                <h4 className="text-left text-uppercase"><b>Revenue</b></h4>
                                <div className="row vertical-center-box vertical-center-box-tablet">
                                    <div className="text-left col-xs-3 mar-bot-15">
                                        <label className="label bg-blue">50% <i className="fa fa-level-up" aria-hidden="true"></i></label>
                                    </div>
                                    <div className="col-xs-9 cus-gh-hd-pro">
                                        <h2 className="text-right no-margin">$70,000</h2>
                                    </div>
                                </div>
                                <div className="progress progress-mini">
                                    <div style={{width : '60%'}} className="progress-bar bg-blue"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                                <h4 className="text-left text-uppercase"><b>Yearly Sales</b></h4>
                                <div className="row vertical-center-box vertical-center-box-tablet">
                                    <div className="text-left col-xs-3 mar-bot-15">
                                        <label className="label bg-purple">80% <i className="fa fa-level-up" aria-hidden="true"></i></label>
                                    </div>
                                    <div className="col-xs-9 cus-gh-hd-pro">
                                        <h2 className="text-right no-margin">$100,000</h2>
                                    </div>
                                </div>
                                <div className="progress progress-mini">
                                    <div style={{width : '60%'}} className="progress-bar bg-purple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="product-sales-area mg-tb-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                        <div className="product-sales-chart">
                            <div className="portlet-title">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="caption pro-sl-hd">
                                            <span className="caption-subject text-uppercase"><b>Product Sales</b></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="actions graph-rp">
                                            <div className="btn-group" data-toggle="buttons">
                                                <label className="btn btn-grey active">
													<input type="radio" name="options" className="toggle" id="option1" checked="" />Today</label>
                                                <label className="btn btn-grey">
													<input type="radio" name="options" className="toggle" id="option2" />Week</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="curved-line-chart" className="flot-chart-sts flot-chart curved-chart-statistic"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="white-box analytics-info-cs mg-b-30 res-mg-t-30">
                            <h3 className="box-title">Total Visit</h3>
                            <ul className="list-inline two-part-sp">
                                <li>
                                    <div id="sparklinedash"></div>
                                </li>
                                <li className="text-right sp-cn-r"><i className="fa fa-level-up" aria-hidden="true"></i> <span className="counter sales-sts-ctn">8659</span></li>
                            </ul>
                        </div>
                        <div className="white-box analytics-info-cs mg-b-30">
                            <h3 className="box-title">Total Page Views</h3>
                            <ul className="list-inline two-part-sp">
                                <li>
                                    <div id="sparklinedash2"></div>
                                </li>
                                <li className="text-right"><i className="fa fa-level-up" aria-hidden="true"></i> <span className="counter sales-sts-ctn">7469</span></li>
                            </ul>
                        </div>
                        <div className="white-box analytics-info-cs mg-b-30">
                            <h3 className="box-title">Unique Visitor</h3>
                            <ul className="list-inline two-part-sp">
                                <li>
                                    <div id="sparklinedash3"></div>
                                </li>
                                <li className="text-right"><i className="fa fa-level-up" aria-hidden="true"></i> <span className="counter sales-sts-ctn">6011</span></li>
                            </ul>
                        </div>
                        <div className="white-box analytics-info-cs">
                            <h3 className="box-title">Bounce Rate</h3>
                            <ul className="list-inline two-part-sp">
                                <li>
                                    <div id="sparklinedash4"></div>
                                </li>
                                <li className="text-right"><i className="fa fa-level-down" aria-hidden="true"></i> <span className="sales-sts-ctn">18%</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="traffic-analysis-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="white-box tranffic-als-inner">
                            <h3 className="box-title"><small className="pull-right m-t-10 text-success last-month-sc cl-one"><i className="fa fa-sort-asc"></i> 18% last month</small> Site Traffic</h3>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <h6>Overall Growth</h6>
                                    <b>80.40%</b></div>
                                <div className="stat-item">
                                    <h6>Montly</h6>
                                    <b>15.40%</b></div>
                                <div className="stat-item">
                                    <h6>Day</h6>
                                    <b>5.50%</b></div>
                            </div>
                            <div id="sparkline8"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="white-box tranffic-als-inner res-mg-t-30">
                            <h3 className="box-title"><small className="pull-right m-t-10 text-danger last-month-sc cl-two"><i className="fa fa-sort-desc"></i> 18% last month</small>Site Traffic</h3>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <h6>Overall Growth</h6>
                                    <b>80.40%</b></div>
                                <div className="stat-item">
                                    <h6>Montly</h6>
                                    <b>15.40%</b></div>
                                <div className="stat-item">
                                    <h6>Day</h6>
                                    <b>5.50%</b></div>
                            </div>
                            <div id="sparkline9"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="white-box tranffic-als-inner res-mg-t-30">
                            <h3 className="box-title"><small className="pull-right m-t-10 text-success last-month-sc cl-three"><i className="fa fa-sort-asc"></i> 18% last month</small>Site Traffic</h3>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <h6>Overall Growth</h6>
                                    <b>80.40%</b></div>
                                <div className="stat-item">
                                    <h6>Montly</h6>
                                    <b>15.40%</b></div>
                                <div className="stat-item">
                                    <h6>Day</h6>
                                    <b>5.50%</b></div>
                            </div>
                            <div id="sparkline10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         
        <div className="product-new-list-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="single-new-trend mg-t-30">
                            <a href="#"><img src="img/new-product/5.png" alt="" /></a>
                            <div className="overlay-content">
                                <a href="#">
                                    <h2>$280</h2>
                                </a>
                                <a href="#" className="btn-small">Now</a>
                                <div className="product-action">
                                    <ul>
                                        <li>
                                            <a data-toggle="tooltip" title="Shopping" href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a data-toggle="tooltip" title="Quick view" href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <a className="pro-tlt" href="#">
                                    <h4>Princes Diamond</h4>
                                </a>
                                <div className="pro-rating">
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="single-new-trend mg-t-30">
                            <a href="#"><img src="img/new-product/5.png" alt="" /></a>
                            <div className="overlay-content">
                                <a href="#">
                                    <h2>$280</h2>
                                </a>
                                <a href="#" className="btn-small">Now</a>
                                <div className="product-action">
                                    <ul>
                                        <li>
                                            <a data-toggle="tooltip" title="Shopping" href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a data-toggle="tooltip" title="Quick view" href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#">
                                    <h4>Princes Diamond</h4>
                                </a>
                                <div className="pro-rating">
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="single-new-trend mg-t-30">
                            <a href="#"><img src="img/new-product/5.png" alt="" /></a>
                            <div className="overlay-content">
                                <a href="#">
                                    <h2>$280</h2>
                                </a>
                                <a href="#" className="btn-small">Now</a>
                                <div className="product-action">
                                    <ul>
                                        <li>
                                            <a data-toggle="tooltip" title="Shopping" href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a data-toggle="tooltip" title="Quick view" href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#">
                                    <h4>Princes Diamond</h4>
                                </a>
                                <div className="pro-rating">
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="single-new-trend mg-t-30">
                            <a href="#"><img src="img/new-product/5.png" alt="" /></a>
                            <div className="overlay-content">
                                <a href="#">
                                    <h2>$280</h2>
                                </a>
                                <a href="#" className="btn-small">Now</a>
                                <div className="product-action">
                                    <ul>
                                        <li>
                                            <a data-toggle="tooltip" title="Shopping" href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a data-toggle="tooltip" title="Quick view" href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#">
                                    <h4>Princes Diamond</h4>
                                </a>
                                <div className="pro-rating">
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star color"></i>
                                    <i className="icon nalika-half-filled-rating-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="product-sales-area mg-tb-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                        <div className="product-sales-chart">
                            <div className="portlet-title">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="caption pro-sl-hd">
                                            <span className="caption-subject text-uppercase"><b>Order Statistic</b></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="actions graph-rp">
                                            <a href="#" className="btn btn-dark-blue btn-circle active tip-top" data-toggle="tooltip" title="Upload">
													<i className="fa fa-cloud-download" aria-hidden="true"></i>
												</a>
                                            <a href="#" className="btn btn-dark btn-circle active tip-top" data-toggle="tooltip" title="Refresh">
													<i className="fa fa-reply" aria-hidden="true"></i>
												</a>
                                            <a href="#" className="btn btn-blue-grey btn-circle active tip-top" data-toggle="tooltip" title="Delete">
													<i className="fa fa-trash-o" aria-hidden="true"></i>
												</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="line-chart" className="flot-chart flot-chart-sts line-chart-statistic"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="analytics-rounded mg-b-30 res-mg-t-30">
                            <div className="analytics-rounded-content">
                                <h5>Percentage distribution</h5>
                                <h2><span className="counter">60</span>/20</h2>
                                <div className="text-center">
                                    <div id="sparkline51"></div>
                                </div>
                            </div>
                        </div>
                        <div className="analytics-rounded">
                            <div className="analytics-rounded-content">
                                <h5>Percentage division</h5>
                                <h2><span className="counter">150</span>/<span className="counter">54</span></h2>
                                <div className="text-center">
                                    <div id="sparkline52"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="author-area-pro">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="personal-info-wrap">
                            <div className="widget-head-info-box">
                                <div className="persoanl-widget-hd">
                                    <h2>Jon Royita</h2>
                                    <p>Founder of Uttara It Park</p>
                                </div>
                                <img src="img/notification/5.jpg" className="img-circle circle-border m-b-md" alt="profile" />
                                <div className="social-widget-result">
                                    <span>100 Tweets</span> |
                                    <span>350 Following</span> |
                                    <span>610 Followers</span>
                                </div>
                            </div>
                            <div className="widget-text-box">
                                <h4>Jhon Royita</h4>
                                <p>To all the athaists attacking me right now, I can't make you believe in God, you have to have faith.</p>
                                <div className="text-right like-love-list">
                                    <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                    <a className="btn btn-xs btn-primary"><i className="fa fa-heart"></i> Love</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="author-widgets-single res-mg-t-30">
                            <div className="author-wiget-inner">
                                <div className="perso-img">
                                    <img src="img/notification/6.jpg" className="img-circle circle-border m-b-md" alt="profile" />
                                </div>
                                <div className="persoanl-widget-hd persoanl1-widget-hd">
                                    <h2>Fire Foxy</h2>
                                    <p>Founder of Uttara It House</p>
                                </div>
                                <div className="social-widget-result social-widget1-result">
                                    <span>100 Tweets</span> |
                                    <span>350 Following</span> |
                                    <span>610 Followers</span>
                                </div>
                            </div>
                            <div className="widget-text-box">
                                <h4>Fire Foxy</h4>
                                <p>To all the athaists attacking me right now, I can't make you believe in God, you have to have faith.</p>
                                <div className="text-right like-love-list">
                                    <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                    <a className="btn btn-xs btn-primary"><i className="fa fa-heart"></i> Love</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="personal-info-wrap personal-info-ano res-mg-t-30">
                            <div className="widget-head-info-box">
                                <div className="persoanl-widget-hd">
                                    <h2>Jon Royita</h2>
                                    <p>Founder of Uttara It Park</p>
                                </div>
                                <img src="img/contact/2.jpg" className="img-circle circle-border m-b-md" alt="profile" />
                                <div className="social-widget-result">
                                    <span>100 Tweets</span> |
                                    <span>350 Following</span> |
                                    <span>610 Followers</span>
                                </div>
                            </div>
                            <div className="widget-text-box">
                                <h4>Jhon Royita</h4>
                                <p>To all the athaists attacking me right now, I can't make you believe in God, you have to have faith.</p>
                                <div className="text-right like-love-list">
                                    <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                    <a className="btn btn-xs btn-primary"><i className="fa fa-heart"></i> Love</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
   </div>
        
              </>)

}

export default DummyData