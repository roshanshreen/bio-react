import {ReactTyped} from "react-typed";

export default function Hero() {

	return (
	<section
		id="hero"
		className="px-10 w-full flex gap-12 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
		<div className="flex-1 flex flex-col justify-center items-center gap-5">
      <div className="basis-1/3 mt-10 sm:mt-0">
      </div>
		<div>
			<h3 data-aos="fade-up" data-aos-duration="1500" className="text-center text-2xl font-bold">
				Hey! I AM
			</h3>
			<h2 data-aos="fade-up" data-aos-duration="1500" className="text-center text-smallTextColor text-8xl font-bold">
			Roshan Shreen
			</h2>
		</div>
		<div>
      <h1 className="font-bold">
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
		</div>
	<div class="down-arrow"></div>
	</section>
	);
}
