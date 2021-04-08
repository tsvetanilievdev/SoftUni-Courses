/* A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. If the given age does not fit one of the categories, you should print "Error!".  You can see the prices in the table below:
Day / Age	0 <= age <= 18  	18 < age <= 64	    64 < age <= 122
Weekday	        12$	                18$	                12$
Weekend	        15$	                20$	                15$
Holiday	        5$	                12$	                10$
            Input
The input comes in two parameters. The first one will be the type of day (string). The second – the age of the person (number).
            Output
Print the price of the ticket according to the table, or "Error!" if the age is not in the table.
        Constraints
•	The age will be in the interval [-1000…1000].
•	The type of day will always be valid. 
 */

function theatre(day, age) {
    let price = 0;

    if (day === 'Weekday') {
        if (age >= 0 && age <= 18) {
            price = 12;
        } else if (age > 18 && age <= 64) {
            price = 18;
        } else if (age > 64 && age <= 122) {
            price = 12;
        }
    } else if (day === 'Weekend') {
        if (age >= 0 && age <= 18) {
            price = 15;
        } else if (age > 18 && age <= 64) {
            price = 20;
        } else if (age > 64 && age <= 122) {
            price = 15;
        }
    } else if (day === 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = 5;
        } else if (age > 18 && age <= 64) {
            price = 12;
        } else if (age > 64 && age <= 122) {
            price = 10;
        }
    }

    if (age < 0 || age > 122) {
        console.log('Error!');
    } else {
        console.log(`${price}$`)
    }
}
theatre('Weekday', 42);
theatre('Holiday', -12);
theatre('Holiday', 15);

//Second solution:
function theatrePromo(dayInput, ageValue) {
    let day = dayInput;
    let age = ageValue;

    let price = 0;

    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                price = 12;
                console.log(`${price}$`)
            } else if (age > 18 && age <= 64) {
                price = 18;
                console.log(`${price}$`)
            } else if (age > 64 && age <= 122) {
                price = 12;
                console.log(`${price}$`)
            } else {
                console.log(`Error!`);
            }
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                price = 15;
                console.log(`${price}$`)
            } else if (age > 18 && age <= 64) {
                price = 20;
                console.log(`${price}$`)
            } else if (age > 64 && age <= 122) {
                price = 15;
                console.log(`${price}$`)
            } else {
                console.log(`Error!`);
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                price = 5;
                console.log(`${price}$`)
            } else if (age > 18 && age <= 64) {
                price = 12;
                console.log(`${price}$`)
            } else if (age > 64 && age <= 122) {
                price = 10;
                console.log(`${price}$`)
            } else {
                console.log(`Error!`);
            }
            break;
    }
}
theatrePromo('Weekday', 42);