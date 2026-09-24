import photo1 from "../../assets/images/home-about-image.jpg";
import photo2 from "../../assets/images/benefits-card-1.jpg";
import photo3 from "../../assets/images/home-clients-image-1.jpg";
import photo4 from "../../assets/images/benefits-card-2.jpg";
import photo5 from "../../assets/images/benefits-card-3.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5];

function PhotoGallery() {
  return (
    <div className="w-full flex">
      {photos.map((photo, i) => (
        <div key={i} className="flex-1 aspect-square overflow-hidden">
          <img
            src={photo}
            alt=""
            className="w-full h-full object-cover hover:scale-105 
            transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
