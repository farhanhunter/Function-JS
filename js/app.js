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

// function Username(name) {
//   console.log(`Selamat datang ${name}`);
// }
// Username("FarhanHunter");

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
