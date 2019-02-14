"use strict";

const postform = {
    bindings: {
        formToggle: "<",
        showForm: "&",
        addPost: "&",
    },
    templateUrl: "app/postForm/postForm.html",

}




angular
.module("SocialPosts")
.component("postform", postform);


