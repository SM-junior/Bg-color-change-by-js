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

function changeColor(){
    const button=document.getElementById('button');
    const body=document.getElementById('body');
    const hexa=document.getElementById('hexa');
    const copy=document.getElementById('copy');
    button.addEventListener('click',function(){
        body.style.backgroundColor=rgb();
        hexa.value=rgb();
    });
    copy.addEventListener('click', function(){
        navigator.clipboard.writeText(hexa.value);
    })

    }
    function rgb(){
        const red=parseInt(Math.random()*255);
        const green=parseInt(Math.random()*255);
        const blue=parseInt(Math.random()*255);
        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    }
    window.onload=()=>{
        changeColor();
    }
    