const myObject = {
    city: 'liver pool',
    greet() {
            console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet();