"use strict";
function expand () {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.on("focus", function() {
                $element.css("transform-origin", "left top");
                $element.css("transform", "scale(2,2)");
                



            });
            $element.on("blur", function() {
                $element.css("transform", "");
                // returning it to its default values after mouse leaves element
            });
    }
}
}





angular
.module("SocialPosts")
.directive("expand", expand);