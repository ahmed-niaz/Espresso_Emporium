import { useLoaderData } from "react-router-dom";
import banner from "../assets/images/HomeBanner.png";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const Home = () => {
  const latestCoffee = useLoaderData();
  const [removeCoffee,setRemoveCoffee] = useState(latestCoffee)
  return (
    <main>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="min-h-[400px] md:min-h-[600px] lg:min-h-[700px] bg-cover w-full"
      >
        <div className="flex  justify-center h-full items-center min-h-[400px] md:min-h-[600px] lg:min-h-[800px]">
          <div className="lg:basis-10/12"></div>

          <div className="p-12">
            <h2 className="text-white text-start">
              Would you like a Cup of Delicious Coffee?
            </h2>
            <p className="text-white w-full lg:w-3/4">
              Its coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn glass">Learn More</button>
          </div>
        </div>
      </div>
      <div>
        <h2>Our Latest Products</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-4">
        {
            latestCoffee.map(coffee => <CoffeeCard key={coffee._id}
              removeCoffee =  {removeCoffee}
              setRemoveCoffee = {setRemoveCoffee}
               coffees = {coffee}/>)
        }

        </div>
      </div>
    </main>
  );
};

export default Home;
