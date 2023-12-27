// document.addEventListener("DOMContentLoaded", async () => {
//   //   alert("Pokiman");

//   // data fetching
//   let URL = "https://pokeapi.co/api/v2/pokemon/1";

//   //fetch api from  poke api
//   const pokeApiFun = async () => {
//     try {
//       let res = await fetch(URL);
//       let data = await res.json(); // Use the json() method to extract JSON data
//       console.log(data);

//       return data;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       throw error;
//     }
//   };

//   try {
//     let pokiApi = await pokeApiFun();

//     if (pokiApi) {
//       let { abilities, height, weight } = pokiApi;
//       console.log(abilities, height, weight);

//       //document get
//       const name = document.getElementById("name");
//       const h = document.getElementById("height");
//       const w = document.getElementById("weight");
//       const image = document.getElementsByClassName("image")[0];
//       const ability = document.getElementById("ability");

//       name.innerHTML = `Name: ${pokiApi.name}`;
//       h.innerHTML = `Height: ${height}`;
//       w.innerHTML = `Weight: ${weight} `;
//       image.src = pokiApi.sprites.other.dream_world.front_default;
//       abilities.forEach((value, key) => {
//         let li = document.createElement("li");
//         li.setAttribute("key", `${key}`);
//         li.innerHTML = value.ability.name;
//         ability.appendChild(li);
//       });

//       //

//       //
//     } else {
//       //

//       //
//       image.src = "";
//       image.alt = "Loading...";
//     }
//   } catch (err) {
//     console.log("ERROR IN DATA FETCHING: ", err);
//   }

//   let inputId;

//   pokiIdInput.addEventListener("change", async (e) => {
//     inputId = e.target.value;
//     console.log(inputId);
//     URL = `https://pokeapi.co/api/v2/pokemon/${inputId}`;
//     console.log(URL);
//     await pokeApiFun();
//   });
// });
