module.exports = function reverse (n) {  
    let arr = [];
    for (let i = 0; i < n.toString().length; i++) {
        arr.push(n.toString()[i]);
    }
    reverseArr = arr.reverse();
    reverseJoin = reverseArr.join('');
    reverseN = reverseJoin.replace(/\D/g, '');
    return reverseN;
};
