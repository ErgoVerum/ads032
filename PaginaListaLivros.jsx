import React from "react";
import "./CSS/Main.css";

function ListaLivros() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="index.html">Biblioteca Virtual</a>
          <img
            src="./Images/LivroBG.png"
            alt="your image description"
            className="image-class"
          />
        </div>
        <nav>
          <ul>
            <li>
              <a href="minhas_reservas.html">Minhas Reservas</a>
            </li>
          </ul>
        </nav>
        <form className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Buscar</button>
        </form>
        <nav>
          <ul>
            <li>
              <a href="index.html">Retornar ao Inicio</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="LivrosGrupo">
        <div className="LivrosVenda">
          <img
            src="./Images/TryTach.jpg"
            alt="Imagem"
            className="image-class"
          />
          <h3>Titulo do Livro</h3>
          <button className="Botao">Ler mais</button>
        </div>
        <div className="LivrosVenda">
          <img
            src="./Images/TryTach.jpg"
            alt="Imagem"
            className="image-class"
          />
          <h3>Titulo do Livro</h3>
          <button className="Botao">Ler mais</button>
        </div>
        <div className="LivrosVenda">
          <img
            src="./Images/TryTach.jpg"
            alt="Imagem"
            className="image-class"
          />
          <h3>Titulo do Livro</h3>
          <button className="Botao">Ler mais</button>
        </div>
      </div>
    </>
  );
}

export default ListaLivros;
