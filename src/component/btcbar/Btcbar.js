import React from 'react'
import {PiCurrencyBtcFill} from 'react-icons/pi'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { useState } from 'react'
import './btcbar.css'

const Btcbar = () => {
    const [toggleMenu, setToggleMenu] = useState (false)

    const closeMenu=()=>{
        setToggleMenu(false)
      
    }
    
    const openMenu=()=>{
      setToggleMenu(true)
    
    }
  return (
    <div className='btcbar-wrapper'>
        <div className='btcCurrency-wrap'>
            <div className='btcWrap'>
           <PiCurrencyBtcFill className='btcIcon' /> 
            <div className='btcText'>Bitcoin</div>
            </div>
            <div className='btcTextTwo'>BTC</div>
        </div>
        <div className='btcFigure'>3.529020 BTC</div>
        <div className='btcUsdWrapper'>
        <div className='usd'>$19.153 USD</div>
        <div className='btn-div'>
        <button>-2.32%</button>
        </div>
        </div>
        <div className='dropdownWrapper'>
        {toggleMenu ? <div className='dropdownArrowIcon'> <MdKeyboardArrowDown onClick={closeMenu}  /></div> : <div className='dropdownArrowIcon'><MdKeyboardArrowDown onClick={openMenu}   /> </div> } 

        {toggleMenu && (
            <div className='dropdownSubWrapper'>
                <div className='day'>Day</div>
                <div className='week'>Week</div>
                <div className='month'>Month</div>
                <div className='year'>Year</div>
            </div>
        )}   
        </div>
    </div>
  )
}

export default Btcbar