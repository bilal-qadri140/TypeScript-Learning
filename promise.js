const apiData = async () => {
  const res = await fetch("https://fakestoreapi.com/products/1");
    const json = await res.json();
    return json;
};

const myPromise = new Promise((resolve, reject) => {
    apiData().then((data) => {
        resolve(data)
    })
        .catch((err) => {
        reject(err)
    })
});

myPromise
    .then((msg) => {
      console.log(msg.id, " \nTitle is: ", msg.title);
  })
  .catch((err) => {
    console.log(err);
  });
