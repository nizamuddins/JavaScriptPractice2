const filename = 'index.js';

const myFunc1 = (file)=>{


    const file_name = file.split('.').pop();


    return file_name;

}

console.log(myFunc1(filename))