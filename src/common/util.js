
let checkRepeat = [];
const util = (min, max) => {
    let newId =  Math.trunc(Math.random() * (max - min));
    if (checkRepeat.includes(newId)) {
        util(min, max)
    } else {
        return newId;
    }
}

export default util
