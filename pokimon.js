document.addEventListener("DOMContentLoaded", async () => {
  const lists = document.getElementById("lists");
  const lists_items = document.querySelectorAll("li");

  let pokiLists = JSON.parse(localStorage.getItem("pokiLists")) || [];
  let isStore = false;

  function storeOnLocalStorage(pokiLists) {
    localStorage.setItem("pokiLists", JSON.stringify(pokiLists));
    return true;
  }

  function getFromLoalstorage() {
    let pokiLists = JSON.parse(localStorage.getItem("pokiLists")) || [];
    console.log(pokiLists.length);
    return pokiLists;
  }

  let returnLi = (item, idx) => {
    let { id, name, abilities, height, weight } = item;

    let li = document.createElement("li");
    li.setAttribute("id", `${idx}`);
    li.setAttribute("value", `${name}`);
    let div = document.createElement("div");
    div.setAttribute("id", "poki__info");
    div.innerHTML = `
      <div id="name">Name: ${name}</div> 
      <h2 id="height">Height: ${height}</h2>  
      <h2 id="weight">Weight: ${weight}</h2>
      <p>My ability are: </p>
    `;

    abilities.forEach((value, key) => {
      let span = document.createElement("span");
      span.setAttribute("key", `${key}`);
      span.setAttribute("class", "ability");
      span.innerHTML = `${value.ability.name} <br >`;
      div.appendChild(span);
    });

    let div2 = document.createElement("div");
    div2.setAttribute("id", "poki__img");

    div2.innerHTML = `
      <div class="circle circle__secondary">${id}</div>
      <img class="image" src="${item.sprites.other.dream_world.front_default}" alt="" />
    `;

    li.appendChild(div);
    li.appendChild(div2);

    lists.appendChild(li);
  };

  if (!pokiLists || pokiLists.length === 0) {
    // data fetching
    let URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

    //fetch api from  poke api
    const pokeApiFun = async () => {
      try {
        let res = await fetch(URL);
        let data = await res.json(); // Use the json() method to extract JSON data
        console.log(data);

        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    const fetchByUrl = async (url) => {
      try {
        let pokiInfo = await fetch(`${url}`);
        let info = await pokiInfo.json();
        console.log(info);
        return info;
      } catch (error) {
        console.error("Error fetching data from fetchByUrl:", error);
        throw error;
      }
    };

    try {
      let data = await pokeApiFun();
      console.log("total Poki: ", data.results);

      if (data) {
        let lists = await Promise.all(
          data.results.map(async (result) => {
            let poki = await fetchByUrl(result.url);
            return poki;
          })
        );
        // pokiLists = [...pokiLists, ...lists];
        isStore = storeOnLocalStorage(lists);
        if (isStore) {
          pokiLists = await getFromLoalstorage();
          console.log(">>>>>>>>>>>>>>>>>", pokiLists);
          pokiLists.forEach((item, idx) => {
            returnLi(item, idx);
          });
        }
      }
    } catch (err) {
      console.log("ERROR:::", err);
    }
  } else {
    pokiLists.forEach((item, idx) => {
      returnLi(item, idx);
    });

    pokiIdInput.addEventListener("change", async (e) => {
      e.preventDefault();
      console.log(pokiIdInput.value);
    });
  }
});
