const Gallery = ({ image }) => {
  return (
    <>
      <img
        id={image._id}
        className="img-fluid mb-2 px-4" // se coloca padding por tamaño de img
        style={{ height: "100%", width: "100%" }}
        src={image.imageLg}
        alt={image.altLg}
      />
    </>
  );
};

export default Gallery;
