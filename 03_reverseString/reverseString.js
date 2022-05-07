const reverseString = function(string) {
    split = string.split("");
        
        let joined='';

        for(let i = split.length - 1; i >= 0; i--)
        {
            joined += split[i];
        }

        return joined;
};

// Do not edit below this line
module.exports = reverseString;
