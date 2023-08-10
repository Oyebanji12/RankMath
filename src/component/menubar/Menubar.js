import React, { useState } from 'react'
import './menubar.css'
import {IoIosArrowBack} from 'react-icons/io'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BsCreditCard2Back} from 'react-icons/bs'
import {GrStatusInfo} from 'react-icons/gr'
import {GoShare} from 'react-icons/go'
import {IoIosRemoveCircleOutline} from 'react-icons/io'

const Menubar = () => {
    const [toggleMenu, setToggleMenu]= useState(false)

    const closeMenu=()=>{
        setToggleMenu(false)

    }
    const openMenu=()=>{
        setToggleMenu(true)

    }
  return (
    <div className='menubar-container'>
       <div className='arrowIcon'><IoIosArrowBack /></div>
        <div className='btc-wallet'>Bitcoin Wallet</div>
        <div className='hamburgerWrapper'>
        {toggleMenu ? <BsThreeDotsVertical onClick={closeMenu} className='hamburgerIcon'/>: <BsThreeDotsVertical onClick={openMenu} className='hamburgerIcon'/>} 
        {toggleMenu && (
            <div className='menusubWrapper'>
                <div className='edit'>
                <div className='menuSubText'>Edit</div>
                <div className='menuSubIcon'><BsCreditCard2Back /></div>
                </div>

                <div className='line'></div>

                <div className='courier'>
                <div className='menuSubText'>Courier info</div>
                <div className='menuSubIcon'><GrStatusInfo /></div>
                </div>
                <div className='line'></div>

                <div className='share'>
                <div className='menuSubText'>Share</div>
                <div className='menuSubIcon'><GoShare /></div>
                </div>
                <div className='line'></div>

                <div className='remove'>
                <div className='menuSubText'>Remove</div>
                <div className='menuSubIcon'><IoIosRemoveCircleOutline /></div>
                </div>
            </div>
        )}
        
        </div>

    </div>
  )
}

export default Menubar