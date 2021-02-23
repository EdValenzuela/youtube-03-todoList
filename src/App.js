
import { useContext } from "react";
import Header from "./components/shared/Header";
import AddTask from "./components/Task/AddTask";
import CardMessage from "./components/Task/CardMessage";
import CardTask from "./components/Task/CardTask";
import TodoListContext from "./context/TodoListContext";

const App = () => {

  const { data, handleAdd, handleDelete } = useContext(TodoListContext);
  console.log(data);

  return (
    <>
      <Header />
      <h1 className="w-full mt-5 border-b-2 border-gray-200 mb-5 pb-5 text-center text-4xl">
        List of tasks{" "}
        <span className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-white text-2xl font-bold">
          {data.length}
        </span>
      </h1>
      <div className="flex justify-around items-center lg:items-start h-auto flex-col lg:flex-row px-10">
        <ul className="mb-10">
          {/* <CardTask /> */}
          {
            data.length > 0 ? (
              data.map( (item, i) => (
                <CardTask key={item.id} item={item} i={i} handleDelete={handleDelete}/>
              ))
            ): (
              <CardMessage message="No hay tareas !!!"/>
            )
          }
        </ul>
        <div>
          <AddTask handleAdd={handleAdd} />
        </div>
      </div>
    </>
  );
};

export default App;
