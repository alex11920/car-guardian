import person from "/src/assets/about_us/person.jpg";
import parts from "/src/assets/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero my-32">
      <div className="hero-content flex-col lg:flex-row-reverse gap-24">
        <div className="lg:w-1/2 shrink-0 text-center lg:text-left">
          <h1 className="text-2xl text-color font-bold">About Us</h1>
          <h1 className="text-5xl font-bold py-5 max-w-96">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-p max-w-[500px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
            <br />
            <br />
            The majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <span className="btn bg-[#FF3811] border-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]">
            Discover More
          </span>
        </div>
        <div className="card shrink-0 lg:w-1/2 items-center relative">
          <img
            src={person}
            className="object-cover object-left w-[460px] h-[470px] rounded-xl"
          />
          <img
            src={parts}
            className="object-cover w-[250px] h-[250px] border-8 border-white shadow-lg rounded-xl absolute top-64 lg:left-72"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
