import React from 'react'
import "./style.css"
import Menu from './MenuAPI'

const Restaurant = () => {
//   const colorStyle = {color: 'red'};

  return (
    <>
    <div className="card-container">
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">1</span>
                {/* <span className="card-author subtle" style={colorStyle}>Breakfast</span> */}
                <span className="card-author subtle">Breakfast</span>
                <h2 className="card-title">Maggi</h2>
                <span className="card-description subtle">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate fugiat sapiente facilis officiis maxime rem iste ipsum totam, doloribus facere qui veniam nesciunt ab tenetur quia. Hic dicta magni sed?
                </span>
                <div className="card-read">Read</div>
            </div>
            <img src={image} alt="images" className='card-media'/>

            <span className="card-tag subtle">Order now</span>
        </div>
    </div>
    </>
  )
}

export default Restaurant