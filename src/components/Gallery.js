import React, {useState,useEffect} from "react";
import "./Gallery.css";
function Gallery() {
  
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages=()=>{
      const data = [
        {
          id: 1,
          url: "https://picsum.photos/id/13/367/267",
          title: "Image1",
        },
        {
          id: 2,
          url: "https://picsum.photos/id/106/367/267",
          title: "Image2",
        },
        {
          id: 3,
          url: "https://picsum.photos/id/110/367/267",
          title: "Image3",
        },
        {
          id: 4,
          url: "https://picsum.photos/id/119/367/267",
          title: "Image4",
        },
        {
          id: 5,
          url: "https://picsum.photos/id/102/367/267",
          title: "Image5",
        },
      ]
      setImages(data)
    }
   fetchImages();
  
  }, [])
  
const handleDeleteImage=(id)=>{
  setImages(images.filter((image)=>image.id!==id))
}
    

  return (
    <div>
      <h1 className="title">Image Gallery App</h1>
      {images.length>0?
      (
        <div className="image-grid">
        {
          images.map((image)=>(
            <div className="image-card" key={image.id}>
          <img src={image.url} alt="" />
          <div className="image-details">
            <h3>{image.title}</h3>
            <button onClick={()=>handleDeleteImage(image.id)}>Delete</button>
          </div>
        </div>
          ))
          
        }
        
      </div>
      ):
      <p className="no-images">No Images found</p>
      }
      
    </div>
  );
}

export default Gallery;
