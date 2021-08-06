import React, {useState, useEffect} from 'react'
import logo from '../img/logo.png'

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      window.onscroll = function() {
        if (window.scrollY > 5) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    }, []);
  
    return (
        <header className={scrolled ? "header-logo shadow" : "header-logo"}>
            <a href="https://namu-ai.com/">
                <img src={logo} alt='logo Namu AI' />
            </a>
        </header>
    )
}

export default Header

