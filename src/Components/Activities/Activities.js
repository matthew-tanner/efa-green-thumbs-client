import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const Activities = () => {

    return (
        <Menu
        style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            >
            <SubMenu key="sub1" title="State">
                <Menu.Item key="1">AK</Menu.Item>
                <Menu.Item key="2">ME</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Park">
            <Menu.Item key="5">TBD</Menu.Item>
            <Menu.Item key="6">TBD</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4"title="Activity">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
        </Menu>
        );
    }



export default Activities