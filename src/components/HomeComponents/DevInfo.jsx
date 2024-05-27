const DevInfo = () => {
  const infoCards = [
    {
      id: 1,
      title: "who i am",
      description:
        "I’m Tanni Rani Dey. I working with web development. I completed diploma in engineering in computer technology from Sylhet polytechnic institute. I did an internship at Binary IT institute in diploma 8th semester. I know Html, Css, JavaScript, React Js, Node js, Express js.",
    },
    {
      id: 2,
      title: "educational qualification",
      description:
        "Dipolma-in-engineering from Sylhet Polytechnic Institute. Department of Computer Technology. Internship of Web Development",
    },
    {
      id: 3,
      title: "experience",
      description:
        "I working in Web development. After diploma, I worked one year in freelance marketplace as a web developer. I worked in template design with html css and developed site with wordpress customization. Then I learn JavaScript, React Js, Express js, Node js from programming hero and I completed an internship from indian company",
    },
    {
      id: 4,
      title: "technologies",
      description:
        "I learned only Html and CSS from diploma 8th semester internship Then I did a govt course on web design and development. In this course, I learned advanced Html, CSS, and basic WordPress theme development, then I completed one more course from programming hero. There I learned HTML5, CSS3, Bootstrap, Tailwind CSS JavaScript, React JS, firebase authentication, and basic MongoDB, node js. I know simple typescript and redux. Now I learning Next Js",
    },
  ];

  return (
    <div className="container mx-auto mb-20">
      <h3 className="text-3xl font-semibold text-secondary mb-5 text-center">
        Who Developed the System
      </h3>
      <div className="grid grid-cols-2 gap-5 p-4  bg-neutral rounded-box">
        {infoCards.map((item) => (
          <div key={item.id} className="carousel-item">
            <div className="card  bg-white border text-primary-content shadow-lg">
              <div className="card-body items-center ">
                <h2 className="card-title capitalize font-semibold mb-3">
                  {item.title}
                </h2>
                <p className="text-accent text-justify">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevInfo;
