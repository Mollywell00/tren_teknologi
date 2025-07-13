import React from "react";
import RoundedImg from "../RoundedImg";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="fixed top-1/2 left-1/2 z-50 w-[420px] max-md:w-[90%] max-sm:w-full -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300"
      >
        {/* Tombol Close */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark" />
        </button>

        {/* Gambar */}
        {data.background && (
          <img
            src={data.background}
            alt="Avatar"
            className="h-48 w-full object-cover"
          />
        )}

        {/* Konten */}
        <div className="relative p-5 text-left text-gray-800">
          <h2 className="mb-2 text-xl font-bold">{data.title}</h2>
          <p className="text-sm">{data.desc}</p>

          {/* Logo (institusi/tech) */}
          {data.list_tech && (
            <div className="absolute -top-5 right-4 z-10 flex space-x-2">
              {data.list_tech.map((item, index) => (
                <RoundedImg key={index} src={item.icon} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
