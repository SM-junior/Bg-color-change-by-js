
// change background RGB color.............................

// window.onload=()=>{
//     main();
// }
// function main(){
//     const body=document.getElementById('body');
//     const button=document.getElementById('button');
//     button.addEventListener('click',function(){
        
//     body.style.backgroundColor=createRGBColor();
// })
// }

// function createRGBColor(){
//     const red=parseInt(Math.random()*255);
//     const green=parseInt(Math.random()*255);
//     const blue=parseInt(Math.random()*255);
//     return `rgb(${red}, ${green}, ${blue})`
// }



// change background RGB color by & generate RGB code...................

// function changeColor(){
// const button=document.getElementById('button');
// const body=document.getElementById('body');
// const hexa=document.getElementById('hexa');
// button.addEventListener('click',function(){
//     body.style.backgroundColor=rgb();
//     hexa.value=rgb();
// })
// }
// function rgb(){
//     const red=parseInt(Math.random()*255);
//     const green=parseInt(Math.random()*255);
//     const blue=parseInt(Math.random()*255);
//     return `rgb(${red},${green},${blue})`;
// }
// window.onload=()=>{
//     changeColor();
// }

// change background hexa color and generate hexa code............

function createHexColor(){
    const red=parseInt(Math.random()*255);
    const green=parseInt(Math.random()*255);
    const blue=parseInt(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function changeColor(){
    document.getElementById('button').addEventListener('click',function(){
        document.getElementById('body').style.backgroundColor=createHexColor();
        document.getElementById('hexa').value=createHexColor();
    })
}
window.onload=()=>{
    changeColor();
}


