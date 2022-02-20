import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'


const CardItem = ({
    isInfo = true,
    dataAos = "zoom-in",
    id= `key-${new Date().getTime()}`,
    isSize = false,
    images = "",
    title = "",
    date = "",
    price = "",
    onClick = ()=>{},
    description= "",
    isPromotion = false,
}) => {    
    return (
        <div className="card__item"  key={`key-${id}`} onClick={onClick}>
            <div className="card__item__image">
                <Image src={images} alt="images" />
            </div>
            <div className="card__item__info" key={`key-item-${id}`}>
                <div className={`card__item__info__name ${isSize ? "sizeName" :""}`}>
                    {title || ""}
                    {isPromotion && <span className="promotion-card">{"Khuyến mãi"}</span>}
                </div>
                <div className={`card__item__info__description`}>
                    {description}
                </div>
            </div>
        </div>
    )
}

CardItem.propTypes = {
    item: PropTypes.object,
    isSize: PropTypes.bool,
    id: PropTypes.string,
    isInfo: PropTypes.bool,
    dataAos: PropTypes.string,
    images: PropTypes.any,
    title: PropTypes.string,
    date: PropTypes.string,
    price: PropTypes.string,
    onClick : PropTypes.func,
    description: PropTypes.string,
    isPromotion: PropTypes.bool,
}

export default CardItem
