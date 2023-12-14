function ageDifference(familyMembers) {  
    let oldestAge = familyMembers[0].age;
    let youngestAge = familyMembers[0].age;
  
    for (let i = 1; i < familyMembers.length; i++) {
      const currentAge = familyMembers[i].age;
      if (currentAge > oldestAge) {
        oldestAge = currentAge;
      } else if (currentAge < youngestAge) {
        youngestAge = currentAge;
      }
    }
  
    return [youngestAge, oldestAge, oldestAge - youngestAge]
  }
  
  const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
    age: 56,
    },
    {
      name: "Rachel",
     age: 45,
    },
    {
      name: "Nate",
    age: 67,
    },
    {
    name: "Jennifer",
    age: 65,
    },
  ]

  console.log(ageDifference(input))