const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.forEach(function (element) {
  if (element % 2 === 0) {
    console.log(element);
  }
});

const animes = [
  {
    title: "Dragon Ball Kai",
    rating: 92,
  },
  {
    title: "Dragon Ball Z",
    rating: 94,
  },
  {
    title: "Dragon Ball Super",
    rating: 95,
  },
  {
    title: "Naruto",
    rating: 95,
  },
  {
    title: "One Piece",
    rating: 96,
  },
  {
    title: "Bleach",
    rating: 96,
  },
  {
    title: "Berserk",
    rating: 90,
  },
];

animes.forEach(function (anime) {
  console.log(`${anime.title} - ${anime.rating}/100`);
});
