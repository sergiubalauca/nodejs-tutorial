const num1 = 5;
const num2 = 10;

addValues = () => {
    console.log(`sum is ${num1 + num2}`);
}

// if we have a fc call in the module, it's going to be invoked when required
addValues();
