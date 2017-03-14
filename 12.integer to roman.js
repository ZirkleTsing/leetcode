/*
Given an integer, convert it to a roman numeral.
Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {number} num
 * @return {string}
 */
/*
Ⅰ（1）、X（10）、C（100）、M（1000）、V（5）、L（50）、D（500）
1996【MCMXCVI】 Ⅳ=4、Ⅸ=9
2010 MMX

1 I
2 II
3 III
4 IV
5 V
6 VI
7 VII
8 VIII
9 IX
10 X

100 C
200 CC
300 CCC
400 CD
500 D
600 DC
700 DCC
800 DCCC
900 CM
*/
var intToRoman = function(num) {
	var result = [];
    var thousand = Math.floor(num/1000);
    num = num - thousand * 1000;
    var hundred = Math.floor(num/100);
    num = num - hundred * 100;
    var ten = Math.floor(num/10);
    num = num - ten * 10;
    var bit = Math.floor(num);
    var mapHundred = ['0','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    var mapTen = ['0','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    var mapBit = ['0','I','II','III','IV','V','VI','VII','VIII','IX'];
    while(thousand !== 0){
    	result.push("M")
    	thousand--;
    }
    if(hundred !== 0){
    	result.push(mapHundred[hundred]);
    }
    if(ten !== 0){
    	result.push(mapTen[ten]);
    }
    if(bit !== 0){
    	result.push(mapBit[bit]);
    }

    return result.join('');
};

console.log(intToRoman(1996));