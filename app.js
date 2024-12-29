let arr = [1, 2, 3, 4, 5];
// let newArr = arr.filter((num) => num < 3)
let newArr = [];

arr.forEach((num) => {
  if (num > 2) {
    newArr.push(num);
  }
});
console.log(newArr);
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  {
    title: "Book Five",
    genre: "Science Fiction",
    publish: 2003,
    edition: 2015,
  },
  { title: "Book Six", genre: "Fiction", publish: 1977, edition: 1990 },
  { title: "Book Seven", genre: "Biography", publish: 1995, edition: 2001 },
  { title: "Book Eight", genre: "Mystery", publish: 1985, edition: 1999 },
  { title: "Book Nine", genre: "Adventure", publish: 2010, edition: 2020 },
  { title: "Book Ten", genre: "Drama", publish: 2000, edition: 2012 },
];
let selectedBooks = books.filter(
  (bk) => bk.publish > 1995 && bk.edition > 2000
);
console.log(selectedBooks);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myNums = nums
  .map((num) => num + 2)
  .filter((num) => num > 5)
  .map((num) => num + 5);
console.log(myNums);
let sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);
let courses = [
  {
    name: "html Css",
    price: 1200,
  },
  {
    name: "js",
    price: 2000,
  },
];

let totalBill = courses.reduce(
  (acc, item) => (
    console.log(`acc:${acc} and item:${JSON.stringify(item.price)}`),
    item.price + acc
  ),
  0
);
console.log(totalBill);

// Promises
let promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Complete");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 complete");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Task 2 Complete");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task 3");
    resolve({ username: "Salman", password: "123" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user.username);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Muhammad", pass: "123" });
    } else {
      reject("ERROR");
    }
  }, 1000);
});
promiseFour
  .then((data) => {
    console.log(data);
    return data.username;
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("successful"));
let promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Muhammad", pass: "123" });
    } else {
      reject("ERROR");
    }
  }, 1000);
});
async function consume() {
  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consume();

let array = ["Apple", "Mango", "Orange", "Banana"];
let [first, ali, salman] = array;
console.log(salman);

// XML
const reqUrl = "https://api.github.com/users/Salman9754";
let data;
let xhr = new XMLHttpRequest();
xhr.open("GET", reqUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    data = JSON.parse(this.response);
    console.log(data);
    let con = document.getElementById("container");
    con.innerHTML += `<img src="${data.avatar_url}" alt="">
        <div>Username: ${data.login} </div>
              <p>${data.bio} </p>
          `;
  }
};
xhr.send();
xhr.onreadystatechange();

// Weather Fetch Based on Coordinates
var latitude = 24.9215084;
var longitude = 67.0260878;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=244006e372fb520e56e50b3032f7bcf1&units=metric`;

new Promise((resolve, reject) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        resolve(response.json()); // Parse the JSON if the response is okay
      } else {
        reject("Failed to fetch weather data by coordinates.");
      }
    })
    .catch((error) => {
      reject("Error fetching data: " + error.message);
    });
})
  .then((data) => {
    console.log("Weather Data by Coordinates:", data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fetch by coordinates complete.");
  });


                     // Weather Fetch Based on City Name
let cityName = "faisalabad";
const citySearchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=244006e372fb520e56e50b3032f7bcf1&units=metric`;
let temperature = 0;

async function getWeather() {
  try {
    let response = await fetch(citySearchUrl);
    let data = await response.json();
    temperature = Math.round(data.main.temp);
    console.log(temperature);
    console.log(Math.round(data.main.humidity));
    console.log(data.wind.speed);
  } catch (error) {
    console.log(error);
  }
}
getWeather();
