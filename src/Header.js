import React from "react";
import {to_do} from './App';

function handleChange(e) {
    let todo_search = [];
    let search_value = document.getElementById("search").value;

    for (var i = 0; i < to_do.length; i++) {
      var element = document.getElementById(to_do[i][0].toString());
      element.style.display = "none";
    }

    for (var i = 0; i < to_do.length; i++) {
      if (to_do[i][1].toUpperCase().includes(search_value.toUpperCase())) {
        todo_search.push(to_do[i]);
      }
      if (to_do[i][2].toUpperCase().includes(search_value.toUpperCase())) {
        todo_search.push(to_do[i]);
      }
      if (to_do[i][3].toUpperCase().includes(search_value.toUpperCase())) {
        todo_search.push(to_do[i]);
      }
      for (var tag = 0; tag < to_do[i][4].length; tag++) {
        if (to_do[i][4][tag].toUpperCase().includes(search_value.toUpperCase())) {
          todo_search.push(to_do[i]);
        }
      }
    }

    for (var i = 0; i < todo_search.length; i++) {
      var element = document.getElementById(todo_search[i][0].toString());
      element.style.display = "block";
    }
}

function Header() {
  return (
    <div class="w-full fixed bg-gray-600 z-40">
      <div class="w-full absolute top-0 bg-gray-800">
        <form class="w-full">
          <div class="w-full flex items-end border-b border-b-2 border-teal-500 py-3">
            <div class="text-gray-700 text-center w-15 mx-6">
              <img src={window.location.origin + '/lighthouse.png'} alt="Smiley face" height="42" width="42"></img>
            </div>
            <input id="search" class="xl:w-1/4 md:w-3/6 sm:w-3/6 ml-6 rounded p-2 text-gray-700" type="search" placeholder="Search..." autocomplete="off" onChange={handleChange}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
