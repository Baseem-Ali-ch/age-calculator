const dobInput = document.getElementById("DOB");

dobInput.addEventListener("input", function (e) {
  let input = e.target.value;
  input = input.replace(/\D/g, "");

  if (input.length >= 5) {
    input =
      input.substring(0, 2) +
      "/" +
      input.substring(2, 4) +
      "/" +
      input.substring(4, 8);
  } else if (input.length >= 3) {
    input = input.substring(0, 2) + "/" + input.substring(2, 4);
  }

  e.target.value = input;
});

let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const Age = document.getElementById("age");
let today = new Date();
currDate.innerText = `Today's Date is: ${today.toLocaleDateString("en-US")}`;

CalcAge.addEventListener("click", () => {
  let dobValue = dateOfBirth.value;

  let parts = dobValue.split("/");
  if (parts.length !== 3) {
    alert("Please enter a valid date in DD/MM/YYYY format!");
    return;
  }

  let day = parseInt(parts[0], 10);
  let month = parseInt(parts[1], 10) - 1;
  let year = parseInt(parts[2], 10);

  let birthDate = new Date(year, month, day);

  if (isNaN(birthDate.getTime())) {
    alert("Please enter a valid date!");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Please enter a valid month (1-12)!");
    return;
  }

  if (birthDate.getFullYear() > today.getFullYear()) {
    alert("Please enter valid year!");
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
  }

  Age.innerText = `You are ${age} years old.`;
});
