import React from 'react'
import "./TopDeals.scss"
const TopDeals = ({ data }) => {
    return (
        <div className='TopDeals'>
            <p className="titleBoxChart">top deals</p>
            <ul className="list_users">
                {
                    data.map(({ id, img, name, email, price }) => (
                        <li key={id} className="item_user">
                            <div className="img_text">
                                <img src={img} alt="imgUser" />
                                <div className="text">
                                    <span className='name'>{name}</span>
                                    <span className='email'>{email}</span>
                                </div>
                            </div>
                            <span className="price">${price}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TopDeals