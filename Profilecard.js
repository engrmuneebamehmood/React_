//making a one resuable component
//understanding props
//we can write like this too
// <div>Name : {props.title} </div>
//<div>twitter : {props.twitter} </div>

//but here i am using destructuring approch
//i am passing props name in function argument

function Profilecard({title, twitter,myimage,description})
{
return (
        <div>
            <div className="card"></div>
            <div className="card-image"></div>


            <figure className="image is-1by1">
                < img src ={myimage} alt=" PDA logo" />
            </figure>

           <div className="card-content">
            <div className="media-content">
        
                <p className= "title is -4" > Name : {title} </p>
                <p className= "subtitle is -6" > Twitter : {twitter} </p>
                
                </div>
                <div className="content"> {description} </div>

           </div>
        </div>
   
 
    


)
}
export default Profilecard;