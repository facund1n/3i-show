const DestacadosComentarios = ({ data }) => {
  console.log("DATOS: ", data);
  return (
    <>
      <h2>Comentarios:</h2>
      {data.map((comentario, i) => (
        <div>{comentario.body}</div>
      ))}
      <hr />

      <hr />
    </>
  );
};

export default DestacadosComentarios;
