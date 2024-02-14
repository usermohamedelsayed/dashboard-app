import React, { useState } from 'react'
import "./Nav.scss"
import { myPhoto } from '../../assaset'
import { NavLink } from 'react-router-dom';
import { dataNav } from './data';
const Nav = () => {
    const [toggleNav, setToggleNav] = useState(true)
    return (
        <div className={`Nav ${toggleNav ? "close" : ""}`}>
            <div className="btn_toggleNav">
                <button onClick={() => setToggleNav(!toggleNav)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="profile_box">
                <img src={myPhoto} alt="" />
                <div className="details">
                    <span className="name">mohamed sayed</span>
                    <span className="role">admin</span>
                </div>
            </div>
            <ul className='list_Links'>
                {
                    dataNav.map(item => (
                        <li key={item.id} className='item_link'>
                            <NavLink className="link" to={item.path}>
                                <i className='icon'>{item.icon}</i>
                                <p className='text'>{item.text}</p>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nav