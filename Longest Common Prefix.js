/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || !strs.length){
    	return "";
    }

    var shortestStr = strs[0],
    	subStr = shortestStr.substring(0, 1);

    for(var i=1;i<strs.length;i++){
    	if(strs[i].length < shortestStr.length){
    		shortestStr = strs[i];
    	}

    	if(strs[i].indexOf(subStr) !== 0){
    		return "";
    	}
    }

    for(var i=2;i<=shortestStr.length;i++){
    	subStr = strs[0].substring(0,i);
    	if(!isPrefix(strs,subStr)){
    		return str[0].substring(0,i-1);
    	}
    }
    return shortestStr;
};

function isPrefix(strs,str){
	for(var i=1;i<strs.length;i++){
		if(strs[i].indexOf(str) !== 0){
			return false;
		}
	}
	return true;
}


console.log(longestCommonPrefix(["abc","ab",'abvvv','abfhjhf']));