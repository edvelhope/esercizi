function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Joe")
  .then((data1) => console.log(data1))
  .catch((reject1) => console.log(reject1))
  .then(() => luckyDraw("Caroline"))
  .then((data2) => console.log(data2))
  .catch((reject2) => console.log(reject2))
  .then(() => luckyDraw("Sabrina"))
  .then((data3) => console.log(data3))
  .catch((reject3) => console.log(reject3));
