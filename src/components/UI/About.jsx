
export default function About() {
	return (
		<section
			id="about"
			className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center max-w-5xl mx-auto">
			<div className="flex-1">
				<img src=
"https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
					alt="About"
					className="w-full h-full bg-cover"/>
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-smallTextColor 
								text-5xl font-bold">
						About Me :
					</h2>
				</div>
				<p>
					As I said, I am a full stack java developer...
				</p>
				<p>
					I am a passionate self taught developer. I was very much interested in learning and exploring new things.
				</p>
			</div>
		</section>
	);
}
