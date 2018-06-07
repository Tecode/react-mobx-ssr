export default function combineServerData(allStore, data) {
  const keyArr = Object.keys(allStore);
  keyArr.map((key) => {
    if (allStore[key].combineServerData) {
      allStore[key].combineServerData(data[key]);
    }
  });
}
