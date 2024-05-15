import { useContext, useEffect, useState } from "react";
import GalleryTitle from "./GalleryTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import GalleryCard from "./GalleryCard";
import { toast } from "react-toastify";
import GalleryCards from "./GalleryCards";
import {  useLocation, useNavigate } from "react-router-dom";


const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
const location = useLocation();

  const handleGallery = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const feedback = form.feedback.value;
    const image = form.imageURL.value;  
    const gallery = {name, feedback, image}
    console.log(name, feedback, image);
    
    fetch("http://localhost:5000/gallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gallery),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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


  return (
    <div>
      <GalleryTitle />
      
       <div className="w-1/2 mx-auto flex items-center justify-center">
       {/* Pay Button */}
       <button
         onClick={() => setOpenModal(true)}
         className="bg-black text-white p-2 rounded-lg"
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
