import React from "react";
import {to_do} from './App';

function handleChange(e) {
    let todo_search = [];
    let search_value = document.getElementById("search").value;

    for (var i = 0; i < to_do.length; i++) {
      var element = document.getElementById(to_do[i][0].toString());
      element.style.display = "none";
    }

    for (var index = 0; index < to_do.length; index++) {
      if (to_do[index][1].toUpperCase().includes(search_value.toUpperCase())) {
        todo_search.push(to_do[index]);
      }
      if (to_do[index][2].toUpperCase().includes(search_value.toUpperCase())) {
        todo_search.push(to_do[index]);
      }
      if (to_do[index][3].toUpperCase().includes(search_value.toUpperCase())) {
        todo_search.push(to_do[index]);
      }
      for (var tag = 0; tag < to_do[index][4].length; tag++) {
        if (to_do[index][4][tag].toUpperCase().includes(search_value.toUpperCase())) {
          todo_search.push(to_do[index]);
        }
      }
    }

    for (var index_id = 0; index_id < todo_search.length; index_id++) {
      var div_elemtn = document.getElementById(todo_search[index_id][0].toString());
      div_elemtn.style.display = "block";
    }
}

function Header() {
  return (
    <div className="w-full fixed bg-gray-600 z-40">
      <div className="w-full absolute top-0 bg-gray-800">
        <form className="w-full">
          <div className="w-full flex items-end border-b border-b-2 border-teal-500 py-3">
            <div className="text-gray-700 text-center w-15 mx-6">
              <img src="https://raw.githubusercontent.com/JosephRangel/search-app/master/public/lighthouse.png" alt="Smiley face" height="42" width="42"></img>
            </div>
            <input id="search" className="xl:w-1/4 md:w-3/6 sm:w-3/6 ml-6 rounded p-2 text-gray-700" type="search" placeholder="Search..." autoComplete="off" onChange={handleChange}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
