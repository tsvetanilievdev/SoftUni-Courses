/* 
You are given a group of people, type of the group, and day of the week they are going to stay. 
Based on that information calculate how much they have to pay and print that price on the console. 
Use the table below. In each cell is the price for a single person. The output should look like that:
 "Total price: {price}". The price should be formatted to the second decimal point.
	
        Friday	  Saturday	Sunday
Students	8.45	9.80	10.46
Business	10.90	15.60	16
Regular	    15	    20	    22.50

There are also discounts based on some conditions:
•	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
•	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
•	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5%
You should reduce the prices in that EXACT order */

function vacation(count, type, day) {
    let price = 0;

    if (type === 'Students') {
        if (day === 'Friday') {
            price = count * 8.45;
        } else if (day === 'Saturday') {
            price = count * 9.80;
        } else if (day === 'Sunday') {
            price = count * 10.46;
        }

        if (count >= 30) {
            price = price * 0.85;
        }
    } else if (type === 'Business') {
        if (count >= 100) {
            count = count - 10;
        }

        if (day === 'Friday') {
            price = count * 10.90;
        } else if (day === 'Saturday') {
            price = count * 15.60;
        } else if (day === 'Sunday') {
            price = count * 16;
        }

    } else if (type === 'Regular') {
        if (day === 'Friday') {
            price = count * 15;
        } else if (day === 'Saturday') {
            price = count * 20;
        } else if (day === 'Sunday') {
            price = count * 22.50;
        }

        if (count >= 10 && count <= 20) {
            price = price * 0.95;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
);
vacation(40,
    "Regular",
    "Saturday"
);