const DestacadoSolo = ({ destacados }) => {
  return (
    <>
      <img
        id={destacados._id}
        className="img-fluid mb-2 px-4"
        style={{ height: "100%", width: "100%" }}
        src={destacados.imageLg}
        alt={destacados.altLg}
      />
    </>
  );
};

export default DestacadoSolo;
