import React ,{useRef,useEffect} from "react";

const Header = () => {
    const headerRef=useRef(null);
    const menuRef=useRef(null);


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
  
    const handleClick=e=>{
        e.preventDefault();

        const targetAttr =e.target.getAttribute('href');
        const location =document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top:location-80,
            left:0,
        });
    };

    const toggleMenu=() => menuRef.current.classList.toggle('show_menu')

  return (
    <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ================logo============= */}
          <div className="navbar-brand">
          <span className="text-white text-2xl font-[1100]">
              R
            </span>
            oshan
            {/* <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Roshan Shreen</h2>
            </div> */}
          </div>

          {/*==============logo end ==============*/}
          {/*==============menu start =============*/}
          <div className="menu"  ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a onClick={handleClick} className="text-smalltextColor font-[500]" href="#hero">
                  Hero
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smalltextColor font-[500]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smalltextColor font-[500]" href="#company">
                  Company
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smalltextColor font-[500]" href="#education">
                  Education
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smalltextColor font-[500]" href="#skills">
                  Skills
                </a>
              </li>
            </ul>
          </div>
          {/*==============menu end=============*/}

          {/* =============menu right ===========*/}
             <div className="flex items-center gap-4">
             <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer"><i className="ri-menu-line"></i></span>
             </div>
                    {/* =============menu end ===========*/}

        </div>
      </div>
    </header>
  );
};

export default Header;
