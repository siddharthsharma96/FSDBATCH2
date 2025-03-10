// setTimeout(() => {
//   console.log("121");
// }, 0);

// const myPromise = new Promise((resolve, reject) => {
//   let a = false;
//   if (a) {
//     resolve("Operation is succesful");
//   } else {
//     reject("Operatiuon is rejected");
//   }
// });
// myPromise
//   .then((res) => {
//     console.log("inside then   =", res);
//   })
//   .catch((err) => {
//     console.log("inside Catch   =", err);
//   });

// //   function 3

// function getComment(postId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("User Fetched", postId);
//       resolve(["nice", "good posts"]);
//     }, 3000);
//   });
// }
// // functio1
// function getUser(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("User Fetched", userId);
//       resolve({ id: userId, title: "ronit" });
//     }, 2000);
//   });
// }

// // function2
// function getPost(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("id Fetched", userId);
//       resolve({ id: userId, title: "1st post" });
//     }, 4000);
//   });
//   console.log("outside");
// }

// console.log("Inside .then");

// getUser(1)
//   .then((user) => {
//     console.log(user);
//     return getPost(user.id);
//   })
//   .then((posts) => {
//     console.log(posts);
//     return getComment(posts.id);
//   })
//   .then((Comment) => {
//     console.log(Comment);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const aa = async () => {
//   try {
//     const user = await getUser(1);
//     console.log(user);
//     const post = await getPost(user.id);
//     console.log(post);
//     const comment = await getComment(post.id);
//     console.log(comment);
//   } catch (err) {
//     console.log(err);
//   }
// };

// aa();

const FetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

FetchData();
