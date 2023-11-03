import React, { useState } from 'react';



function ColorPicker() {
    const colours =['red','green','blue','yellow','pink','aqua','darkgoldenrod','darkmagenta','beige','seagreen','orange','teal','sienna','black'];

    const [tableBackgroundColor, setTableBackgroundColor] = useState('');
    const[showColorList, setShowColorList] = useState(false);
    
    const handleColorClick = (color) => {
      setTableBackgroundColor(color);
      setShowColorList(false);
    };


        const colorArray = colours.map((color,index)=>{
            return(
              <span
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></span>
            )
          });
    
    
    const onClick = () => {
        setShowColorList(!showColorList);
        setTableBackgroundColor('white');
        
    }
    return (
        <div>
            <center>
              <table className='outer'>
              <thead>
                <tr>
                  <th>Color Picker</th>
                </tr>
              </thead>
              <tbody>
              <tr>
              <td>
            <center>
                  <table className='inner' style={{ backgroundColor: tableBackgroundColor }}>
                    <tbody>
                    <tr>
                      <button onClick={onClick}  className='button button-info' >Pick a color</button>
                      {showColorList && (
                        colorArray
                      )}
                    </tr>
                    </tbody>
                    
                  </table>
                  </center>
                </td>
              </tr>
              
              </tbody>
             </table>
              </center>
            </div>
    );       
}
    


export default ColorPicker;
