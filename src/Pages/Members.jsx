import React from "react";
import { Link } from "react-router-dom";

const Members = () => {
  const eacCountries = [
    {
      name: "Kenya",
      flag: "/img/kenya.png",
      description: "Kenya is a country in East Africa with a rich agricultural heritage, producing crops like tea, coffee, and maize."
    },
    {
      name: "Uganda",
      flag: "/img/uganda.png",
      description: "Uganda is known for its fertile soils and favorable climate, making it ideal for growing coffee, bananas, and maize."
    },
    {
      name: "Tanzania",
      flag: "/img/Tanzania.webp",
      description: "Tanzania's agriculture is diverse, with major crops including maize, rice, and cassava."
    },
    {
      name: "Rwanda",
      flag: "/img/Rwanda.png",
      description: "Rwanda's agriculture focuses on coffee, tea, and a variety of staple crops such as beans and maize."
    },
    {
      name: "Burundi",
      flag: "/img/burundi.png",
      description: "Burundi is primarily an agricultural country, growing coffee, tea, and various staple crops like cassava and maize."
    },
    {
      name: "South Sudan",
      flag: "/img/south-sudan.jpg",
      description: "South Sudan has significant agricultural potential, with a focus on sorghum, maize, and rice."
    },
    {
      name: "DR Congo",
      flag: "/img/congo.webp",
      description: "The Democratic Republic of the Congo is rich in agricultural resources, producing maize, rice, and cassava."
    }
  ];

  return (
    <div id="members" className="flex flex-col items-center justify-center min-h-screen w-full py-20">
      <h1 className="text-3xl font-bold mb-8 pt-5">East African Community Members</h1>
      <div className="flex flex-wrap justify-center gap-10 lg:px-40 md:px-20 sm:px-5">
        {eacCountries.map((country, index) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-md shadow-slate-400 p-5 h-auto gap-4 w-[46vh] justify-center"
          >
            <img src={country.flag} alt={`${country.name} flag`} className="h-20 w-32 object-cover" />
            <p className="text-2xl font-bold">{country.name}</p>
            <p className="text-center">{country.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
