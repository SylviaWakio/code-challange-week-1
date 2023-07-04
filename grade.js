let marks = 50
function getGrade(marks) {
  let grade;
  if (marks >= 80) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  return grade;
}

// Output the grade
console.log(`student grade is ${getGrade(marks)}.`);