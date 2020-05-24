let friends = ["Don", "Sherm", "Sean", "Ricky", "Chris"];

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
