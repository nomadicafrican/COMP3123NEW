var p1 = new Promise((resolve, reject) => {
  if (a == 10) {
    var r = {
      status: true,
      message: "Success",
    };
    resolve(r);
  } else {
    reject("failure-1");
  }
});

p1.then(
  (result) => {
    console.log(result);
  },
  () => {
    console.log(error);
  }
);
