/*
(function(document){
  
    var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

    // this function is what cycles the slides, showing the next or previous slide and hiding all the others
    var showCurrent = function(){
        var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
  
        // remove .show from whichever element currently has it 
        // http://stackoverflow.com/a/16053538/2006057
        [].forEach.call( $items, function(el){
            el.classList.remove('show');
        });
  
        // add .show to the one item that's supposed to have it
        $items[itemToShow].classList.add('show');    
    };

// add click events to prev & next buttons 
    document.querySelector('.next').addEventListener('click', function() {
        counter++;
        showCurrent();
    }, false);

    document.querySelector('.prev').addEventListener('click', function() {
        counter--;
        showCurrent();
    }, false);
  
})(document);
*/











    var counter = 0; // to keep track of current slide



function resetCounter(){
    counter = 0;
}

function getFigures() {
    // body...
    $items = document.querySelectorAll('.diy-slideshow figure'); // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides
    //console.log(counter);
}


    // this function is what cycles the slides, showing the next or previous slide and hiding all the others
    var showCurrent = function(){
        //var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show


        var itemToShow;
        if (counter < 0) {
            //itemToShow = Math.abs((counter%numItems)+numItems);
            itemToShow = Math.abs(counter%numItems) == 0? Math.abs(counter%numItems) : Math.abs((counter%numItems)+numItems);
        }else{
            itemToShow = Math.abs(counter%numItems);
        }
        console.log("counter: "+counter+" - itemToShow: "+itemToShow);
        //console.log(itemToShow);
  
        // remove .show from whichever element currently has it 
        // http://stackoverflow.com/a/16053538/2006057
        [].forEach.call( $items, function(el){
            el.classList.remove('show');
        });
  
        // add .show to the one item that's supposed to have it
        $items[itemToShow].classList.add('show');    
    };

// add click events to prev & next buttons 
    //document.querySelector('.next').addEventListener('click', function() {
    //    counter++;
    //    showCurrent();
    //}, false);


    function toNext(){
        counter++;
        showCurrent();
    }

    //document.querySelector('.prev').addEventListener('click', function() {
    //    counter--;
    //    showCurrent();
    //}, false);

    function toPrev(){
        counter--;
        showCurrent();
    }






