/* Run this in the console to generate a random password;cryto.randomUUID() will not work in http environment */
let a=[];[...crypto.randomUUID().replace(/[^0-9a-z]/g, '')].forEach(c=>a.push(((Math.random()*10)<5?(isNaN(parseInt(c))?c.toUpperCase():'!#$^&*'.split('')[Math.floor(Math.random()*10)]):c)));console.log(a.join(''));
