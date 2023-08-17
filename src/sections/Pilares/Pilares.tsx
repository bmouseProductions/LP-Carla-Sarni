import React from "react";

const Section = () => {
  return (
    <section className="flex flex-col md:flex-row bg-gradient-to-b from-blue-300 to-blue-500 p-8 items-center justify-center min-h-screen">
      {/* Pilares do Lado Esquerdo */}
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="relative bg-white shadow-lg rounded-lg p-6 mb-4 overflow-hidden card">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Pilar 1</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula fermentum libero.
          </p>
        </div>
        <div className="relative bg-white shadow-lg rounded-lg p-6 overflow-hidden">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Pilar 2</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula fermentum libero.
          </p>
          <div className="card-decoration"></div>
        </div>
      </div>

      {/* Pilares do Lado Direito */}
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="relative bg-white shadow-lg rounded-lg p-6 mb-4 overflow-hidden">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Pilar 3</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula fermentum libero.
          </p>
          <div className="card-decoration"></div>
        </div>
        <div className="relative bg-white shadow-lg rounded-lg p-6 overflow-hidden">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Pilar 4</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula fermentum libero.
          </p>
          <div className="card-decoration"></div>
        </div>
      </div>
    </section>
  );
};

export default Section;
