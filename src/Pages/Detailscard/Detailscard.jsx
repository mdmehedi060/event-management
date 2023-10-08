

const Detailscard = ({carddetails}) => {
    const {id,name,image,price,details} =carddetails;

    return (
       <div className="mt-10">
        <h1 className="text-5xl text-center mb-8 font-bold">Our Service Details</h1>
         <div className="card w-[700px] mb-12 p-6 mx-auto bg-slate-100 shadow-lg">
        <figure><img className="w-[500px]" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="font-bold">{price}</p>
          <p>{details}</p>
        </div>
      </div>
       </div>
    );
};

export default Detailscard;