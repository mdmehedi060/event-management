
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Servicecard from '../Servicecard/Servicecard';
import Bannertwo from './Bannertwo';
import Bannerthree from './Bannerthree';




const Home = () => {
    const services =useLoaderData()
    // console.log(services);
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
           <Banner></Banner>
    
        <div>
            <h2 className="text-4xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 mt-10">
            
            {
                services.map(service =><Servicecard key={service.id} services={service}>

                </Servicecard>)
            }
              
            </div>
        </div>
        <Bannertwo></Bannertwo>
        <Bannerthree></Bannerthree>
        </div>
    );
};

export default Home;