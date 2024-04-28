// // let lemparDadu = console.log(lemparDadu);
// function lemparDadu() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }
// return lemparDadu();

// function Food() {}
// const food = new Food();

// if (food.constructor.name === "Food") {
//   console.log("'food' is an instance of 'Food'");
// } else {
//   console.log("Oops!");
// }

function Username(name) {
  console.log(`Selamat datang ${name}`);
}
Username("FarhanHunter");

function AccountName(firstName, lastName) {
  const regex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    !regex.test(firstName) ||
    !regex.test(lastName)
  ) {
    return "Bukan String atau tidak mengandung angka atau simbol";
  }
  return firstName + lastName;
}

const fullName = AccountName("Farhan1", "Sapu!tra");
console.log(fullName); // Output: Farhan1Sapu!tra

function Password() {
  let fullName = "qwerty";
  console.log(fullName);
}
Password();
console.log(fullName);

function showLastName() {
  const lastName = "Adi Saputra";
  return lastName;
}

// Define another function:
function displayFullName() {
  const fullName = "Farhan " + showLastName();
  return fullName;
}

// Invoke displayFullName():
console.log(displayFullName());

// The invocation above will return:
// ("Oluwatobi Sofela");

function lamarKerja() {
  const jabatan = "Programmers";

  function orangDalam() {
    const kenalan = `Orang dalam bisa memasukan ${jabatan}`;
    console.log(kenalan);
  }
  orangDalam();
}
lamarKerja();

function turnTwice(func) {
  func();
  func();
}

function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
  console.log(result);
}

turnTwice(rollDice);

const myMath = {
  perkalian: function (x, y) {
    return x * y;
  },
  pembagian: function (x, y) {
    return x / y;
  },
  pangkat: function (x) {
    return x * x;
  },
};

const bioData = {
  name: "Sokrates",
  hobby: "Filsuf",
  quote: "Kematian bisa menjadi berkat terbaik bagi manusia.",
  kenalan: function () {
    return `Bruh, saya ${this.name}. Hobi saya adalah ${this.hobby} "${this.quote}"`;
  },
};

function teriak(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch (error) {
    console.log(error);
    console.log("Tolong masukan tipe data STRING pada argumen TERIAK");
  }
}
