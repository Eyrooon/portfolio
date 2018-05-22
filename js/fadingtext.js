let fadeText = document.querySelectorAll('.fadingtext p'),
    i = 0;

function fadeAnim()
{
    if(i>=fadeText.length)
    {
        i = 0;
    }
        switch(i)
        {
            case 0:
            fadeText[i].classList.add("fadeleft");
            break;

            case 1:
            fadeText[i].classList.add("faderight");
            break;

            case 2:
            fadeText[i].classList.add("fadebottom");
            break;

        }
        setTimeout(reset,2500);
} 

setInterval(fadeAnim,2800);

/*
setInterval(moveLeft,1000);

function moveLeft()
{
    $('p').animate({
        left: '50%',
        opacity: '0'
    });
}
*/
function reset()
{
    fadeText[i].classList.remove('fadeleft');
    fadeText[i].classList.remove('faderight');
    fadeText[i].classList.remove('fadebottom');
    i++;
}