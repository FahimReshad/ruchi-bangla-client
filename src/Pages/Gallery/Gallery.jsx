import { useContext, useEffect, useState } from "react";
import GalleryTitle from "./GalleryTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import GalleryCard from "./GalleryCard";
import { toast } from "react-toastify";
import GalleryCards from "./GalleryCards";
import {  useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const {user, loading} = useContext(AuthContext);
  const navigate = useNavigate();
const location = useLocation();

  const handleGallery = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const feedback = form.feedback.value;
    const image = form.imageURL.value;  
    const gallery = {name, feedback, image}
    
    fetch("https://ruchi-bangla-server.vercel.app/gallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gallery),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
          toast.success('Thank you for your feedback')
        }
      });
    
      form.reset();
  }

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  if(!user){
    navigate('/login', {state: location.pathname})
  }

  if (loading) {
    return <div className="w-10 h-10">
       <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
         <span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
         <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
         <span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
         <span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
       </div>
     </div>;
   }


  return (
    <div>
      <Helmet><title>Ruchi Bangla || Gallery</title></Helmet>
      <GalleryTitle />
      
       <div className="w-1/2 mx-auto flex items-center justify-center mt-4">
       {/* Pay Button */}
       <button
         onClick={() => setOpenModal(true)}
         className="bg-red-700 font-bold text-white p-4 rounded-lg"
       >
         Add
       </button>
       
     </div>
      <div>
       <GalleryCards handleGallery={handleGallery} openModal={openModal} setOpenModal={setOpenModal} user={user}></GalleryCards> : 
      </div>
      
     
      <GalleryCard></GalleryCard>
    </div>
  );
};

export default Gallery;
