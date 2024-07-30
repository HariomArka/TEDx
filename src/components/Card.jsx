import React from 'react';

const Card = ({src,title,description}) => {
  return (
    <div className="max-w-sm mx-auto my-6 rounded-lg bg-transparent">
      <div className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-500 hover:scale-105">
        <img className="w-[100%] h-48 object-cover" src={src} alt="Card Image"/>
        <div className="p-6 border-2 border-gray-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-2 text-red-700 font-serif">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
