import React from "react";

const CardTask = ({item, i, handleDelete}) => {
  return (
    <li className="flex justify-between items-center my-10">
      <p className="text-2xl text-black">{i + 1} .- {item.name}</p>
      <button
        title="Borrar"
        onClick= {() => handleDelete(item.id)}
        className="text-white ml-5 bg-red-500 border-0 text-2xl py-2 px-6 focus:outline-none hover:bg-red-900 rounded"
      >
        Borrar
      </button>
    </li>
  );
};

export default CardTask;
