let start = document.getElementById('start');

let first = document.getElementById('first');
let input = document.getElementById('input');
let firstStageButton = document.getElementById('firstBTN');
let firstBTN = document.getElementById('start');
let divAsk = document.getElementById('ask');

let secondStage = document.getElementById('second-stage');
let thirdStage = document.getElementById('boss');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let not = document.getElementById('not');

let boss = document.getElementById('boss');



//start

let startGame = () => {
    first.classList.remove('hide-first');
    first.classList.add('visable-first');
};


start.addEventListener('click', startGame);

//1 этап

let sheakAsk = () => {
    if(input.value == '12'){
        divAsk.textContent = 'правильно, продолжай дальше...';
        setTimeout(function getSecondStage (){
            first.remove()
            secondStage.classList.remove('hide-first')
            secondStage.classList.add('visable-first')
        }, 2000)
    }else {
        divAsk.textContent = 'неправильно, это не так работает';
    }
};

firstStageButton.addEventListener('click', sheakAsk);

//этап 2

let trueAsk = () => {
    not.textContent = 
    'Правильно! Неожидал, что ты справишься! Ну сейчас наврятли)))';
    setTimeout(function getSecondStage (){
            first.remove()
            secondStage.remove()
            boss.classList.remove('hide-first')
            boss.classList.add('visable-3')
        }, 2000)
};

let falseAsk = () => {
    not.textContent = 
    'Нет, это не он)';
};

let false2Ask = () => {
    not.textContent = 
    'Нет.';
};

let false3Ask = () => {
    not.textContent = 
    'Неа)';
};



img1.addEventListener('click', trueAsk);
img2.addEventListener('click', falseAsk);
img3.addEventListener('click', false2Ask);
img4.addEventListener('click', false3Ask);

//этап 3

let healMonster = document.getElementById('heal-monster');
let healUser = document.getElementById('heal-user');
let atak = document.getElementById('atak');
let atak2 = document.getElementById('atak2');
let atak3 = document.getElementById('atak3');

let hpMonster = 1000;
let hpUser = 100;

healMonster.textContent = hpMonster;
healUser.textContent = hpUser;

let goAtak = () => {
   
hpMonster = hpMonster - 150;
hpUser = hpUser - 30;
healMonster.textContent = hpMonster;
healUser.textContent = hpUser;
if(hpMonster <= 0){
    healUser.textContent = 'Ты выиграл!';
    setTimeout(function getFourthStage (){
        boss.remove()
        final.classList.remove('hide-first')
        final.classList.add('visable-4')
    }, 1000)
}

if(hpUser <= 0){
    healUser.textContent = 'Ты проиграл! Телепортация обратно...';
    setTimeout(function getFourthStage (){
        location.reload();
    }, 1000)
}
};

let goAtak2 = () => {
hpMonster --;
hpUser = hpUser + 10;
healMonster.textContent = hpMonster;
healUser.textContent = hpUser;
};

let goAtak3 = () => {
    hpUser = hpUser + 20;
    hpMonster = hpMonster + 25;
    healUser.textContent = hpUser;
    healMonster.textContent = hpMonster;
};

atak.addEventListener('click', goAtak);
atak2.addEventListener('click', goAtak2);
atak3.addEventListener('click', goAtak3);


// этап 4
let final = document.getElementById('final');
let input2 = document.getElementById('input2');
let firstBTN2 = document.getElementById('firstBTN2');
let divAsk2 = document.getElementById('ask2');

let sheak = () => {
    if(input2.value == '12'){
        divAsk2.textContent = 'правильно, продолжай дальше...';
        setTimeout(function getSecondStage (){
            final.remove()
            stage4.classList.remove('hide-first')
            stage4.classList.add('stage4')
        }, 2000)
   }else {
    divAsk2.textContent = 'Неправильно, посчитай ещё раз.';
  }
};

firstBTN2.addEventListener('click', sheak);

//4 этап

let redbool = document.getElementById('redbool');
let w = document.querySelector('h1');
let gehe = () => {
    if(trueBtn){
        w.textContent = 'правильно, ты прошёл игру (оцените в дз)';
        setTimeout(function getSecondStage (){
        stage4.remove()
        stage4.classList.remove('hide-first')
        stage4.classList.add('redbool')
        }, 10000)
    };

};
stage4.addEventListener('click', gehe);