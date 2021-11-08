import React from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import manduLogo from '../../../assets/mandu.svg';
import manduLogo2 from '../../../assets/mandu.png';

import './style.less'

function Header() {

    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );

    return (
        <div className="header">
            <div className="header__main">
                <ul>
                    <li>
                        <img src={manduLogo} alt="logo Mandu" />
                    </li>

                    <li>
                        <a href="">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="">
                        Organización
                        </a>
                    </li>
                    <li>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Modelos <DownOutlined />
                            </a>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Seguimiento <DownOutlined />
                            </a>
                        </Dropdown>
                    </li>
                </ul>
            </div>
            <div className="header__secundary">
                <ul>
                    <li className="header_secundary--btn">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="3" y="7" width="18" height="13" rx="2" />
                                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                                <line x1="12" y1="12" x2="12" y2="12.01" />
                                <path d="M3 13a20 20 0 0 0 18 0" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-question-mark" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                <line x1="12" y1="19" x2="12" y2="19.01" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                        </a>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Administrador <DownOutlined />
                            </a>
                        </Dropdown>
                    </li>
                    <li className="logo2">
                        <img src={manduLogo2} alt="mandu logo" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
