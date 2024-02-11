/**Attendence Management System */

let student = [];
function listStudent() {
  return student;
}
//For Add Student
function addStudent(name) {
  student.push(name);
  return `Student ${name} Added Successfully`;
}
//For Update Student
function updateStudent(oldName, newName) {
  let elementIndex = student.indexOf(oldName);
  student[elementIndex] = newName;
  return `Student ${oldName} updated with ${newName} successfully`;
}

//For Remove Student
function removeStudent(name) {
  let element_index = student.indexOf(name);
  student.splice(element_index, 1);

  return `Student ${name} Removed Successfully`;
}
console.log(listStudent());
console.log(addStudent("Sagar"));
console.log(addStudent("Sourav"));
console.log(addStudent("Suraj"));
console.log(addStudent("Rohit"));
console.log(addStudent("Sameer"));
console.log(addStudent("Hitesh"));
console.log(addStudent("Ajay"));
console.log(listStudent());
console.log(removeStudent("Ajay"));
console.log(listStudent());

console.log(updateStudent("Hitesh", "Sams"));

console.log(listStudent());
