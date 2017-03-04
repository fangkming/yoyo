function CAISL_Cal(n) {
    var fn = function(x) {
        return n + x;
    };
    fn.toString = function(){
    	return n;
    }
    return fn;
}
