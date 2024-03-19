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
          <div className="flex items-center gap-[10px]">
          <span className="w-[35px] h-[35px] bg-primaryColor text-black text-[18px] font-[500] rounded-full flex items-center justify-center">
              R
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Roshan Shreen</h2>
            </div>
          </div>

          {/*==============logo end ==============*/}
          {/*==============menu start =============*/}
          <div className="menu"  ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a onClick={handleClick} className="text-smalltextColor font-[600]" href="#hero">
                  Hero
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smalltextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smalltextColor font-[600]" href="#company">
                  Company
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smalltextColor font-[600]" href="#education">
                  Education
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smalltextColor font-[600]" href="#skills">
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
