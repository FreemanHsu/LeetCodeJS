/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = module.exports = function(s) {
    var stack = [];
    var dict = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    };
    var i;
    var ch;
    for (i=0; i<s.length; i++){
        ch = s[i];
        switch (ch) {
            case '{':
            case '[':
            case '(':
                stack.push(ch);
                break;
            case '}':
            case ']':
            case ')':
                if(stack.pop()!=dict[ch]){
                    return false;
                }
                break;
            default:
                return false;
                break;
        }
    }
    return stack.length === 0;
};