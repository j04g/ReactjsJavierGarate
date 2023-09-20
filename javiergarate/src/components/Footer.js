import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Contacto: contacto@andys.com</p>
        <p>Prensa</p>
        <p>Carrera</p>
        <p>Preguntas frecuentes</p>
        <p>Política de privacidad</p>
        <p>
          Hecho con ❤️ por Mi Tienda Online. Todos los derechos reservados &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
