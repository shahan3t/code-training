function doubleChar(str) {
    // Your code here
    let a = str.split("")
    let b = []
    a.forEach(x => {
      b.push(x)
      b.push(x)
    })
    return b.join("")
  }

  const doubleChar = (str) => str.split("").map(c => c + c).join("");
  