const http = require('http');
const { v4: uuidv4 } = require('uuid');
const { Separator, Person, Port, Method, MaxLenthParsedPath } = require('./src/constants.js');
const { checkvalidityUIID } = require('./src/check-valid-uiid.js');
const { checkRequiredField } = require('./src/check-required-field.js');

const PORT = process.env.PORT || Port;
const host = 'localhost';

const persons = [];

const requestListener = function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  const pathArray = req.url.split(Separator).splice(1);

  if (pathArray.length > MaxLenthParsedPath) {
    res.writeHead(404);
    res.end(JSON.stringify({error: `Path:  ${req.url} is not exist`}));
  }

  const endpoint = pathArray[0];
  const id = pathArray[1];
  switch (endpoint) {
    case Person:
      // console.log("in case");

      // if (!!id) {
      //   if (!checkvalidityUIID(id)) {
      //     res.writeHead(400);
      //     console.log(id);
      //     res.end(JSON.stringify({error: `Person id = "${id}" is not valid`}));
      //     return;
      //   }
      // }

      // const currentPerson = persons.filter(person => person.id === id);

      // if (!currentPerson.length) {
      //   res.writeHead(404);
      //   res.end(JSON.stringify({error: `Person with id = "${id}" not found`}));
      //   return;
      // }

      // const curentIndex = persons.indexOf(currentPerson);

      switch (req.method) {
        case Method.get:
          if (!id) {
            res.writeHead(200);
            res.end(JSON.stringify(persons));
          } else {
            res.writeHead(200);
            res.end(JSON.stringify(currentPerson));
          }
          break;
        case Method.post:
          let body = '';

          req.on('data', function (chunk) {
            body += chunk;
          });

          req.on('end', function () {
            if(body) {
              const postPerson = JSON.parse(body);
              console.log(postPerson);
              if (!checkRequiredField(postPerson)) {
                res.writeHead(400);
                res.end(JSON.stringify({error: `Required fields of person are not valid or non-exist`}));
                return;
              }
              postPerson.id = uuidv4();
              persons.push(postPerson);
              res.writeHead(201);
              res.end(JSON.stringify(postPerson));
            }
          });

          break;
        case Method.put:
          let bodyput = '';

          req.on('data', function (chunk) {
            bodyput += chunk;
          });

          req.on('end', function () {
            if(bodyput) {
              const putPerson = JSON.parse(bodyput);
              if (!checkRequiredField(putPerson)) {
                res.writeHead(400);
                res.end(JSON.stringify({error: `Required fields of person are not valid or non-exist`}));
              }
              putPerson.id = id;
              persons[curentIndex] = putPerson;
              res.writeHead(200);
              res.end(JSON.stringify(putPerson));
            }
          });

          break;
        case Method.delete:
          persons.splice(curentIndex, 1);
          res.writeHead(204);
          res.end(JSON.stringify(putPerson));
          break;
        default:
          break;
      }
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({error: "Resource not found"}));
  }
};

const server = http.createServer(requestListener);
server.listen(PORT, host, () => {
  console.log(`Server is running on http://${host}:${PORT}`);
});
