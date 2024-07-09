import SilverPicture from '../img/silver.png';
//reference data.js for the Sonic Data and summon the parameters from the file
import {hello, silverData} from "../data/data";

function Silver() {
    return(
      <div>
        <h1>
          {hello}, {silverData.name}
        </h1>
        <h2> 
          code key: pending release
        </h2>
        <h3>
          {silverData.name} lives in {silverData.area}
        </h3>
        <ul>
            {silverData.activities.map(
              (activity) => (
                <li>{activity}</li>
            ))}
        </ul>
        <figure>
          <figcaption>
            This is an image of Silver:
          </figcaption>
           <br />
           {/* <img src={sonicData.image} alt={sonicData.alt} /> */}
           {/* putting the src and alt into the character object */}
          <img src={SilverPicture} alt={silverData.alt} />
          {/* importing the picture using a component */}
        </figure>
      </div>
    )
  }

export default Silver;