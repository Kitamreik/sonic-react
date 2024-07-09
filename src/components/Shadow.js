import ShadowPicture from '../img/shadow.png';
//reference data.js for the Sonic Data and summon the parameters from the file
import {hello, shadowData} from "../data/data";

function Shadow() {
    return(
      <div>
        <h1>
          {hello}, {shadowData.name}
        </h1>
        <h2> 
          code key: pending release
        </h2>
        <h3>
          {shadowData.name} lives in {shadowData.area}
        </h3>
        <ul>
            {shadowData.activities.map(
              (activity) => (
                <li>{activity}</li>
            ))}
        </ul>
        <figure>
          <figcaption>
            This is an image of Shadow:
          </figcaption>
           <br />
           {/* <img src={sonicData.image} alt={sonicData.alt} /> */}
           {/* putting the src and alt into the character object */}
          <img src={ShadowPicture} alt={shadowData.alt} />
          {/* importing the picture using a component */}
        </figure>
      </div>
    )
  }

export default Shadow;