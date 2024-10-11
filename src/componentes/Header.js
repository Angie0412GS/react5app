import React from 'react';

const Header = () => {
  return (
    <div className="min-h-screen bg-cover bg-fixed" style={{ backgroundImage: 'url(/Imagenes/fondo.jpg)' }}>
      <header className="bg-orange-600 h-24 p-3 flex justify-between items-center">
        <img id="Img1" src="/Img/logo1.png" alt="Logo 1" className="w-20 h-20 float-left" />
        <img id="Img2" src="/Img/logo2.png" alt="Logo 2" className="w-20 h-20 float-right" />
      </header>

      <nav className="bg-green-500">
        <ul className="menu flex justify-around list-none m-0 p-0">
          <li className="text-center">
            <a href="#" className="text-white px-6 py-4 hover:bg-pink-500 text-sm">Inicio</a>
          </li>
          <li className="text-center">
            <a href="#" className="text-white px-6 py-4 hover:bg-pink-500 text-sm">Sobre</a>
          </li>
          <li className="text-center">
            <a href="#" className="text-white px-6 py-4 hover:bg-pink-500 text-sm">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
