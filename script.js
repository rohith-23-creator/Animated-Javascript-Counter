const counters = document.querySelectorAll(".counter");//getting all the elements with class of counter in the DOM as Nodelist

const countSpeed = 250 ; //Higher the countSpeed Value, lower the speed of counting

counters.forEach(counter => {
   const incDOM = () => {
       const target = +counter.getAttribute("data-target"); //getting the target attribute which we set 
       const count = +counter.innerHTML //getting the innertext  in which we have to fill the count 
       
       inc = target / countSpeed ; //incrementing the values

       if(count < target ){
           counter.innerHTML = Math.ceil(count + inc)
           setTimeout(incDOM , 1)  //calling the function to run counter
       }else{
           counter.innerHTML = target
       }
   }

   incDOM()
});

