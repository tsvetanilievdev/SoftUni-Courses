/* Write a program, which prints the language, that a given country speaks. 
You can receive only the following combinations: English is spoken in England and USA; Spanish is spoken in Spain, Argentina and Mexico, 
for the others, we should print "unknown".
        
            Input
You will receive a single country name.
            Output
Print the language, which the country speaks, or if it is unknown for your program, print "unknown".
 */

//First solution:
function languages(language) {

    switch (language) {
        case 'USA':
        case 'England':
            console.log('English');
            break;
        case 'Argentina':
        case 'Mexico':
        case 'Spain':
            console.log('Spanish');
            break;
        default: 
        console.log('unknown');
    }
}
languages('USA');
languages('Germany');