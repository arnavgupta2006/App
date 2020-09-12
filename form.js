class Form {
constructor(){
    this.greeting = createElement("h3");
    this.input = createInput("Write the city name");
    this.submit = createButton("Submit");
};

getState(){
    var citiesRef  = database.ref('cities/');
    citiesRef.on("value",function(data){
       cities = data.val();
    })
}    

display (){
    var title = createElement("h2");
    title.html("Pollution Tracker");
    title.position(400,30);

    
    this.greeting.html("Greetings. Welcome to Pollution Tracker");
    this.greeting.position(60,100);

    
    this.input.position(250,200);
    this.submit.position(425,200);
    

}
}