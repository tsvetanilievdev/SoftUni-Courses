/* You will be given 3 parameters – student name (string), age (number) and average grade (number). 
Your task is to print all the info about the student in the following format. The grade should be formatted to the second decimal point: 
"Name: {student name}, Age: {student age}, Grade: {student grade}". */

//First solution:
function studentInfo(nameInput, ageValue, gradeValue) {
    let name = nameInput;
    let age = ageValue;
    let grade = gradeValue.toFixed(2);
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);
}
studentInfo('John', 15, 5.54678);
studentInfo('Steve', 16, 2.1426);
studentInfo('Marry', 12, 6.00)

//Second solution:
function solve(name,age,grade){
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
solve('John', 15, 5.54678);