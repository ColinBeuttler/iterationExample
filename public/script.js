var items = document.getElementsByClassName("sub");

var text = document.querySelector(".text");
var button = document.querySelector(".button");

var pointer = 0;

var textIndex = 0;

var textExplain = [
    "Iteration is a way of repeating specific code.",
    "Iteration uses a loop to repeat code on all or some indexes within an array, list, or string.",
    "It can be written to run to completion, or to be broken when conditions are met.",
    "To determine if the string to the left is an anagram, each character must be compared to it's inverse index character.",
    "Iteration is ideal for this process because the code must run for each index within the string as well as it's opposing index.", 
    "i starts at index 0, the first character of the string. j starts at index string.length-i-1, the last index of the string. i = j; true",
    "For every iteration i will increase by i and j will decrease by 1. i = j; true",
    "A conditional statement, if i equals j, will check for truthiness. If false, the iteration will stop, if true continue. i = j; true",
    "On false return, the iterations stops, this indicates the string to the left is not an anagram.",
    "However, if the iteration runs to completion, then all characters within the string are equal to their opposing character.",
    "Then the consecutive truths will indicate the the above string is an anagram."
]

button.onclick = function () { setText() };

function iterate() {
    let j;
    let k;
    let y;
    for (let i = pointer; i < items.length; i++){
        k = items.length - i - 1
        if (pointer >= 1) {
            j = i - 1  
            y = k + 1
            items[j].classList.remove("active")
            items[y].classList.remove("active-y")
            items[y].classList.add("non-active");
            items[j].classList.add("non-active");
        }
        items[k].classList.add("active-y");
        items[i].classList.add("active");
        pointer ++
        return
    }
}

function setText() {
    if (textIndex >= textExplain.length) {
        return 
    }
    else if (textIndex >= 5 && textIndex < 9) {
        iterate();
    }
    text.innerHTML = textExplain[textIndex];
    textIndex++;
}

setText();
