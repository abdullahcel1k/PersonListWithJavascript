let Person = {
 fullName: '',
 gender: 0,
 isMarried: false,
 birthDate: null
};

const genderStyleChoice = {
 "1": "girl",
 "2": "boy",
 "3": "none"
};

const zodiacSelector = (birthDate) => {
 let birth = new Date(birthDate);
 let result;
 switch (birth.getMonth() + 1) {
  case 1:
   result = "Ateş";
   break;
  case 2:
   result = "Su";
   break;
  case 3:
   result = "Toprak";
   break;
  case 4:
   result = "Hava";
   break;
  default:
   result = "Tahta";
   break;
 }

 return result;
}

const addPerson = () => {
 Person.fullName = document.getElementById("fullName").value;
 Person.gender = document.getElementById("gender").value;
 Person.isMarried = document.getElementById("isMarried").checked;
 Person.birthDate = document.getElementById("birthDate").value;
 document.getElementById("personForm").reset();

 const personListEl = document.getElementById("personList");
 const personItemHtml = `<div
 class="col-8 offset-2 person shadow d-flex flex-row justify-content-around align-items-center mb-3 ${genderStyleChoice[Person.gender]}"
>
 <h3>${Person.fullName}</h3>
 <h3>${Person.isMarried ? "Evli" : "Bekar"}</h3>
 <h3>${zodiacSelector(Person.birthDate)}</h3>
</div>`;
 personListEl.insertAdjacentHTML("beforeend", personItemHtml);
};