const calc = (o, arg1, arg2) => {
    if (o === '+'){
        return arg1 + arg2;
    }else if (o === '-'){
        return  arg1 - arg2;;
    }else if (o === '*'){
        return  arg1 * arg2;;
    } else if (o === '/') {
        return arg1 / arg2;
    }else if (o === '^'){
        let tmp = arg1;
        for (let i = 1; i < arg2; i++){
            tmp *= arg1;
        }
        return tmp;
    }else if (o === 'Sqrt'){
        return Math.pow(arg1, 1/arg2);
    }else if (o === 'Mod'){
        return arg1 % arg2;
    }else {
        return 'что-то пошло не так';
    }
};
module.exports = calc;