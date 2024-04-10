function languge(){
    let firstName = 'html',
        secondName = 'css',
        thirdName = 'javasript'
return{
    firstName,
    secondName,
    thirdName
};
}
let { firstName, secondName, thirdName} = languge();
console.log(firstName);
console.log(secondName);
console.log(thirdName);