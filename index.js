// Ex 1

const welcomePromise = () => {
    return new Promise(() => {
        setTimeout(() => {
            console.log('hello world');
        }, 2000);
	})
};

const waitForResult = async () => {
    const result = await welcomePromise()
    console.log(result)
  }
  
waitForResult()


// Ex 2

 

const checkTemperature = () => {
    return new Promise(() => {
    const temperature = 2

    setTimeout(() => {
      if (temperature <= 10) {
        console.log("Il fait froid")
      } else {
        console.log("Il fait chaud")
      }
    }, 4000)
})
};


const tempResult = async () => {
    const result = await checkTemperature()
    console.log(result)
  }
  
tempResult()


// Ex 3



const menageStatus = () => {
    return new Promise((resolve, reject) => {
        console.log("Je commence la lessive")
        setTimeout(() => {
            console.log("j’ai fini la lessive");
        }, 3000);
        console.log("Je commence  la vaisselle")
        setTimeout(() => {
            console.log("j’ai fini la vaisselle");
        }, 1500);

    })
}


const menageResult = async () => {
    const result = await menageStatus()
    console.log(result)
    console.log("J’ai fini de faire le ménage");
  }
  
menageResult()
