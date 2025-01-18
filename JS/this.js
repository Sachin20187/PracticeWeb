const student = {
    name: "aman",
    marks: 95,
    property: this,
    getName: function(){
        console.log(this);// this----> student{}
        return this.name;// output---> 'aman'
    },
    getMarks: () => {
        console.log(this);// this---> Window {}
        return this.marks;// output---> undefined
    },
    getInfo1: function(){
        
        setTimeout(() => {
            console.log(this);// student
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function (){
            console.log(this);// Window
        }, 2000);
    },    
};
const a = 5;
student.getName();
// this----> {name: 'aman', marks: 95, property: Window, getName: ƒ, getMarks: ƒ}
// output---> 'aman'

student.getMarks();
// this---> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// output---> undefined

student.getInfo1();
// this----> {name: 'aman', marks: 95, property: Window, getName: ƒ, getMarks: ƒ}

student.getInfo2();
// this---> Window {window: Window, self: Window, document: document, name: '', location: Location, …}