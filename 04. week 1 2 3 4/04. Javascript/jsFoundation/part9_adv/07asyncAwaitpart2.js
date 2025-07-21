function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched.");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data");
    // const postData = await fetchPostData();  //This is the old way of doing things.
    // const commentData = await fetchCommentData();
    const [postData, commentData] = await Promise.all([fetchPostData(),fetchCommentData() ]); //Promise.all
    //This is the new way of doing things. Used when we have multiple promises to resolve. It takes array as parameter which includes all functions to be executed that contains promises. As in this, we are passing 2 functions as parameters so there obvioisly will be 2 returns hence we need 2 variables which can store 2 returns and that's what explains LHS of above codeline
    console.log(postData);
    console.log(commentData);

    console.log("fetch complete");
  } catch (error) {   //One advice: Handle the errors first.
    console.error("Error fetching blog data", error); 
  }
}
getBlogData();



//Note: Promise chaining means using multiple .then() in a single function to handle promise.
//Promise.all handles multiple promises at once. it has nothing to do with chaining.

//Promise.all waits for all promises to resolved or one to be rejected.
