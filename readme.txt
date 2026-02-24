1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
we use getElementById to find html element using their id 
for example <p id="para1">ajadsjfldsjlfj </P> if we want to slect using JavaScript we using document.getElementById('para1)

similarly we use getElementsByClassName to find elements using class. it will return mutliple element since same class name can be used in many places. 

querySelector will return first element when it is used. To find class we write a dot before class name it find with id we wirte a hash (#) and to find with any html element we use that tag name
examples with class -> querySelector('.jalaliset')
examples with id -> querySelector('#jalaliset') 
examples with p tag -> querySelector('p')
2. How do you create and insert a new element into the DOM?

to create a new element I will use
createElement() -> to create
innerText to fill the created content with text and  
append() to show in the webpage 

3. What is Event Bubbling? And how does it work?
When one event is created to goes from child to parent and than the parent of the parent.

for example if we have a button inside a card and the card inside a div. the event start from button to card and to div and upwords. 

4. What is Event Delegation in JavaScript? Why is it useful? 
Add one event listener to the parent and not multiple in the multiple children. It uses less memory. 

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() it prevent decault action of the browser 
stopPropagation() stops the propogation of event bubbling meaning it doesn't stop any action but limits the event 