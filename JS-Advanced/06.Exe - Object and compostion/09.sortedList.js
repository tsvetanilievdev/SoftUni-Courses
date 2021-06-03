/* 9.	Sorted List*
Create a function that returns a special object, which keeps a list of numbers, sorted in ascending order. It must support the following functionality:
•	add(elemenent) - adds a new element to the collection
•	remove(index) - removes the element at position index
•	get(index) - returns the value of the element at position index
•	size - number of elements stored in the collection
The correct order of the elements must be kept at all times, regardless of which operation is called. 
Removing and retrieving elements shouldn’t work if the provided index points outside the length of the collection (either throw an error or do nothing). 
Note the size of the collection is not a function.
        Input / Output
The initial function takes no arguments and must return an object.
All methods on the object that expect input will receive data as parameters. Methods that have validation will be tested with both valid and invalid data. Any result expected from a method should be returned as it’s result.
 */
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

function createSortedList() {
  let arr = [];

  let obj = {
    add(element) {
      arr.push(element);
      this.size++;
      arr.sort((a, b) => a - b);
    },
    remove(index) {
      if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
        arr.sort((a, b) => a - b);
        this.size--;
      }
    },
    get(index) {
      if (index >= 0 && index < arr.length) {
        return arr[index];
      }
    },
    size: 0,
  };
  return obj;
}
