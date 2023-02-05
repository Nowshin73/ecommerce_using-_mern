import React from 'react'
import './Virtual.css'
import shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
const Virtual = () => {
  return (
    <div className='v-container'>
        <div className="v-left">
            <span>virtual try-on</span>
            <span>never buy the wrong shade again</span>
            <span>Try Now !<br />
            <img src={shade} alt="" />
            </span>
            
        </div>
        <div className="v-right">
          <div className="v-wrapper">
        <ReactCompareImage leftImage={Before} rightImage={After} />
          </div>
        </div>
    </div>
  )
}

export default Virtual