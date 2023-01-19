import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const listHome = [
    {
      titulo: "React",
      img: "../assets/img/react.jpg",
      to: "/blog",
    },
    {
      titulo: "Vue",
      img: "../assets/img/vue.png",
      to: "/blog",
    },
    {
      titulo: "Angular",
      img: "../assets/img/angular.png",
      to: "/blog",
    },
  ];
  return (
    <div>
      <h1 className="fs-1 text-center my-4">Home</h1>
      <div
        className=" d-flex justify-content-between"
        style={{ padding: "5vw" }}
      >
        {listHome.map((item, index) => {
          return (
            <div
              className="card d-flex  align-items-center"
              key={index}
              style={{ width: "20vw" }}
            >
              <div className="card-body">
                <h3 className="card-title border-bottom">{item.titulo}</h3>
              </div>
              <img
                src={item.img}
                className="card-img-top"
                alt="..."
                style={{ width: "18vw", height: "16vw" }}
              />
              <div className="card-body ">
                <button className="btn btn-success">
                  <Link
                    to={item.to}
                    className="text-white text-decoration-none"
                  >
                    Leer mas sobre {item.titulo}
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
