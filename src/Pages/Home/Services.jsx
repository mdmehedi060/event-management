import { useEffect, useState } from "react";
import { useLoaderData, useParams } from 'react-router-dom';
import Detailscard from "../Detailscard/Detailscard";


const News = () => {

const [carddetails,setCardDetails]=useState({});
const details = useLoaderData();
console.log(details);
const { id } = useParams();
console.log(id);
useEffect(()=>{
  const findDetails = details?.find(detail=> detail.id === id);
  setCardDetails(findDetails);
},[id,details])

  return (
   <Detailscard carddetails={carddetails}></Detailscard>
  );
};

export default News;
