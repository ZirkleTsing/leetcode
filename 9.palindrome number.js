/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x + "",
    	content = str.split('');
    	len = content.length;

    	if(x<0){
    		return false;
    	}
		if(len%2 !== 0){
			content.splice(parseInt(len/2),1);
			len = len - 1;
			while(len>0){
				if(content.shift() !== content.pop()){
					return false;
				}
				len = content.length;
			}
				return true;
			}else{
				while(len>0){
					if(content.shift() !== content.pop()){
						return false;
					}
					len = content.length;
				}
				return true;
			}
 }

 console.log(isPalindrome(121));