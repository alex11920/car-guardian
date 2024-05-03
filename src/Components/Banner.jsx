import img1 from "/src/assets/banner/1.jpg";
import img2 from "/src/assets/banner/2.jpg";
import img3 from "/src/assets/banner/3.jpg";
import img4 from "/src/assets/banner/4.jpg";
import img5 from "/src/assets/banner/5.jpg";
import img6 from "/src/assets/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex justify-between top-1/2 lg:top-auto lg:justify-end transform -translate-y-1/2 left-5 right-5 lg:bottom-0 lg:mr-16 lg:mb-16">
          <a
            href="#slide6"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none mr-5 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex justify-between top-1/2 lg:top-auto lg:justify-end transform -translate-y-1/2 left-5 right-5 lg:bottom-0 lg:mr-16 lg:mb-16">
          <a
            href="#slide1"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none mr-5 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex justify-between top-1/2 lg:top-auto lg:justify-end transform -translate-y-1/2 left-5 right-5 lg:bottom-0 lg:mr-16 lg:mb-16">
          <a
            href="#slide2"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none mr-5 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex justify-between top-1/2 lg:top-auto lg:justify-end transform -translate-y-1/2 left-5 right-5 lg:bottom-0 lg:mr-16 lg:mb-16">
          <a
            href="#slide3"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none mr-5 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute flex justify-between top-1/2 lg:top-auto lg:justify-end transform -translate-y-1/2 left-5 right-5 lg:bottom-0 lg:mr-16 lg:mb-16">
          <a
            href="#slide4"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none mr-5 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        <div className="absolute flex justify-between top-1/2 lg:top-auto lg:justify-end transform -translate-y-1/2 left-5 right-5 lg:bottom-0 lg:mr-16 lg:mb-16">
          <a
            href="#slide5"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none mr-5 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle lg:w-24 md:w-24 bg-[#FFFFFF33] text-white border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
