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