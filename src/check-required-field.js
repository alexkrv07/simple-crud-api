const { RequiredFildPerson } = require('./constants.js');


function checkRequiredField(person) {
  const iscorrectName = checkNamePerson(person[RequiredFildPerson.name]);
  const iscorrectAge = checkAgePerson(person[RequiredFildPerson.age]);
  const iscorrectHobbies = checkHobbiesPerson(person[RequiredFildPerson.hobbies]);

  return iscorrectName && iscorrectAge && iscorrectHobbies ;
}

function checkNamePerson(name) {
  if (!name || typeof name !== 'string') {
    return false;
  }
  return true;
}

function checkAgePerson(age) {
  if (!age || typeof age !== 'number') {
    return false;
  }
  return true;
}

function checkHobbiesPerson(hobbies) {
  if (!Array.isArray(hobbies)) {
    return false;
  }

  if (hobbies.length) {
    if (!hobbies.every(hobbi => typeof hobbi === 'string')) {
      return false;
    }
  }
  return true;
}

module.exports = { checkRequiredField };
