import React, { useState } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor';

const ColorGenerator = () => {
    const [colorValue, setColorValue] = useState('');
    const [error, setError] = useState(false);
    const [colorList , setColorList] = useState([]);
    const generateColor = (e)=>{
        e.preventDefault();
        try {
            setError(false);
            const color = new Values(colorValue).all(10);
            setColorList(color);
            console.log(color);
        } catch (error) {
            setError(true);
        }
    }
  return (
    <>
        <div className="container mx-auto shadow p-4 rounded-4">
            <h2 className="text-center display-4">
                Generate Color
            </h2>
            <form>
                <div className="form-group">
                    <label htmlFor="" className='my-2 fw-bold text-warning'>Color</label>
                    <input value={colorValue} onChange={(e) => setColorValue(e.target.value)} className={`form-control ${error && "is-invalid"} `} type="text" placeholder='e.g., green' />
                </div>
                <button type="button" onClick={generateColor} className="btn btn-secondary w-100 my-2">Generate Color</button>
            </form>
        </div>

        <div className="container">
            <div className='row'>
            {colorList?.map((items,index)=>{
                return <SingleColor key={index} {...items} hex={items?.hex}/>
            })}
            </div>
        </div>
    </>
  )
}

export default ColorGenerator;