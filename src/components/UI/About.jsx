import profile from "../../assets/images/profile.png";

export default function About() {
  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center max-w-5xl mx-auto"
    >
      <div data-aos="fade-up" data-aos-duration="1500" className="flex-1">
        <img src={profile} alt="About" className="w-full h-full bg-cover" />
      </div>
      <div
        className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6"
      >
        <div>
          <h2 data-aos="fade-up" data-aos-duration="1500"
            className="text-center text-smallTextColor 
								text-5xl font-bold"
          >
            About Me :
          </h2>
        </div>
        <p data-aos="fade-up" data-aos-duration="1500">
          I am a passionate self taught developer. I was very much interested in
          learning and exploring new things.
        </p>
        <ul data-aos="fade-up" data-aos-duration="1500" className="mt-4 px-md-0 px-2">
          <li className="list-item">
            <span className="key">Name:</span>
            <span>Roshan Shreen</span>
          </li>
          <li className="list-item">
            <span className="key">Date Of Birth:</span>
            <span>11 Mar 2000</span>
          </li>
          <li className="list-item">
            <span className="key">Address:</span>
            <span>Bangalore, Karnataka</span>
          </li>
          <li className="list-item">
            <span className="key">Email:</span>
            <span>roshanshreenaj@gmail.com</span>
          </li>
          <li className="list-item">
            <span className="key">Phone No:</span>
            <span>9384870415</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
