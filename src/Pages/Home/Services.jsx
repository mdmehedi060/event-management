import { useEffect, useState } from "react";


const News = (carddetails) => {
  const { id, name, image, details } = carddetails;
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
          <h2 className="text-5xl  font-bold">Our Service Details:</h2>
          <div>
            <h2>{carddetails.id}</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={carddetails.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{carddetails.name}</h2>
                <p>{carddetails.details}</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
