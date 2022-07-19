// 1
// const sayHello = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello world");
//     }, 2000);
//   });
// };

// const waitForResult = async () => {
//   const result = await sayHello();
//   console.log(result);
// };

// waitForResult();

// 2
const getTemperature = () => {
    return new Promise((resolve, reject) => {
      const temperature = 2;
  
      setTimeout(() => {
        if (temperature <= 10) {
          resolve("il fait froid");
        } else {
          reject("il fait chaud");
        }
      }, 4000);
    });
  };
  
  const waitForTemperature = async () => {
    try {
      console.log("j'execute mon code");
      const result = await getTemperature();
      console.log(result);
    } catch (error) {
      console.log("blabla");
      console.log(error);
    }
  };
  
  waitForTemperature();
  
  // 3
  // const doLaundry = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("J'ai fini la lessive");
  //     }, 3000);
  //   });
  // };
  
  // const doDishes = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("J'ai fini la vaisselle");
  //     }, 1500);
  //   });
  // };
  
  // const clean = async () => {
  //   console.log("Je commence la lessive...");
  //   const result = await doLaundry();
  //   console.log(result);
  
  //   console.log("Je commence a faire la vaisselle");
  //   const result2 = await doDishes();
  //   console.log(result2);
  
  //   console.log("J'ai fini de faire le menage");
  // };
  
  // clean();