
const myCircles = document.querySelectorAll(".circles");

myCircles[1].getElementsByClassName.backgroundColor = "green";

myCircles.forEach(function (item, index, array) {
    
    item.addEventListener('click', function () {
        item.classList.toggle("nice");
        console.log("circle with index nr: " + index);
    })
})