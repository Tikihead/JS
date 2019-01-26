// UNCOMMENT TO SEE IN ACTION

window.addEventListener('load', function()
{    var bodybtn = document.querySelectorAll('button');
     bodybtn.forEach(function(e)
     {                
       if(!e.classList.contains('btn') )
       {   e.classList.add("btn");
           var myElement = document.querySelectorAll("button.btn"); 
           myElement.forEach(function(el)
           {  var options =           
             " width: 100px;" +
            	"height: 30px;" +	
            	"font-size: 15px;" +
            	"letter-spacing: .1em;" +
            	"color: orange;" + 
            	"text-shadow: 0 3px 0 rgba(255,255,255,.1);" +
            	"font-weight: bold;" +
            	"background-image: linear-gradient(#888 5%,#555 10%,#222);" +
            	"border-radius: 7px;" +
              "box-shadow: 3px 3px 7px #222, inset -4px -1px 5px #555;" ;
            el.style.cssText = options;
         });      
       }
     });
})

