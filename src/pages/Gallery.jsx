const Gallery = () => {
  const items = [
    { id: 1, nombre: "Arce Japonés" },
    { id: 2, nombre: "Pino Negro" },
    { id: 3, nombre: "Ficus Retusa" },
    { id: 4, nombre: "Olmo Chino" },
    { id: 5, nombre: "Enebro" },
    { id: 6, nombre: "Azalea" },
  ];

  return (
    <main className="gallery-page">
      <div className="gallery-header">
        <h1>Nuestra Colección</h1>
        <p>Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.</p>
      </div>
      <div className="gallery-grid">
        {items.map((item) => (
          <div key={item.id} className="gallery-card">
            <div className="gallery-card-image"></div>
            <p>{item.nombre}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;