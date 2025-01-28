/**
 * Function that greets a person
 * @param firstname First name
 * @param lastname Last name
 */

export const greeting = (firstname: string, lastname: string) => {
<<<<<<< HEAD
    console.log(`Hei hei ${firstname} ${lastname}`);
  };
  
  const people = [
    { firstname: "Magnus", lastname: "Magnusson" },
=======
    console.log(`Hello ${firstname} ${lastname}`);
  };
  
  const people = [
    { firstname: "Arne", lastname: "Arnesen" },
    { firstname: "Magnus", lastname: "Magnusson" },
    { firstname: "Siri", lastname: "Sirisen" },
>>>>>>> feature-branch-3
    { firstname: "Stefan", lastname: "Stefanson" },
  ];
  
  export const greetTheGang = () => {
    people.forEach((person) => {
      greeting(person.firstname, person.lastname);
    });
  };