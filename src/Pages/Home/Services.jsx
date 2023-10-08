import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const News = () => {
  const { id, name, image, details } = useParams();
const [cardDetails,setCardDetails]=useState()

useEffect(()=>{
  fetch('/category.json')
  .then(res=>res.json())
  .catch(data=>setCardDetails(data))
},[])

  return (
    <div className="">
      <div className="">
        <div className="col-span-3">
          <h2 className="text-5xl  font-bold">Our Service Details:{id}</h2>
          <div>
            
            <div className="card w-96 mx-auto mt-12 mb-12 bg-slate-100 shadow-lg">
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
