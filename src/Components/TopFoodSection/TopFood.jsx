
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopFood = () => {
    const [showTopFood, setShowTopFood] = useState([]);
    useEffect( () => {
        fetch('https://ruchi-bangla-server.vercel.app/topSellingFoods')
        .then(res => res.json())
        .then(data => {
            setShowTopFood(data);
        })
    }, [])
    return (
       <div>
        <div className='text-center my-16'>
            <h2 className='text-4xl font-bold font-barlow text-[#AD1A19]'>Our top Foods</h2>
            <p className='md:w-3/5 lg:w-1/3 mx-auto mt-6 text-xl font-barlow font-semibold'>Discover our top-selling dishes, loved by our customers around the clock! From traditional favorites to modern delights, explore our most popular dishes that keep our customers coming back for more.</p>
        </div>
        <section className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {
            showTopFood.map(topFood => <div key={topFood._id} className=''>
                <div  className='container mx-auto'>
             <div className="  space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md dark:bg-[#18181B] hover:scale-105 transform transition duration-300">
        {/* Card Image */}
        <img
          className="h-[250px] w-full  rounded-2xl bg-gray-400 object-cover"
          src={topFood.image}
          alt="card navigate ui"
        />
        {/* Card Heading */}
        <div className="space-y-2">
          <h2 className="font-semibold font-barlow text-slate-800 sm:text-lg md:text-2xl dark:text-white/90">
            {topFood.name}
          </h2>
          {/* rating  */}
        </div>
        {/* Price and action button */}
        <div className="mt-5 flex items-center justify-start gap-8 md:gap-6 lg:gap-10">
          <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">
           Price: $ {topFood.price}
          </h2>
          <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">Category: {topFood.category}</h2>
          
        </div>
        
        <div>
        <Link to={`/allFoods/${topFood._id}`}><button className="rounded-lg bg-[#AD1A19] px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-lg md:text-xl w-full">
            Details
          </button></Link>
        </div>
      </div>
            </div>
            
            </div>)
        }
        
       </section>
       <div>
            <Link to='/allFoods'><button className='flex justify-center mx-auto mt-8 btn bg-[#AD1A19] text-xl font-bold font-barlow'>See All Food</button></Link>
        </div>
       </div>
            
            
    );
};

export default TopFood;