// get id of modal
var modal=document.getElementById('modal');
// open modal
var modalBtn=document.getElementById('modalBtn');
// close button
var closeBtn=document.getElementsByClassName('closeBtn')[0];
//click  open event
modalBtn.addEventListener('click',openModal);

// click for close even
closeBtn.addEventListener('click',closeModal);
//click outside of window
window.addEventListener('click',clickoutside);
// create function
function openModal()
{
    //console.log('hello');
    modal.style.display= 'block';
}

function closeModal(){
    modal.style.display='none';
}

function clickoutside(e){
    if(e.target==modal){
        modal.style.display='none';
    }
    
}
