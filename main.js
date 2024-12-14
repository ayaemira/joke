var Jokes = [
  {
    content: " مره واحد معاه عربيه بي ام صحي من النوم لقاها am",
  },
  {
    content: "مرة حمار بيقول لحمارة يا ترى بتحبيني لشخصي ولا علشان عندي عربية",
  },
  {
    content: "مرة اثنين ضربوا بعض .. بعض زعل منهم جداً.",
  },
  {
    content: "مره نجار عجبه بوست راح مشنيره",
  },
  {
    content: "مره نقاش بنته تعبت سنفرها برا.",
  },
  {
    content: "مره اخطبوط قاعد زعلان عشان مش عارف ايده من رجليه.",
  },
  {
    content: "مره صيدلانيه اغمى عليها عشان شافت فارماسي على الحيطه",
  },
  {
    content: "مره محامي معرفش يتغدى في البيت عشان كانو موكلينه قضيه.",
  },
];
function getRandomJoke() {
  var randomIndex = Math.floor(Math.random() * Jokes.length);
  var randomJokes = Jokes[randomIndex];

  console.log(randomJokes);

  document.getElementById("demo").innerHTML = randomJokes.content;
}
