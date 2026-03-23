const blocks = document.getElementById('blocks');
var i=0;
console.log(blocks);

blocks.addEventListener('click', click_boton)

function click_boton(){
    console.log(blocks);
    i++;
    if(i === 1){
        blocks.style.backgroundColor = "rgb(223, 48, 25)";
        blocks.style.right = "0";
    } else if(i === 2){
        
        blocks.style.transform = "scale(1.2)";
        blocks.style.backgroundColor = "rgb(116, 247, 8)";
        blocks.style.bottom = "0";
    } else {
        blocks.style.transform = "rotate(50deg)";
        blocks.style.backgroundColor = "rgb(191, 8, 247)";
        blocks.style.left = "0"; 
    }
}