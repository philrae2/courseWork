let title = "Flintstone Family Members";

function pad (string) {
  let padding = Math.floor(((40 - string.length) / 2));
  console.log(string.padStart(padding + string.length));
}

pad(title);