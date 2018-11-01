'use strict';

const operators = ['+', '-', '*', '/', '^', '10^', 'Sqrt', 'Mod','e^', 'Pi'];
let arrowFlag = false;
let feFlag = false;
let memoryFlag = false;
let mem = 0;

let show = () => {
    let d = splitDisplay(getDisplay(), operators);
    if (arrowFlag === false){
        let ooo = oper();
        document.getElementById("display").value = calc(ooo, d[0], d[1]);
    } else {
        let ooo = oper();
        document.getElementById("display").value = Math.ceil(calc(ooo, d[0], d[1]));
    }

};
function oper() {
    let dis = getDisplay();
    if (dis.includes('+')){
        return '+';
    }else if (dis.includes('-')){
        return '-';
    }else if (dis.includes('*')){
        return  '*';
    } else if (dis.includes('/')) {
        return '/';
    }else if (dis.includes('^')){
        return '^';
    }else if (dis.includes('Sqrt')){
        return 'Sqrt';
    }else if (dis.includes('Mod')){
        return 'Mod';
    }else {
        return 'что-то пошло не так';
    }
}


let getDisplay = () => { //получаем с экрана
    return document.getElementById('display').value;
};
let splitDisplay = (display, op) => {//разделяем числа, массив чисел
    let temp = op[0];
    for (let i = 0; i < op.length; i++){
        display = display.split(op[i]).join(temp);

    }
    display = display.split(temp);
    for (let i = 0; i < display.length; i++){
        if (display[i] === 'Exp'){
            display[i] = '2.7182818284590452354';
        }else if(display[i] === 'e'){
            display[i] = '2.7182818284590452354';
        }
        display[i] = +display[i];

    }
    return display;
};

let msF = () =>{
    if (memoryFlag === false){
        document.getElementById('ms').style.color = 'black';
        return memoryFlag = true;
    }else{
        document.getElementById('ms').style.color = 'grey';
        return memoryFlag = false;
    }
};
let mrF = () =>{
    if (memoryFlag === false){
        document.getElementById('mr').style.color = 'black';
        return memoryFlag = true;
    }else{
        document.getElementById('mr').style.color = 'grey';
        return memoryFlag = false;
    }
};
let mPlusF = () =>{
    if (memoryFlag === false){
        document.getElementById('mplus').style.color = 'black';
        return memoryFlag = true;
    }else{
        document.getElementById('mplus').style.color = 'grey';
        return memoryFlag = false;
    }
};
let mMinusF = () =>{
    if (memoryFlag === false){
        document.getElementById('mminus').style.color = 'black';
        return memoryFlag = true;
    }else{
        document.getElementById('mminus').style.color = 'grey';
        return memoryFlag = false;
    }
};
let mcF = () =>{
    if (memoryFlag === false){
        document.getElementById('mc').style.color = 'black';
        return memoryFlag = true;
    }else{
        document.getElementById('mc').style.color = 'grey';
        return memoryFlag = false;
    }
};

let MS = () =>{
    msF();
    mem = document.getElementById("display").value;
    return mem;
};
let MR = () => {
    mrF();
    document.getElementById("display").value = mem;
};
let MC = () => {
    mcF();
    mem = 0;
};
let mMinus = () => {
    mMinusF();
    if (mem === 0){
        mem = 0;
    }else {
        mem = document.getElementById("display").value - mem;
        return mem;
    }
};
let mPlus = () => {
    mPlusF();
    if (mem === 0){
        mem = 0;
    }else {
        mem = +document.getElementById("display").value + +mem;
        return mem;
    }
};


let arrow = () =>{//округление в большую сторону
    if (arrowFlag === false){
        document.getElementById('arrow').style.color = 'black';
        return arrowFlag = true;
    }else{
        document.getElementById('arrow').style.color = 'grey';
        return arrowFlag = false;
    }
};

let FE =() => {
    if (feFlag === false){
        document.getElementById('fe').style.color = 'black';
        return feFlag = true;
    }else{
        document.getElementById('fe').style.color = 'grey';
        return feFlag = false;
    }
};
let FEFunc = () => {//Переключение на экспоненциальное представление чисел
    FE();
    let disp = getDisplay();
    let index = disp.indexOf('.');
    let a = disp.split('.').join('');
    let b = a.substring(0, index);
    let c = a.substring(index);
    document.getElementById("display").value = b.substring(0,1) + '.' + b.substring(1) + c + 'e+' + b.substring(1).length;
};

/*
const addition = (num1, num2) => {
    return num1 + num2;
};
const subtraction = (num1, num2) => {
    return num1 - num2;
};
const multiplication = (num1, num2) => {
    return num1 * num2;
};
const division = (num1, num2) => {
    return num1 / num2;
};
const xExtentY = (num1, num2) => {
    let tmp = num1;
    for (let i = 1; i < num2; i++){
        tmp *= num1;
    }
    return tmp;
};
const ySqrtX = (num1, num2) => {
    return Math.pow(num2, 1/num1);
};
const Mod = (num1, num2) => {
    return num1 % num2;
};
*/

let delChar = (display) => {
    document.getElementById("display").value = display.substring(0, display.length-1);
};

let cleanEntry = () => {
    document.getElementById("display").value = '';
};
let C = () => {
    MC();
    document.getElementById("display").value = '';
};

 let changeSign = () => {
     let disp = getDisplay();
     if(disp < 0) {
         document.getElementById("display").value = disp.substring(1, disp.length);
     }else{
         document.getElementById("display").value = '-' + disp;
     }
 };

let fuct = () => {
    let disp = getDisplay();
    let fact = 1;
    for (let i = 1; i <= disp; i++) {
        fact *= i;
    }
    document.getElementById("display").value = fact;
};
let squared = () => {
    let disp = getDisplay();
    document.getElementById("display").value = multiplication(disp, disp);
};
let cubed = () => {
    let disp = getDisplay();
    document.getElementById("display").value = disp*disp*disp;
};
 let divisionX = () => {
     let disp = getDisplay();
     document.getElementById("display").value = division(1, disp);
 };

let sqrt = () => {
    let disp = getDisplay();
    let sqrt;
        for (let i = 1; i*i <= disp; i++) {
            sqrt = i;
        }
        document.getElementById("display").value = sqrt;
};

let Ln = () => {
    let disp = getDisplay();
    document.getElementById("display").value =  Math.log(disp);
};
let Log = () => {
    let disp = getDisplay();
    document.getElementById("display").value =  Math.log(disp)/Math.log(10);
};

let Sin = () => {
    let disp = getDisplay();
    document.getElementById("display").value =  Math.sin(disp);
};
let Cos = () => {
    let disp = getDisplay();
    document.getElementById("display").value =  Math.cos(disp);
};
let Tan = () => {
    let disp = getDisplay();
    document.getElementById("display").value =  Math.tan(disp);
};
let Sin_1 = () => {
    let disp = getDisplay();
    document.getElementById("display").value =  1/Math.sin(disp);
};
let Cos_1 = () => {
    let disp = getDisplay();
    document.getElementById("display").value =  1/Math.cos(disp);
};
let Tan_1 = () => {
    let disp = getDisplay();
    document.getElementById("display").value =  1/Math.tan(disp);
};

let Deg = () => {
    let disp = getDisplay();
    document.getElementById("display").value =  disp*(180/Math.PI);
};
let DMS = () => {
    let disp = getDisplay();
    document.getElementById("display").value =  disp*(180/Math.PI);
};