
function Input(){
    
    //return <input type="number" />;
    
    //const inputType="number";
    //const minValue=7;
    //return <input type={inputType} min= {minValue}></input>
        
    
    //we can write without defining variables
/*
    const message="I am trying props"
        
        return(
            
                <input
                type="number"
                min={7}
                max={20}
                list={[10,100,1000]}
                style={{color:"purple"}}
                alt={message}
                />
             

        )
        
        */

    //return <input style ={{border:'3px solid red '}} type="number" min={5}/>

    //html to jsx

    return <input 
    maxLength={5}
    spellCheck={false}
    style={{border:'1px solid blue'}}
    
    />
        

}

export default Input;
    
