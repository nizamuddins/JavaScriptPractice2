const string = 'javascript learning';

const base64 = btoa(string);

console.log(base64);

const str = atob(base64)
console.log(str)