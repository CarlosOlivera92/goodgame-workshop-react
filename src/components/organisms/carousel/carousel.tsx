import { useState } from "react";
import './styles.css';
import ImageMolecule from "../../molecules/image-molecule/image";
import CarouselControllers from "../../molecules/caroussel-controllers/controllers";

const Carousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex];

  const selectNewImage = (index, images, next = true) => {
    const nextIndex = next ? index + 1 : index - 1;
    const lastIndex = images.length - 1;

    if (nextIndex > lastIndex) {
      setSelectedIndex(0);
    } else if (nextIndex < 0) {
      setSelectedIndex(lastIndex);
    } else {
      setSelectedIndex(nextIndex);
    }
  };

  const handleNext = () => {
    selectNewImage(selectedIndex, images);
  };

  const handlePrevious = () => {
    selectNewImage(selectedIndex, images, false);
  };

  return (
    <div className="hero container-fluid">
      <ImageMolecule src={selectedImage} alt={"default"}/>
      <CarouselControllers
        onPrevious={handlePrevious}
        onNext={handleNext}
        classname={"action-buttons"}
      />
    </div>
  );
};

export default Carousel;
