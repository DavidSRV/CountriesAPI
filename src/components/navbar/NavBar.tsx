import React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const NavBar = () => {
  return (
    <nav className='nav'>
        <section className='nav__containerDescription'>
            <p className='nav__description'>Where in the world?</p>
        </section>
        <section className='nav__theme'>
            <DarkModeOutlinedIcon></DarkModeOutlinedIcon>
            <p>Dark Mode</p>
        </section>
    </nav>
  )
}

export default NavBar