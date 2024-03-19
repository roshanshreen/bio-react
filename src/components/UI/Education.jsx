export default function Education() {
    return (
      <section id="education" className="py-8 md:py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-smallTextColor font-[800] text-[2.4rem] mb-5">
              Education
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col space-y-8">
              <EducationItem
                title="Full Stack Java Development"
                description="I have completed this course in Cranes Varsity. Here I have studied Html, Css, JavaScript, RDBMS, SQL."
              />
              <EducationItem
                title="B.E in Electronics and Communication Engineering"
                description="UnderGraduation in Professional group of Institutions, Palladam. Anna University. CGPA: 7.9"
              />
              <EducationItem
                title="XII"
                description="Higher Secondary in Sri G.V.G Visalakshi. Mat. Hr. Sec. School, Udumalpet. Percentage: 91%."
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  const EducationItem = ({ title, description }) => {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-primaryColor font-[700] text-xl mb-3">{title}</h3>
        <p className="text-[15px] text-smallTextColor">{description}</p>
      </div>
    );
  };
  