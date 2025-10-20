fetch("https://abdelrahmanapis.duckdns.org/api/data")
  .then(res => res.json())
  .then(data => {
    console.log("API DATA:", data);
  })
  .catch(err => console.error(err));
