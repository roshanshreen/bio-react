
export default function Skills() {
	const skills = ["HTML", "CSS", "Javascript", "React", "RDBMS", "SQL"];
	return (
		<section id="skills"
			className="px-10 w-full my-40 max-w-5xl mx-auto">
               
			<h2 data-aos="fade-up" data-aos-duration="1500" className="text-center text-6xl text-smallTextColor font-bold">
            My Skills...
			</h2>
			<div data-aos="fade-up" data-aos-duration="1500" className="mt-10 flex gap-5 justify-center 
							flex-wrap mx-auto max-w-xl">
				{skills.map((skill, index) => {
					return (
						<div key={index}
							className="cursor-pointer px-12 py-10 
										rounded hover:bg-primaryColor text-lg 
										flex items-center justify-center 
										font-bold hover:shadow-xl">
							{skill}
						</div>
					)})}
			</div>
		</section>
	)
}
