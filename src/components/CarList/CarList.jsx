import React from "react";
import whiteCar from "../../assets/image.png";
import car2 from "../../assets/image2.png";
import car3 from "../../assets/image3.png";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24" id="cars">
      <div className="container">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
          Available Cars
        </h1>
        <p className="text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data, index) => (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg"
                key={index}
              >
                <img
                  className="w-full object-cover h-[200px]"
                  src={data.image}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{data.name}</div>
                  <p className="text-gray-700 text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button className="button-outline">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
