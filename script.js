const toggleBtn = document.querySelector('.toggleBtn');
const dropDown = document.querySelector('.dropdown-menu');

toggleBtn.addEventListener('click', function() {
    dropDown.classList.toggle('open');
});


function wait(ms=0){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function draw(element){
    const text = element.textContent;
    let soFar =''
    for(const letter of text){
        
        soFar += letter;
        element.textContent= soFar;
        await wait(1000)
    }
}
function startTyping(){
    const element= document.querySelector('.load-name')
    element.draw(element)
}
