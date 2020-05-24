document.addEventListener("DOMContentLoaded", function () {
  let friends = ["Don", "Sherm", "Sean", "Ricky", "Chris"];

  let div = document.createElement("div");
  div.className = "friend";

  let Don = document.createElement("h3")
  let Sherm = document.createElement("h3")
  let Sean = document.createElement("h3")
  let Ricky = document.createElement("h3")
  let Chris = document.createElement("h3")

  Don.innerText = "Don"
  Sherm.innerText = "Sherm"
  Sean.innerText = "Sean"
  Ricky.innerText = "Ricky"
  Chris.innerText = "Chris"

  div.appendChild(Don);
  div.appendChild(Sherm);
  div.appendChild(Sean);
  div.appendChild(Ricky);
  div.appendChild(Chris);

  document.body.appendChild(div);

  let button = document.createElement("button");
  button.innerText = "Sing!";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
      console.log(friends[i]);

      for (let c = 99; c >= 1; c--) {
        if (c == 1) {
          console.log(
            c +
              " line of code in the file, " +
              c +
              " line of code; " +
              friends[i] +
              " strikes out, clears it all out, no more lines of code in the file"
          );
        } else {
          console.log(
            c +
              " lines of code in the file, " +
              c +
              " lines of code; " +
              friends[i] +
              " strikes out, clears it all out, " +
              (c - 1) +
              " lines of code in the file"
          );
        }
      }
    }
  });
});
