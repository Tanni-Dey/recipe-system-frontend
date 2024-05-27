// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";
import clientImg from "../../assets/me.jpg";

const SuccessStories = () => {
  const allStories = [
    {
      id: 1,
      title: "Tanni Dey",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio minus pariatur impedit rerum facilis similique temporibus quam nulla modi quas porro magni ad ipsa inventore sequi, velit accusantium cum.",
    },
    {
      id: 2,
      title: "Monika Rahman",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio minus pariatur impedit rerum facilis similique temporibus quam nulla modi quas porro magni ad ipsa inventore sequi, velit accusantium cum.",
    },
    {
      id: 3,
      title: "Mili Das",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio minus pariatur impedit rerum facilis similique temporibus quam nulla modi quas porro magni ad ipsa inventore sequi, velit accusantium cum.",
    },
    {
      id: 4,
      title: "Pritam Ahmed",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio minus pariatur impedit rerum facilis similique temporibus quam nulla modi quas porro magni ad ipsa inventore sequi, velit accusantium cum.",
    },
  ];

  return (
    <div className="container mx-auto mb-20">
      <h3 className="text-3xl font-semibold text-secondary mb-5 text-center">
        Success Story
      </h3>
      <div className="grid grid-cols-5 gap-20">
        <div className="col-span-3 carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
          {allStories.map((item) => (
            <div key={item.id} className="carousel-item">
              <div className="card max-w-80 bg-white border text-primary-content shadow-lg">
                <div className="avatar mr-5">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt="" src={clientImg} />
                  </div>
                </div>
                <div className="card-body items-center ">
                  <h2 className="card-title capitalize font-semibold mb-3">
                    {item.title}
                  </h2>
                  <p className="text-accent text-justify">
                    {item.description}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2 flex justify-center">
          <div className="stats stats-vertical lg:stats-vertical gap-y-5  my-10">
            <div className="stat border-none">
              <div className="stat-figure text-secondary text-2xl">
                {/* <BiCommentDetail /> */}
              </div>
              <div className="stat-title">Users</div>
              <div className="stat-value text-primary text-5xl">
                {/* <CountUp start={0} end={33} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp> */}
                23 K+
              </div>
            </div>
            <div className="stat  border-none">
              <div className="stat-figure text-secondary text-2xl">
                {/* <BiCommentDetail /> */}
              </div>
              <div className="stat-title">Recipe</div>
              <div className="stat-value text-primary text-5xl">
                {/* <CountUp start={0} end={33} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp> */}
                23 K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
