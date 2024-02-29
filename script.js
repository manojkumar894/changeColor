let changecolor = document.querySelector(".changeclr")
//console.log(changecolor);
let changeshp = document.querySelector(".changeshape")

let color = ['green','yellow','green','black','white','orange','pink','blue','red'];
//console.log(color);
let changeColorBtn =  document.getElementById('colorbtn');
//console.log(changeColorBtn);
changeColorBtn.addEventListener('click' ,function(){
    let randomColor=color[Math.floor(Math.random() * color.length)];
    //alert('clicked on btn');
    console.log(randomColor);
    let circles = document.getElementById('circle1')
    circles.style.backgroundColor= randomColor;
});

let shape = [];
let changeShape = document.getElementById('changeShape');
console.log(changeShape);

changeShape.addEventListener('click', function(){
    //alert("clicked on shape changed")
    let shape = document.getElementById('shape')
    
    // shape.style.width="0";
    // shape.style.height="0";
    // shape.style.borderLeft= "50px solid" ;
    // shape.style.border.right="50px solid";
    

});