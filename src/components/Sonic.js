import SonicPicture from '../img/sonic.png'; // importing the picture directly
//reference data.js for the Sonic Data and summon the parameters from the file
import {hello, sonic, one, two, sonicData} from "../data/data";
function Sonic() {
    return (
      <div>
         <h1>
          {hello}, {sonic}
        </h1>
        <h2> 
          {/* generate a code key 3-122 */}
          code key:
          {one + two}
          {one - two}
          {one * two}
          {two / one}
        </h2>
        <h3>
          {sonicData.name} lives in {sonicData.area}
        </h3>
        <ul>
            {sonicData.activities.map(
              (activity) => (
                <li>{activity}</li>
            ))}
  
          {/* use the map function to iterate over arrays */}
          {/* 
           <li>
            {sonicData.activities[0]}  
          </li>
          <li>
            {sonicData.activities[1]}  
          </li>
          <li>
            {sonicData.activities[2]}  
          </li>
          */}
        </ul>
        <figure>
          <figcaption>
            This is an image of Sonic:
          </figcaption>
          {/* <img src={require("./img/sonic.png")} alt={"Sonic the Hedgehog"} />  */}
          {/* manually render an image without a component. 
          
          You attempted to import ../img/sonic.png which falls outside of the project src/ directory. Relative imports outside of src/ are not supported. 
          
          Use require to render an image dynamically instead of hard-coding the file path. 
          
          Doc: https://medium.com/@carlie.anglemire/requiring-images-in-react-9bcf6a8c2cb
          */}
           <br />
           {/* <img src={sonicData.image} alt={sonicData.alt} /> */}
           {/* putting the src and alt into the character object */}
          <img src={SonicPicture} alt={sonicData.alt} />
          {/* importing the picture using a component */}
  
        </figure>
      </div>
    )
  }

export default Sonic;