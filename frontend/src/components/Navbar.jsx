import React, { useState } from 'react';

import { useStateContext } from '../context';
import { logo2, menu,search,profile } from '../assets';
import { navlinks } from '../constants';
import  CustomButton from './CustomButton';
import { Link, useNavigate } from 'react-router-dom';


const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-white'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)


const Navbar = () => {
   const navigate = useNavigate();
   const [isActive,setIsActive] = useState('dashboard');

   const [toggleDrawer,setToggleDrawer] = useState(false);
   const {connect,address} = useStateContext();
 
  return (
 

    <div className="flex md:flex-row flex-col-reverse justify-between mb-[30px] gap-6">
      
      <div className="inline-flex gap-2">
      <Link to="/">
        <Icon styles=" rounded-[20px] w-[60px] h-[52px] bg-white" imgUrl={logo2} />
      </Link>
    <h1 className='font-bold text-white my-px text-[40px] '>
    CharityCampaign
    </h1>
    </div>
    

    <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-white bg-opacity-50 rounded-[100px]">
      <input type="text" placeholder="Search for campaigns" className="flex w-full font-epilogue font-normal  placeholder:text-white text-white bg-transparent outline-none" />
      
      <div className="w-[70px] h-full rounded-[20px] bg-white-300 flex justify-center items-center cursor-pointer">
        <img src={search} alt="search" className="w-[20px] h-[20px] object-contain"/>
      </div>
    </div>
     
    <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect to wallet'}
          styles={address ? 'bg-white bg-opacity-30' : 'bg-purple-500 '}
          handleClick = {() => {
            if(address) navigate('create-campaign')
            else connect()
          }}/>

     <Link to="/profile">
      <div className='w-[52px] h-[52px] rounded-full
      bg-white flex justify-center items-center cursor-pointer
      '>
        <img src={profile} alt="user" className="w-[60%] h-[60%] object-contain "/>

      </div>
     </Link>
    </div>

    {/* Small */}
    <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer">
            <img src={logo2} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>

          <img 
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div className={`absolute top-[60px] right-0 left-0 bg-white z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${isActive === link.name && 'bg-white'}`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img 
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'bg-white'}`}>
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex mx-4">
            <CustomButton 
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect To Wallet'}
              styles={address ? 'bg-green' : 'bg-red'}
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }}
            />
            </div>
          </div>
        </div>
    </div>


      
  )
}

export default Navbar;