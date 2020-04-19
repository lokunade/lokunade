function myNumber(num) {
    let int = []
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            int.splice(0, 1, "yu")
        }
        elseif(i % 3 === 0) {
            int.splice(0, 1, "gi")
        }
        elseif(i % 5 === 0) {
            int.splice(0, 1, "oh")
        }
        elseif(i % 2 === 0 && i % 3 === 0) {
            int.splice(0, 1, "yu-gi")
        }
        elseif(i % 2 === 0 && i % 5 === 0) {
            int.splice(0, 1, "yu-oh")
        }
        elseif(i % 3 === 0 && i % 5 === 0) {
            int.splice(0, 1, "gi-oh")
        }
        elseif(i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            int.splice(0, 1, "yu-gi-oh")
        } else {
            int.push(i);
        }
    }
    console.log(int)
    return int;
}
myNumber.call(100);
console.log(myNumber);
myNumber.call(95);