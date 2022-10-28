fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json =>
    json.forEach((e) => {
        console.log(e);
    })
  );