//bai 1

const x = parseInt(prompt("enter a number"))
if (x < 0) {
    alert("Math error")
}

else if (x == 0) {
    alert("the answer is 1")
}

else {
    let y = 1
    for (i = 1; i<= x; i++) {
        y *= i
    }
    alert("the factorial of" + " " + x + " " + "is" + " " + y)
}


//bai 2

function tamgiac(height) {
    for (let i = 0; i < height; i++) {
      let row = "";
  
      for (let j = 0; j < height - i - 1; j++) {
        row += " ";
      }
  
      for (let j = 0; j < 2 * i + 1; j++) {
        if (i === 0 || i === height - 1 || j === 0 || j === 2 * i) {
          row += "*";
        } else {
          row += " ";
        }
      }

      console.log(row);
    }
  }
  
  tamgiac(5);