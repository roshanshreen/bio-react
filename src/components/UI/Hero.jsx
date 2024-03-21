import React from 'react';
import { ReactTyped } from "react-typed";
import { ArrowDown } from 'react-feather';
import { useSpring, animated } from 'react-spring'; // Import animated from react-spring
import { Link } from 'react-scroll';

export default function Hero() {
  const arrowBounceSpring = useSpring({
    from: {
      transform: 'translateY(0px)',
    },
    to: async next => {
      while (true) {
        await next({ transform: 'translateY(-10px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: {
      tension: 400,
      friction: 20
    }
  });

  return (
    <section
      id="hero"
      className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                justify-center items-center align-center mt-40 
                mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
      <div className="flex-1 flex flex-col justify-center items-center gap-5">
        <div className="basis-1/3 mt-10 sm:mt-0">
        </div>
        <div className="overlay"></div>
        <div data-aos="fade-up" data-aos-duration="1500" className="text text-center">
          <span className="subheading">
            Hey! I AM
          </span>
          <h2 className="text-center text-smallTextColor text-8xl font-bold">
            Roshan
          </h2>
          <h2 className="text-center text-smallTextColor text-8xl font-bold">
            Shreen
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="font-bold text-3xl font-[930]">
            I'm a{" "}
            <ReactTyped
              strings={["Developer","Full Stack Java Developer","React Developer"]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="."
              showCursor={true}
            />
          </h1>
        </div>
        <Link
          to="skills"
          className="flex justify-center items-center"
          activeClass="active"
          spy
          smooth
          offset={-100}
          duration={500}
        >
          <animated.div style={arrowBounceSpring}>
            <ArrowDown size={30} color="#3e64ff" />
          </animated.div>
        </Link>
      </div>
    </section>
  );
}
