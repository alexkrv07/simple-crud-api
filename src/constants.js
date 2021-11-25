const Separator = '/';
const Person = 'person';
const Port = 3000;
const PatternUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MaxLenthParsedPath = 2;
const Method = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
}

const RequiredFildPerson = {
  name: 'name',
  age: 'age',
  hobbies: 'hobbies'
}

module.exports = { Separator, Person, Port, Method, PatternUUID, MaxLenthParsedPath, RequiredFildPerson };
