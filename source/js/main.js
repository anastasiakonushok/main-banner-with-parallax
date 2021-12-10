let img1 = document.querySelector('.img1');  //задаем переменным значение каждой картинки
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let img5 = document.querySelector('.img5');
let img6 = document.querySelector('.img6');
let img7 = document.querySelector('.img7');
let img8 = document.querySelector('.img8');
let img9 = document.querySelector('.img9');
let img10 = document.querySelector('.img10');
let img11 = document.querySelector('.img11');

window.addEventListener('mousemove', function(event) {  //Каждое движение мыши над элементом генерирует это событие
    let x = event.clientX / window.innerWidth;//определяем координаты для x
    let y = event.clientY / window.innerHeight;  //определяем координаты для y
    img1.style.transform = 'translate(-'+ x * 30 + 'px, +' + y * 20 + 'px)';// меняем стиль 
    img2.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
    img3.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    img4.style.transform = 'translate(+' + x * 60 + 'px, -' + y * 20 + 'px)';
    img5.style.transform = 'translate(+' + x * 30 + 'px, -' + y * 20 + 'px)';
    img6.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 10 + 'px)';
    img7.style.transform = 'translate(-' + x * 50 + 'px, +' + y * 15 + 'px)';
    img8.style.transform = 'translate(+' + x * 20 + 'px, -' + y * 20 + 'px)';
    img9.style.transform = 'translate(+' + x * 30 + 'px, -' + y * 20 + 'px)';
    img10.style.transform = 'translate(+' + x * 20 + 'px, -' + y * 20 + 'px)';
    img11.style.transform = 'translate(+' + x * 20 + 'px, -' + y * 20 + 'px)';
});


//Первый способ 
const slider__class = document.querySelector('.slider__class');
const slider = slider__class.querySelectorAll('.slider');
const line1 = document.querySelector('.arrow-1');
const line2 = document.querySelector('.arrow-2')
var i = 0;


line1.addEventListener ("click", function () {
    slider[i].classList.remove('active');
   i = (i+1) %slider.length;
    slider[i].classList.add('active');
});

line2.addEventListener ("click", function () {
    slider[i].classList.remove('active');
   i = (i+1) %slider.length;
    slider[i].classList.add('active');
});


//Второй способ
// function nextSlide() {
//     slider[i].classList.remove('active');
//     i = (i+1) %slider.length;
//     slider[i].classList.add('active');
// }
// function prevSlide() {
//     slider[i].classList.remove('active');
//     i = (i+1) %slider.length;
//     slider[i].classList.add('active');
// }

//onclick="nextSlide()"