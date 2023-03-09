
const Counter = (props) => {
    
    function countUp() {
       
        setTimeout(function(){
            const counterItems = document.querySelectorAll('.counter')
        counterItems.forEach((counterItem) => {
            counterItem.innerText = "0"


            const updateCounter = () => {
            
              
                  
                    const target = +(counterItem.getAttribute('data-target'));
            
                    const counter = +(counterItem.innerText);
                    const increment = target/100;
               
                    if (counter < target){
                        counterItem.innerText = `${Math.ceil(counter + increment)}`
                        setTimeout((updateCounter), 75)
                    }
                  
              
        }
        updateCounter()
        })
    }, 80);
     }


    return <div >
    <span data-target={props.target} className="counter text-[160px]" onLoad={countUp()}>0</span>
    <h4 className="text-[24px] font-light">{props.children}</h4>

</div>


}

export default Counter;