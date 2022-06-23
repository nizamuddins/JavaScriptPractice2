const P = [2, 5, 8, 1];
const w = [10, 15, 6, 9];
const PW = [];
for (let i = 0; i < P.length && i < w.length; i++) {
    PW.push((P[i] / w[i]).toFixed(1))
}
PW.sort((a, b) => {
    return b - a;
});
let M = 25;
let p = 0;
for (let i = 0; i < PW.length; i++) {
    for (let j = 0; j < P.length && j < w.length; j++) {
        if (PW[i] === (P[j] / w[j]).toFixed(1)) {
            if (M > 0 && w[j] <= M) {
                M = M - w[j];
                p = p + P[j];
            } else if (M > 0) {
                p = p + P[j] * M / w[j];
                M = 0;
            }
        }
    }
}
console.log(p)
