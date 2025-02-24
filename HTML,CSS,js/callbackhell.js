// setTimeout(() => {
//   console.log("In SetTimeout code");
// }, 4000);
// setTimeout(() => {
//   console.log("In SetTimeout code 2");
// }, 0);
// let func = () => {
//   console.log("Hello world");
// };

// func();
// setTimeout(callbackfn,milliseconds)
// object({key:value})

//   function 3

function getComment(postId, calbackfn) {
  setTimeout(() => {
    console.log("User Fetched", postId);
    calbackfn(["nice", "good posts"]);
  }, 3000);
}
// functio1
function getUser(userId, calbackfn) {
  setTimeout(() => {
    console.log("User Fetched", userId);
    calbackfn({ id: userId, title: "ronit" });
  }, 2000);
}

// function2
function getPost(userId, calbackfn) {
  setTimeout(() => {
    console.log("id Fetched", userId);
    calbackfn({ id: userId, title: "1st post" });
  }, 4000);
}

getUser(1, (user) => {
  getPost(user.id, (post) => {
    getComment(post.id, (comment) => {
      console.log(user);
      console.log(post);
      console.log("comments", comment);
    });
  });
});
