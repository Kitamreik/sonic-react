//React Hooks
import React, {useState} from 'react'; //import React and state at the top
function DataInventory() {
    const [log, setLog] = useState({
      object_id: null,
      title: "Character Inventory Log",
      compileDate: "2024-05-15",
      updateDate: "2024-06-30",
      developer: {
        id: 1,
        name: "Kit Fenrir"
      }
    }) 
    return (
      <div>
         <h1>
            Hello, {log.developer.name}
          </h1>
          <ul>
            <li>
            {log.title}
            </li>
            <li>
              Compile Date: {log.compileDate}
            </li>
            <li>
              Revision Date: {log.updateDate}
            </li>
          </ul>
        {/* {log.map((log) => (
          <ul>
            <li>{log}</li>
          </ul>
        ))} */}
      </div>
    )
  }

export default DataInventory;