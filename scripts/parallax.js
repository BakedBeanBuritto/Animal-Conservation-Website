// Link for the tutorial where i found this code().

// Geting the Id tags of the objects in the HTML
let text=document.getElementById('text');
let Space=document.getElementById('space');
let Earth=document.getElementById('earth');

let Stars1=document.getElementById('stars1');
let Stars2=document.getElementById('stars2');

let DarkSpace=document.getElementById('darkSpace');

let trackpadText=document.getElementById('trackpad');

let para1=document.getElementById('para1');
let para2=document.getElementById('para2');

let Hill=document.getElementById('hill');
let Fire=document.getElementById('fire');

let Leaves1=document.getElementById('Leaves1');
let Leaves2=document.getElementById('Leaves2');

let Cloud1=document.getElementById('Cloud1');
let Cloud3=document.getElementById('Cloud2');

// let Cloud2=document.getElementById('Cloud2');
// let Cloud3=document.getElementById('Cloud3');

window.addEventListener('scroll',()=>{
    // Link for the tutorial where i found this code().

    // it wasnt explained in the tutorial, but from what i undestand you set "value" to the vertical scroll of the screen;
    let value=window.scrollY;

    // then this line of code moves the object by the value of the screen scroll by a specified speed.
    text.style.marginTop= value * -0.3 + 'px';

    Earth.style.marginTop= value * 0.8 + 'px';
    Earth.style.left= value * -1.1 + 'px';

    trackpadText.style.marginTop = value * -0.3 + 'px';

    Stars1.style.marginTop=value * -0.8+ 'px';
    Stars2.style.marginTop=value * -0.5+ 'px';

    para1.style.marginTop=value * -0.7 + 'px';
    para2.style.marginTop=value * -0.5 + 'px';

    Hill.style.marginTop=value * -0.2+ 'px';
    Fire.style.marginTop=value * -0.4 + 'px';



    // Cloud1.style.marginTop=value * -0.5 + 'px';

    // Leaves1.style.marginTop=value * -0.8 + 'px';
    // Leaves2.style.marginTop=value * -0.5 + 'px';

    

    // Cloud2.style.marginTop=value * -0.4 + 'px';
    // Cloud3.style.marginTop=value * -0.7 + 'px';
})