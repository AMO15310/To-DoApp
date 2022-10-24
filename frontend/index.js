// const { json } = require("express");

// SELECT THE INPUTS FIELDS
let title = document.querySelector(".title");
const activitydiv = document.querySelector(".activ");
let description = document.querySelector(".descr");
let date = document.querySelector(".date");
// SELECT BUTTONS
let addBtn = document.querySelector(".add-btn");
const icon = document.querySelector("#icon");
// const info = document.querySelector(".info");
// VALIDATE THE TEXT INPUTS
const validate = () => {
  console.log(title.value, description.value, date.value);
  if (!title.value || !description.value || !date.value) {
    alert("Fill all the fields");
    return false;
  } else {
    postAct();
  }
};
// CLEAR SCREEN AFTER DATA POSTING
const clearScreen = () => {
  (title.value = ""), (description.value = ""), (date.value = "");
};

// ADD EVENT LISTENER TO THE ADD BUTTON
addBtn.addEventListener("click", () => {
  validate();
  // postAct();
  clearScreen();
  //   alert("clicked");
});
// MAKE AN OBJECT FOR THE INPUT DATA

// ICON DELETE
const iconDel = (id) => {
  console.log(id);
  activitydiv.classList = "icon-line";
};
//  DELETE BUTTON FUNCTION
const buttonDel = (id) => {
  deleteAct(id);
  // console.log(id);
};

// GET DATA FROM THE DB
const getActivities = () => {
  fetch("http://localhost:2280/activities")
    .then((res) => res.json())
    .then((activities) => {
      console.log(activities);
      activities.forEach((element) => {
        activitydiv.innerHTML += `
        
        <hr> <br>
        <td><span>Title: </span>${element.title}</td><br>
        <td><span>Description: </span>${element.description}</td><br>
        <td><span>Due Date: </span>${element.duedate}</td><br>
        <i id="icon" class="fa-solid fa-trash" onclick="iconDel('${element.id}')"></i>
        <button class="delbtn" onclick="buttonDel('${element.id}')">DELETE</button><br>
        <hr> <br>
        
        
        `;
      });
    });
};
// setInterval(getActivities, 3000);
getActivities();

//POST ACTIVITIES TO THE DB
const postAct = async () => {
  const inpData = {
    title: title.value,
    description: description.value,
    duedate: date.value,
  };
  fetch("http://localhost:2280/activity", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ ...inpData }),
  })
    .then((response) => response.json())
    .then((msg) => {
      console.log(msg);
    });
};
// CREATE A DELETE FUNCTION
const deleteAct = (id) => {
  console.log(id);
  fetch("http://localhost:2280/activity/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((err) => {
      console.log(err);
    });
};
