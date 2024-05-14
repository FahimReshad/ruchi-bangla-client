import { useEffect, useState } from "react";

const GalleryCard = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      });
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-10">
      {gallery.map((gall, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden bg-slate-100/70 shadow-md"
        >
          {/* Card Image */}
          <img
            className="h-[300px] w-full object-cover rounded-t-2xl"
            src={gall.image}
            alt={gall.name}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="text-white text-center">
              <h2 className="text-lg font-bold">{gall.name}</h2>
              <p>{gall.feedback}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  
  );
};

export default GalleryCard;
