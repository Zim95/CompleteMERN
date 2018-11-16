const player = "bobby";
let experience = 100;

//here when we use var for wizard level, the wizard level changes to true
var wizardLevel = false;

if(experience>90){
    var wizardLevel = true;
}

console.log(wizardLevel);

//here when we use let for wizard level, the wizard level does not change
let wLevel = false;

if(experience>90){
    let wLevel = true;
}

console.log(wLevel); 

//This is because:
//When we use var: we can only create a scope inside of a function
//But not in case of an if else statement.
//When we use let: we can also create a scope in an ifelse
//Infact anyhere where there is a scope operator i.e. {}