/*
1.Create an object called cat.

Give the object one property called complain.
Complain's value should be a method (a function) which logs the string "Meow!". 
*/

var cat = {
    complain: function() {
        console.log("Meow!");
    }
};

/* 
2. Select the h3 from the HTML below using the querySelector method
and assign it to a variable called heading.
*/

const heading = document.querySelector("h3");

/*
3. Use the style property on the heading variable from the question above
to change its font size to "2em".
*/

heading.style.fontSize = "2em";

// 4. Add a class to the heading variable called subheading.

heading.classList.add("subheading");

/*
5. Write code that selects all the p elements on a page
and assigns them to a variable called paragraphs.
*/

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    console.log(paragraph[i].innetText);
}

/*
6. Select the div by its class from the HTML below,
assign it to a variable called resultsContainer
and set its inner HTML to be <p>New paragraph</p>.
*/

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

/*
7. Create a function that has one argument called catArray.

Inside the function, loop through the catArray argument
and console log the name property in each object.

Call the function and pass in the cats variable below.
*/

function catName(catsArray) {
    for(let i = 0; i < catsArray.length; i++) {
        console.log(catsArray[i].name);
        console.log(catsArray[i].age);
    }
}

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

catName(cats);

/*
8. Using the function and cats variable from the above question,
instead of logging the name property,
wrap each name property in an h5 tag,
add it to a variable you declare before the loop
and return the variable from the function after the loop.
*/

function catName(catsArray) {
    // variable that will hold the HTML string we create in the loop
    let catHTML = "";

    for (let i = 0; i < catsArray.length; i++) {
        // add the new HTML to the existing HTML stored in catsHTML
        catHTML += `<"h5">${catsArray[i].name}</"h5">`;
    }

    // return the HTML that was created
    return catHTML;
}

/*
9. Call the function from question 8,
pass it the cats variable from question 7
and set the inner HTML of the resultsContainer variable
from question 6 to the return value of the function.
*/

function logName(catArray) {
    let returnCatNames = "";
    for (let i = 0; i < catArray.length; i++) {
        returnCatNames += `<h5>${catArray[i].name}</h5>`;
    }
    return returnCatNames;
}

logName(cats);

/*
10. Using the function from question 8,
add a p element containing the age property from each object.
If the age property is missing,
it should display Age unknown instead.

Wrap the h5 and p in a div.
*/

function catName(catsArray) {
    // variable that will hold the HTML string we create in the loop
    let catHTML = "";

    for (let i = 0; i < catsArray.length; i++) {
        let missingAgeValue = "Age unknown";

        if(catsArray[i].age) {
            missingAgeValue = catsArray[i].age;
        }
        // add the new HTML to the existing HTML stored in catsHTML
        `<div>`
            catHTML += `<h5>${catsArray[i].name}</h5>`;
            `<p>${missingAgeValue}</p>`;
        `</div>`
    }

    // return the HTML that was created
    return catHTML;
}