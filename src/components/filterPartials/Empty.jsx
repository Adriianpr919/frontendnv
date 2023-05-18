import React from 'react';

import 'flowbite';

const Empty = () => {
  return (
    <div className='e-container'>
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span className="font-medium no-data" style={{ fontSize: "15px" }}>
          ¡.Actualmente NO Hay Productos.!
        </span>
      </div>
    </div>
  );
};

export default Empty;