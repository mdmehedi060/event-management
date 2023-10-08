const Banner = () => {
  return (
    <div
      className="hero min-w-1/2 lg:min-h-screen mb-10"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/zN0K0dp/banner-1.jpg)",
      }}
    >
      <div className=" mb-16"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className=" text-4xl text-green-600 font-bold">CORPORATE MANAGEMENT</h1>
          <p className=" text-xl text-yellow-400">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;


