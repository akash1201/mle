import React from 'react'

const SideAnalysisData = () => {


          return (
                    <>
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
  
                    </>
          )
}

export default SideAnalysisData