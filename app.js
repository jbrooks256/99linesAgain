document.addEventListener("DOMContentLoaded", function () {
  let friends = ["Don", "Sherm", "Sean", "Ricky", "Chris"];

  let div = document.createElement("div");
  div.className = "friend";

  let button = document.createElement("button");
  button.innerText = "Sing!";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
      let myFriend = document.createElement("h3");
      myFriend.innerText = friends[i];

      let paragraph = document.createElement("p");

      for (let c = 99; c >= 1; c--) {
        if (c == 1) {
          paragraph.innerText += 
            c +
            " line of code in the file, " +
            c +
            " line of code; " +
            friends[i] +
            " strikes out, clears it all out, no more lines of code in the file"
        } else {
          paragraph.innerText += 
            c +
            " lines of code in the file, " +
            c +
            " lines of code; " +
            friends[i] +
            " strikes out, clears it all out, " +
            (c - 1) +
            " lines of code in the file"
        }
      }
      myFriend.appendChild(paragraph);
      div.appendChild(myFriend);
      document.body.appendChild(div);
    }
  });
});
