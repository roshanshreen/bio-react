import React, { useRef, useEffect, useState } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value according to your design breakpoints
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = e => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header ref={headerRef} className={`w-full h-[80px] leading-[80px] flex items-center ${isMobile ? 'bg-black' : 'bg-white'}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ================logo============= */}
          <div className="navbar-brand">
            <span className={`text-2xl font-[20px] text-white`}>
              R
            </span>
            <span className={`${isMobile?'text-white':''}`}>
              oshan
            </span>
          </div>

          {/*==============logo end ==============*/}
          {/*==============menu start =============*/}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a onClick={handleClick} className={`${isMobile ? 'text-white' : ''} font-[500]`} href="#hero">
                  Hero
                </a>
              </li>
              <li>
                <a onClick={handleClick} className={`${isMobile ? 'text-white' : ''} font-[500]`} href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={handleClick} className={`${isMobile ? 'text-white' : ''} font-[500]`} href="#company">
                  Company
                </a>
              </li>
              <li>
                <a onClick={handleClick} className={`${isMobile ? 'text-white' : ''} font-[500]`} href="#education">
                  Education
                </a>
              </li>
              <li>
                <a onClick={handleClick} className={`${isMobile ? 'text-white' : ''} font-[500]`} href="#skills">
                  Skills
                </a>
              </li>
            </ul>
          </div>
          {/*==============menu end=============*/}

          {/* =============menu right ===========*/}
          <div className="flex items-center gap-4">
            <span onClick={toggleMenu} className={`text-2xl ${isMobile ? 'text-white' : 'text-black'} md:hidden cursor-pointer`}><i className="ri-menu-line">Menu</i></span>
          </div>
          {/* =============menu end ===========*/}

        </div>
      </div>
    </header>
  );
};

export default Header;
