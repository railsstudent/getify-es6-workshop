Number.prototype[Symbol.iterator] = function *() {
  for (let i = 0; i <= this; i++) {
    yield i;
  }
};

var obj = [...20];
for (let n of obj) {
  console.log(n);
}
