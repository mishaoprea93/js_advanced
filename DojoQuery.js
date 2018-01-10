(function $Dojo(elementId) {
    var element = document.getElementById(elementId);
    var click = function(callback) {
        element.addEventListener("click", callback)
    };
    var hover = function(callback1, callback2) {
        element.addEventListener("mouseover", callback1);
        element.addEventListener("mouseout", callback2);
    }
    window.$Dojo = $Dojo;
    return { click: click, hover: hover }

}());