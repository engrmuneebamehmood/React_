//understanding resuability
//understanding props

import 'bulma/css/bulma.css'
import Profilecard from "./Profilecard";

//when we import images, we must add their extension

import AlexaImg from "./images/alexa.png"
import SiriImg from "./images/siri.png"
import CortonaImg from "./images/cortana.png"

//console.log(AlexaImg);
//console.log(SiriImg);

function Simplepage()
{
    return (
        
// instead of writng separately ,we will use one reusable component here
/*

        <div>
            
                <h1> Sisters</h1>
            <div>
            <img />
            <h3> Muneeba</h3>
            </div>


            <div>
            <img />
            <h3> Tuba</h3>
            </div>


            <div>
            <img />
            <h3> Iqra</h3>
            </div>
`               <img src={AlexaImg} />;
                <img src={SiriImg} />;
                <img src={CortonaImg} />;

            </div>
            */

            <div>
                <section class="hero is-primary">
                    <div class="hero-body">
                        <p class="title">
                        <h1> Personal Data Assistants </h1>
                        <h2>  These all are props :title, twitter , myimage, description </h2>
                        </p>
                        <p class="subtitle">
                      <h2>Muneeba Mehmood</h2>
                        </p>
  </div>
</section>
           
          
        
        <div className='container'>
            <div className='section'>
                <div className='columns'>

                    <div className='column is-4'>
                    <Profilecard 
                        title = "Alexa"
                        twitter ="@alexa7" 
                        myimage ={AlexaImg}
                        description="Alexa was created by amazon."
                      />
                    </div>

                    <div className='column is-4'>
                    <Profilecard 
                        title = "Siri"
                        twitter ="@siri26" 
                        myimage ={SiriImg}
                        description="Siri was created by apple."
                        />
                    </div>

                    <div className='column is-4'>

                    <Profilecard 
                        title = "Cortona" 
                        twitter ="@cortona14" 
                        myimage ={CortonaImg}
                        description="Cortona was created by microsoft."
                      />

                    </div>
                </div>
            </div>
        </div>
                
               
                
             
            </div>
    )

}
export default  Simplepage;