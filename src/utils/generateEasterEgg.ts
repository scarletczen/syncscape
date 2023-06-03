export function generateEasterEgg() {
  let style =
    "font-size: 24px;" +
    "background: #67b26f; /* fallback for old browsers */" +
    "background: -webkit-linear-gradient(to right, #67b26f, #4ca2cd); /* Chrome 10-25, Safari 5.1-6 */" +
    "background: linear-gradient(to right, #67b26f, #4ca2cd); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */" +
    "color: white;" +
    "text-align: center;" +
    "padding: 10px 15px;" +
    "width: 100%;" +
    "border-radius: 20px;";

  let text =
    "%cHi👋, I'm Abhinav, and welcome to my site. Feel free to look around the source code. Ciao :)";

  console.log(text, style);
}
