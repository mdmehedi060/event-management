import { Link } from "react-router-dom";


const Servicecard = ({services}) => {
    const {id,name,image,price,details} =services;
    return (
        <div className="card w-96 bg-base-100 mt-8 mb-8 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{name}</h2>
    <p className="font-bold">{price}</p>
    {
            details.length >100 ? <p>{details.slice(0,100)}<Link 
            to={`/service/${id}`}
            className="text-pink-500 font-bold"> View Details</Link></p>
            :
            <p>{details}</p>
        }
   
  </div>
</div>
    );
};

export default Servicecard;