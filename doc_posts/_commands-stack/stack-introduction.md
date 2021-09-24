---
title: "Introduction"
num: 0
---

Stack is a special variable which can hold more than one value at a time. It works similar to an array in other programming languages.\
If you have a list of items (for example viewer names), storing them in single variables would look like this:
- var name1 = "Lioran"
- var name2 = "Neverwho"
- var name3 = "Daryl"
This seems quite inefficient if you happen to have a lot of names to store. The answer is to store them all in a stack, which can hold many values under a single name and you can access them by referring to an index number: stack `names = ["Lioran", "Neverwho", "Daryl"]`.\
If you want to retrieve a specific value from a stack, you can use the following formatting: `[position]stackname`. Going by the example above, `[2]names` would retrieve `'Neverwho'`. [position] can also contain other variables or complex math.\
Stack values can be viewed by pressing Tab in the main Receiver menu and typing the full name of the stack.\
One thing to note is that a stack is cleared every time you close or reset Receiver. If you wish to save it, you can use Stack: Stringify and File: Save String commands.

{% include image.html w="75" src="array.png" alt="Representation of an array" %}








