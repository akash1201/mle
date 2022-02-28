import React, { useEffect, useState } from 'react'
import Sider from '../components/Sider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getMyDownLines } from '../ApiCalls/UserAuth'
import { Table, Switch, Space } from 'antd';
import TopAnalysisData from '../components/TopAnalysisData'
import SideAnalysisData from '../components/SideAnalysisData'

const MyDashboard = () => {

    const [tableData, setTableData] = useState(()=>[])
    const [loading, setLoading] = useState(()=>true)
    useEffect(()=>{
        getMyDownLines()
        .then((e)=>{
             console.log(e)
             setTableData(e.data.users)
             setLoading(false)
        })
        .catch(err=>{
            console.log(err)
            setLoading(false)
        })
    }, [])

    const columns = [
        {
            title: 'User Name',
            dataIndex: 'userId',
            key: 'userId',
            width: '12%',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
          },
        {
          title: 'Address',
          dataIndex: 'address',
          width: '30%',
          key: 'address',
        },
      ];
          return (
                    <>
                       <Sider/>
                <div className="all-content-wrapper">
                    <Header />
                    <TopAnalysisData />

        
        <div className="product-sales-area mg-tb-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-sales-chart">
                            <div className="portlet-title">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="caption pro-sl-hd">
                                            <span className="caption-subject text-uppercase"><b>Down Lines</b></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="actions graph-rp">
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <Table
                                rowKey={'id'}
                                columns={columns}
                                dataSource={tableData}
                                loading={loading}
                                pagination={false}
                            />
                            </div>
                        </div>
                    </div>
                    {/* <SideAnalysisData/> */}
                </div>
            </div>
        </div>

        <Footer/>
   </div>
        
                    </>
          )

}

export default MyDashboard