// var ratio = 0.95
// var options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: ratio
// }


// var handleIntersect = function(entries){
//     var gang = document.querySelectorAll('gang')
//     entries.forEach(function(entry,gang) {
//         if(entry.intersectionRatio > ratio){
//             observer.unobserve(entry.target)
//             document.querySelector('.gang1').style.color = 'black'
//             document.querySelector('.gang2').style.color = 'black'
//             document.querySelector('.gang3').style.color = 'black'
//             document.querySelector('.gang4').style.color = 'black'
//             document.querySelector('.gang5').style.color = 'black'
//         }else if (entry.intersectionRatio < ratio){
//             document.querySelector('.gang1').style.color = 'wheat'
//             document.querySelector('.gang2').style.color = 'wheat'
//             document.querySelector('.gang3').style.color = 'wheat'
//             document.querySelector('.gang4').style.color = 'wheat'
//             document.querySelector('.gang5').style.color = 'wheat'
//         }
//     })
// }

// var observer = new IntersectionObserver(handleIntersect, options)

// observer.observe(document.querySelector('.navbar-black'))


var box = document.getElementsByClassName('border-rond');
var tableauBox = Array.from(box);

var awesome = document.getElementsByClassName('hover-js')
var tableauAwesome = Array.from(awesome)

tableauBox.forEach((element, index) => {
    element.addEventListener('mouseover', function(){
        colorBlack(index);
    })
    element.addEventListener('mouseout', function(){
        colorWheat(index);
    })
})

function colorBlack(i){
    tableauBox[i].style.backgroundColor = 'black';
    tableauBox[i].style.transition = '1s';
    tableauAwesome[i].style.color = 'wheat';
}

function colorWheat(i){
    tableauBox[i].style.backgroundColor = 'wheat';
    tableauBox[i].style.transition = '1s';
    tableauAwesome[i].style.color = 'black';
}

var btnSelecteur = document.getElementsByClassName('btn-selecteur');
var tableauBtnSelecteur = Array.from(btnSelecteur);

tableauBtnSelecteur.forEach((element, index) => {
    element.addEventListener('mouseover', function(){
        backgroundcolorWheat(index);
    })
    element.addEventListener('mouseout', function(){
        backgroundcolorBlack(index);
    })
})

function backgroundcolorBlack(i){
    tableauBtnSelecteur[i].style.backgroundColor = 'transparent';
    tableauBtnSelecteur[i].style.color = 'wheat';
    tableauBtnSelecteur[i].style.transition = '1s';
}

function backgroundcolorWheat(i){
    tableauBtnSelecteur[i].style.backgroundColor = 'wheat';
    tableauBtnSelecteur[i].style.color = 'black';
    tableauBtnSelecteur[i].style.transition = '1s';
}


// image box

var box1 = document.querySelector('.all-box-1');
var box2 = document.querySelector('.all-box-2');
var box3 = document.querySelector('.all-box-3');

var btn1 = document.querySelector('.btn1-selecteur');
var btn2 = document.querySelector('.btn2-selecteur');
var btn3 = document.querySelector('.btn3-selecteur');

btn1.addEventListener('click', boxTest1)
btn2.addEventListener('click', boxTest2)
btn3.addEventListener('click', boxTest3)

function boxTest1(){
    box1.classList.add('display-block');
    box2.classList.remove('display-block');
    box3.classList.remove('display-block');
    box1.classList.remove('display-none')
    box2.classList.add('display-none');
    box3.classList.add('display-none');
    console.log('gang')
}

function boxTest2(){
    box2.classList.add('display-block');
    box1.classList.remove('display-block');
    box3.classList.remove('display-block');
    box1.classList.add('display-none');
    box2.classList.remove('display-none');
    box3.classList.add('display-none');
    console.log('gang2')
}

function boxTest3(){
    box3.classList.add('display-block');
    box2.classList.remove('display-block');
    box1.classList.remove('display-block');
    box1.classList.add('display-none');
    box2.classList.add('display-none');
    box3.classList.remove('display-none');
    console.log('gang3')
}