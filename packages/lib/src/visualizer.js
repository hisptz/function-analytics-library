import React from 'react';
import ReactDOM from 'react-dom';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';


const data = [['attribute', 'attribute2'], ['value1', 'value2']];
const Visualizer=()=>{
    <PivotTableUI
    data={data}
    />
}

export default Visualizer;