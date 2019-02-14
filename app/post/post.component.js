"use strict";

const post = {
    bindings: { 
        removePost: "&",
        listpost: "<",


    },
    templateUrl: "app/post/post.html",
}





angular
.module("SocialPosts")
.component("post", post);