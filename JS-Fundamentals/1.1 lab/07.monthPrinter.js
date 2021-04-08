/* Write a program, which takes an integer from the console and prints the corresponding month. 
If the number is more than 12 or less than 1 print "Error!" 
        Input
You will receive a single number.
        Output
If the number is within the boundaries print the corresponding month, otherwise print "Error!"
*/
function monthPrint(monthValue) {
    let month = monthValue;

    switch (month) {
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('May');
            break;
        case 6:
            console.log('June');
            break;
        case 7:
            console.log('July');
            break;
        case 8:
            console.log('August');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('October');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('December');
            break;
        default:
            console.log('Error!');
    }
}
monthPrint(2)