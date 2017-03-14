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
	var str = num + "";
	var strNum = str.split("");
	var count = 1;
    var mapHundred = ['0','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    var mapTen = ['0','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    var mapBit = ['0','I','II','III','IV','V','VI','VII','VIII','IX'];
    console.log(strNum);
    for(var i = strNum.length-1; i>=0; i--){
    	if(count === 1){
    		let bit = parseInt(strNum[i]);
    		if(bit !== 0){
    			result.unshift(mapBit[bit]);
    		}
    		count++;
    	}
    	else if(count === 2){
    		let ten = parseInt(strNum[i]);
    		if(ten !== 0){
    			result.unshift(mapTen[parseInt(strNum[i])]);
    		}
    		count++;
    	}
    	else if(count === 3){
    		let hundred = parseInt(strNum[i]);
    		if(hundred !== 0){
   	    		result.unshift(mapHundred[parseInt(strNum[i])]);
    		}
    		count++;
    	}
    	else if(count === 4){
    		let thousand = parseInt(strNum[i]);
    		while(thousand !== 0){
    			result.unshift("M");
    			thousand--;
    		}
    	}
    }
    return result.join('');
};

console.log(intToRoman(2010));



/*
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
*/