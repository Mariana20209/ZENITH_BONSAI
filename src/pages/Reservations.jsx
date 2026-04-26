const Reservations = () => {
  return (
    <main className="content-section">
      <h1>Reserva un Taller</h1>
      <p>Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.</p>

      <div className="form-container">
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input type="text" id="name" name="name" required placeholder="Ej. Ana Silva" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required placeholder="tu@email.com" />
        </div>

        <div className="form-group">
          <label htmlFor="level">Nivel de experiencia</label>
          <select id="level" name="level">
            <option value="beginner">Principiante (Nunca he tenido un Bonsái)</option>
            <option value="intermediate">Intermedio (Tengo algunos árboles)</option>
            <option value="advanced">Avanzado (Busco perfeccionar técnicas)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje (Opcional)</label>
          <textarea id="message" name="message" rows="4" placeholder="¿Qué te gustaría aprender?" />
        </div>

        <button type="submit" className="btn btn-block">Enviar Solicitud</button>
      </div>
    </main>
  );
};

export default Reservations;