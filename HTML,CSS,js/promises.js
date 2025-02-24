const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let sucess = true;
    if (sucess) {
      resolve("operation was sucesful");
    } else {
      reject("Operation was not succesful");
    }
  }, 200);
});

// chaining process | .then & .catch

myPromise
  .then((reult) => {
    console.log("sucess inside .then=", reult);
  })
  .catch((eror) => {
    console.log("Error is this", eror);
  });

//   Async and Await
async function a() {
  try {
    let response = await myPromise;
    console.log("In async and await =", response);
  } catch (err) {
    console.log("in async", err);
  } finally {
    console.log("hi");
  }
}
a();

//   example codes

//   function 3

function getComment(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User Fetched", postId);
      resolve(["nice", "good posts"]);
    }, 3000);
  });
}
// functio1
function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User Fetched", userId);
      resolve({ id: userId, title: "ronit" });
    }, 2000);
  });
}

// function2
function getPost(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("id Fetched", userId);
      resolve({ id: userId, title: "1st post" });
    }, 4000);
  });
  console.log("outside");
}

getUser(1)
  .then((user) => {
    console.log(user);
    return getPost(user.id);
  })
  .then((posts) => {
    console.log(posts);
    return getComment(posts.id);
  })
  .then((Comment) => {
    console.log(Comment);
  })
  .catch((error) => {
    console.log(error);
  });

const FetchFb = async () => {
  try {
    let user = await getUser(1);
    console.log("in async", user);
    let postss = await getPost(user.id);
    console.log(postss);
    let comment = await getComment(postss.id);
    console.log(comment);
  } catch (err) {
    console.log(err);
  }
};

FetchFb();

// how to fetch api
async function FetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
FetchData();
