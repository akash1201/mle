import React from 'react'

const TopAnalysisData = () => {


          return (
                    <>
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

                    </>
          )
}

export default TopAnalysisData