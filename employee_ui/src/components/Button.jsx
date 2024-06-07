import React from 'react';

const Button = ({ name }) => {
  return (
    <button
      className="bg-blue-600 px-10 py-1 rounded-full  hover:scale-105 hover:-rotate-1 text-[18px]"
      role="button"
    >
      {name}
    </button>
  );
}

export default Button;
