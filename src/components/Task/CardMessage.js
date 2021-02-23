import React from "react";

const CardMessage = ({message}) => {
  return (
    <div className="bg-red-500 px-5 py-3 rounded-md border-red-700 border-2">
      <p className="text-white text-2xl lowercase text-center">
        {message}
      </p>
    </div>
  );
};

export default CardMessage;
