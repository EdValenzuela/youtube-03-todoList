import React, { useState } from "react";
import CardMessage from "./CardMessage";

const AddTask = ({handleAdd}) => {

    const [nameTask, setNameTask] = useState('');
    const [errorForm, setErrorForm] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if(!nameTask){
            setErrorForm(true);
            return;
        }
        setErrorForm(false);

        const newTask = {
            id: new Date().getTime(),
            name: nameTask
        };

        handleAdd(newTask);
        setNameTask('');

    }



  return (
    <>
      <h1 className="text-2xl text-black">Agregar tarea</h1>
      <br />
      <form onSubmit={handleSubmit} >
        <input
          className="w-full bg-white rounded border border-gray-300 focus:ring-2 text-2xl focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="Nombre de la tarea"
          autoComplete="off"
          name="nameTask"
          value={nameTask}
          onChange={ (e) => setNameTask(e.target.value) }
        />
        <button
          type="submit"
          title="Agregar"
          className="w-full text-white my-5 bg-green-500 border-0 text-2xl py-2 px-6 focus:outline-none hover:bg-green-900 rounded"
        >
          Agregar
        </button>
      </form>
      {
          errorForm && (
              <CardMessage message="Escriba una tarea !!!" />
          )
      }
    </>
  );
};

export default AddTask;
