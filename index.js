(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.round = function(x, n) {
            return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();