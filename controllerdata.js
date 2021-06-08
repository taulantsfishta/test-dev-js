const getData = require("./data");

const checkTheArgsParam = (param = "") => {
  if (param.search("--filter") > -1) {
    console.log(param, "param");

    return filterDataByPattern(param);
  } else if (param.search("--count") > -1) {
    return countData();
  } else {
    console.log("No Data Found");
    return "No Data FoundD";
  }
};

const filterDataByPattern = async (filterparam = "") => {
  const patern = filterparam.split("=").pop();
  console.log(patern, "patern");
  if (patern.length == 2) {
    let newData = new Array();
    await getData.data.forEach((value, key) => {
      let countries = value.name;
      let people = value.people;
      let peopleArr = new Array();
      people.forEach((value_people, key_people) => {
        let people = value_people.name;
        let animals = value_people.animals;
        let animalArr = new Array();
        animals.forEach((value_animal, key_animals) => {
          let animal = value_animal.name;
          if (animal.search(patern) > -1) {
            // console.log(countries, people);
            animalArr.push({ name: animal });
          }
        });
        if (Object.keys(animalArr).length > 0) {
          peopleArr.push({ name: people, animals: animalArr });
        }
      });
      if (Object.keys(peopleArr).length > 0) {
        newData.push({ name: countries, people: peopleArr });
      }
    });
    if (!(Object.keys(newData).length > 0)) {
      console.log("No Data Found");
      return "No Data Found";
    }
    console.log(JSON.stringify(newData, null, 4));
    return JSON.stringify(newData);
  } else {
    console.log("No Data Found");
    return "No Data Found";
  }
};

const countData = async () => {
  let newData = new Array();
  await getData.data.forEach((value, key) => {
    let countries = value.name + "[" + value.people.length + "]";
    let people = value.people;
    let peopleArr = new Array();
    let person;
    people.forEach((value_people, key_people) => {
      person = value_people.name + "[" + value_people.animals.length + "]";
      peopleArr.push({ name: person, animals: value_people.animals });
    });
    newData.push({
      name: countries,
      people: peopleArr,
    });
  });
  // console.log(JSON.stringify(newData, null, 4));
  return JSON.stringify(newData);
};

module.exports = { checkTheArgsParam };
