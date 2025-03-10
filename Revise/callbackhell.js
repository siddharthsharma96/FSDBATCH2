setTimeout(() => {
  console.log("in setTimeout");
}, 3000);

console.log("hello world");
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

//   function 3

function getComment(postId, calbackfn) {
  setTimeout(() => {
    console.log("User Fetched", postId);
    calbackfn(["nice", "good posts"]);
  }, 3000);
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
