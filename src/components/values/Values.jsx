import React from "react";
import Heading from "../heading/Heading";
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const value = [
    {
      id: 1,
      title: "Trust",
      para: "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaHeart />,
    },
    {
      id: 2,
      title: "Always Fresh",
      para: "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaLeaf />,
    },
    {
      id: 3,
      title: "Food Safety",
      para: "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "100% Organic",
      para: "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaSeedling />,
    },
  ];

  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading span="Our" text="Values" />

        <div className="flex md:flex-row flex-col gap-13 md:gap-6 mt-15"> 
          {/* left side */}
          <div className="md:min-h-100 gap-13 flex flex-col justify-between">
            {value.slice(0, 2).map((item) => (
              <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
                <div>
                  <span className="flex justify-center items-center text-3xl text-white bg-orange-400 w-15 h-15 rounded-full">{item.icon}</span>
                </div>

                <div className="md:text-right">
                  <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                  <p className="text-zinc-600 mt-2">{item.para}</p>
                </div>
              </div>
            ))}
          </div>

          {/* image */}
          <div className="md:flex w-1/2 hidden">
            <img src={Basket} alt="basket image" />
          </div>

          {/* right side */}
          <div className="md:min-h-100 gap-13 flex flex-col justify-between">
            {value.slice(2).map((item) => (
              <div key={item.id} className="flex items-center gap-7">
                <div>
                  <span className="flex justify-center items-center text-3xl text-white bg-orange-400 w-15 h-15 rounded-full">{item.icon}</span>
                </div>

                <div>
                  <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                  <p className="text-zinc-600 mt-2">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
