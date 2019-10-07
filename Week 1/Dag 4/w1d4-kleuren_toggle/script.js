document.addEventListener('DOMContentLoaded', function (event) {
    const words = ['programmeren', 'javascript', 'slack', 'tutorials', 'github', 'samenwerken',
    'studeren', 'browser', 'terminal'];

const menu= document.getElementById('menu');
const list= document.getElementById('list');

/*menu.addEventListener('click', function(){
    if(list.classname == "closed"){
        list.classname= "open";
    }
    else{
        list.classname="closed";
    }
});
werkt niet*/

/*menu.addEventListener('click', function(){
    if(list.classList.contains("closed")){
        list.classList.replace("closed", "open");
    }
    else{
        list.classList.replace("open", "closed");
    }
});*/
//werkt wel (nu niet meer, dan zou ik in css ul moeten veranderen in .open)

menu.addEventListener('click', function(){
    list.classList.toggle("closed");
});
//werkt ook!

const groen= document.getElementById('groen');
const geel= document.getElementById('geel');
const rood= document.getElementById('rood');
const paars= document.getElementById('paars');
const oranje= document.getElementById('oranje');
const background= document.getElementById('background');

groen.addEventListener('click', function(){
    background.classList.toggle("bgroen");
    list.classList.toggle("closed");
});

geel.addEventListener('click', function(){
    background.classList.toggle("bgeel");
    list.classList.toggle("closed");
});

rood.addEventListener('click', function(){
    background.classList.toggle("brood");
    list.classList.toggle("closed");
});

paars.addEventListener('click', function(){
    background.classList.toggle("bpaars");
    list.classList.toggle("closed");
});

oranje.addEventListener('click', function(){
    background.classList.toggle("boranje");
    list.classList.toggle("closed");
});

//probleem: de rij alle kleuren afgaan gaat goed, maar als je weer
//naar boven gaat niet. 

});