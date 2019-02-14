"use strict";
const socialposts = {
    templateUrl: "app/socialPosts/socialPosts.html",
    controller: [function () {
        const vm = this;
        vm.listposts = [
        {   title: "Today is Wednesday",
            thought: "I can't wait for this day to be over with."
        },
        {
            title: "Tomorrow is Thursday",
            thought: "Awwwww I HATE Valentines day!!"
        },
        {
            title: "Next day is Friday",
            thought: "IT'S FRIDAY, FRIDAY GOTTA GET DOWN ON FRIDAAAAYY"

        },

        ];

        vm.addPost = function(newPost) {
            vm.listposts.push( {...newPost});
            console.log(newPost)
            vm.formToggle = false;
            document.getElementById("input1").value = "";
            document.getElementById("input2").value = "";
        }
        vm.removePost = function(index){
            vm.listposts.splice(index, 1);
        }

        vm.showForm = function() {
          vm.formToggle = true;
          console.log(vm.formToggle)
          };
    }]

}


angular
.module("SocialPosts")
.component("socialposts", socialposts);