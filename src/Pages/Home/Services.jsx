import { useParams } from "react-router-dom";

const News = () => {
  const { id, name, image, details } = useParams();
  return (
    <div className="">
      <div className="">
        <div className="col-span-3">
          <h2 className="text-5xl  font-bold">Our Service Details:</h2>
          <div>
            <h2>{id}</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
