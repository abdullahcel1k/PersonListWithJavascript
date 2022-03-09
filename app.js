let Person = {
  fullName: '',
  gender: 0,
  isMarried: false,
  birthDate: null
};

let persons = [];

const genderStyleChoice = {
  "1": "girl",
  "2": "boy",
  "3": "none"
};

const addPersonItemToHtml = (person) => {
  const personListEl = document.getElementById("personList");
  const personItemHtml = `<div
 class="col-8 offset-2 person shadow d-flex flex-row justify-content-around align-items-center mb-3 ${genderStyleChoice[person.gender]}"
>
 <h3>${person.fullName}</h3>
 <h3>${person.isMarried ? "Evli" : "Bekar"}</h3>
 <h3>${zodiacSelector(person.birthDate)}</h3>
</div>`;
  personListEl.insertAdjacentHTML("beforeend", personItemHtml);
};

const addPerson = () => {
  // input değerleri okunup objeye atandı
  let person = Object.create(Person);
  person.fullName = document.getElementById("fullName").value;
  person.gender = document.getElementById("gender").value;
  person.isMarried = document.getElementById("isMarried").checked;
  person.birthDate = document.getElementById("birthDate").value;
  
  // formu resetledik
  document.getElementById("personForm").reset();

  // okunan person persons listesine eklendi
  persons = [...persons, person]; // alternative :  persons.push(person);
  localStorage.setItem("persons", JSON.stringify(persons));

  addPersonItemToHtml(person);

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

const listPerson = () => {
  let personListLS = localStorage.getItem("persons");

  if (personListLS) {
    persons = JSON.parse(personListLS);

    persons.forEach(person => {
      addPersonItemToHtml(person);
    });
  }
};

listPerson();



