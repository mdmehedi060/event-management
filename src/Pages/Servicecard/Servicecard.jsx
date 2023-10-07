import { Link } from "react-router-dom";


const Servicecard = ({services}) => {
    const {id,name,image,details} =services;
    return (
        <div className="card w-96 bg-base-100 mt-8 mb-8 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    {
            details.length >200 ? <p>{details.slice(0,200)}<Link 
            to={`/service/${id}`}
            className="text-pink-500 font-bold"> Read More</Link></p>
            :
            <p>{details}</p>
        }
   
  </div>
</div>
    );
};

export default Servicecard;