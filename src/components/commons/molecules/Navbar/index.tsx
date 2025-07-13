import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import BoxLanguege from "../../atoms/BoxLanguege";

const listNavbar = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Testimoni", path: "/testimoni" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [translate, setTranslate] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const sidebar = (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex h-full flex-col items-center justify-center px-4 py-8">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-xmark text-xl text-gray-800"></i>
          </button>
          {listNavbar.map((item, index) => (
            <p
              key={index}
              className="w-full cursor-pointer px-4 py-2 text-center text-lg font-semibold text-gray-800 hover:bg-gray-200"
              onClick={() => {
                setIsOpen(false);
                navigate(item.path);
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
      </aside>
    </>
  );

  return (
    <>
      <div className="flex items-center justify-end left-4 gap-4">
        <div className="flex items-center justify-between gap-2 rounded-full bg-gray-200 px-3 py-1">
          <span className="text-sm font-semibold text-gray-800">Menu</span>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 hover:opacity-90"
            onClick={() => setIsOpen(true)}>
            <i className="fa-solid fa-bars text-gray-800"></i>
          </button>
        </div>
        <BoxLanguege setTranslate={setTranslate} translate={translate} />
      </div>

      {ReactDOM.createPortal(sidebar, document.body)}
    </>
  );
};

export default Navbar;
