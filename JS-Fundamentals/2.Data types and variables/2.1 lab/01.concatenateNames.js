//Write a function which receives two names as string parameters and a delimiter. Print the names joined by the delimiter. HINT - use string interpolation!
function names(firstName, secondName, del){
    console.log(`${firstName}${del}${secondName}`);
}
names('John',
'Smith',
'->');
names('Jan',
'White',
'<->');