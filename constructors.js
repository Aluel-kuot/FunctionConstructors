

// question1
//quiz1
function Car(make,model,year,isAvailable){
    this.make=make;
    this.model=model;
    this.year=year;
    this.isAvailable=isAvailable;
    this.toggleAvailable=function(){
        console.log(isAvailable=true ||false)
    }
};
let toyota=new Car("Toyota","Camry",2000,"Available for rent");
console.log({toyota})

// quiz2

function Rental(car,renterName,rentalStartDate,rentalEndDate){
    this.car=car;
    this.rentalname=renterName;
    this.rentalStartDate=rentalStartDate;
    this.rentalEndDate=rentalEndDate;
    this.calculteRentalDuration=function(){
        let rentalDuartion=rentalEndDate-rentalStartDate;
        console.log(rentalDuartion)
    }
};
let car=new Rental("Nissan","Alice",new Date(`2022/8/20`),new Date(`2023/3/10`));
console.log({car})


// quiz3

class Audi extends Car{
    constructor(make,model,year,isAvailable){
    super(make,model,year,isAvailable);
    }
}
let audi=new Audi('audi',"x5",2015,'isAvailable');
console.log({audi});



class Proboc extends Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
    super(car,renterName,rentalStartDate,rentalEndDate);

    let rentalDuartion=rentalEndDate-rentalStartDate;
    console.log(rentalDuartion)
    }
};
 let probox=new Rental("Probox","James",new Date (`2021/6/2`),new Date(`2022/3/10`));
 console.log({probox})


// question2
//quiz1
function Questions(text,options,correctAnswers){
    this.text=text;
    this.options=options;
    this.correctAnswers=correctAnswers;
    this.checkAnswer=function(){
        // console.log("correct"=true ||false)
    }
};
 let question=new Questions("When is today?",["Tuesday","Wednesday","Monday"],"Tuesday")
 console.log({question})


//  quiz2
// Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the

function Quiz(questions,currentQuestionIndex,score){
    this.questions=question;
    this.currentQuestionIndex=currentQuestionIndex;
    this.score=score;
    this.addQuestion=function(
        
    ){
    }
    this.nextQuestion=function(){

    }
    this.currentQuestion=function(){

    }
    this.submitQuestion=function(){

    }
};
 let quiz=new Questions([{1:"Which is the tallest mountain in the world"},{2:"How many countries are in Africa"}]
 [2],20)
 console.log({quiz})
 



