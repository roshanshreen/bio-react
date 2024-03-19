import profile from "../../assets/images/profile.png"

export default function Hero() {
	return (
	<section
		id="hero"
		className="px-10 w-full flex gap-12 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
		<div className="flex-1 flex flex-col justify-center items-center gap-5">
      <div className="basis-1/3 mt-10 sm:mt-0">
        <figure className="flex items-center justify-center">
      <img src={profile} alt="profile" height="500px" width="500px" />
      </figure>
      </div>
		<div>
			<h4 className="text-center text-xl font-bold">
				Hello, Welcome to
			</h4>
			<h2 className="text-center text-smallTextColor text-5xl font-bold">
			My Profile site
			</h2>
		</div>
		<p className="text-center">
			This is Roshan Shreen, An Engineer with sound knowledge and skill set in Full Stack Java Development and ReactJS
		</p>
		</div>
	</section>
	);
}
