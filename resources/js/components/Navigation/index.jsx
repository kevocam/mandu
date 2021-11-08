import React from 'react'
import './style.less'
import { Tabs, Radio } from 'antd';
const { TabPane  } = Tabs;



function Navigation(props) {
    function callback(key) {
        console.log(key);
    }


    return (
        <div className="navigation">
            <div className="navigation__title">
                <h2>{props.title}</h2>
            </div>
            <div className="navigation__bread">
                <div className="navigation__bread--text">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Divisiones" key="1">


                        </TabPane>
                        <TabPane tab="Colaboradores" key="2">
                            Aún en construcción :(
                        </TabPane>
                    </Tabs>
                </div>
                <div className="navigation__bread--icons">
                    <ul>
                        <li >
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-upload" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1890FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                    <polyline points="7 9 12 4 17 9" />
                                    <line x1="12" y1="4" x2="12" y2="16" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1890FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                    <polyline points="7 11 12 16 17 11" />
                                    <line x1="12" y1="4" x2="12" y2="16" />
                                </svg>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="navigation__content">
                       {props.children}
            </div>

        </div>
    )
}

export default Navigation
