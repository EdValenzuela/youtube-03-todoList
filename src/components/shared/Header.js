import React from "react";

const Header = () => {
  return (
    <header className="body-font bg-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <span className="text-xl text-white">
          TodoList + contextAPI y useReducer
        </span>
      </div>
    </header>
  );
};

export default Header;
