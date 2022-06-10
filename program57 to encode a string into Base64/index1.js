const string = 'javascript learning';

const base64 = window.btoa(string);

console.log(base64);
const str = window.atob(base64)
console.log(str)