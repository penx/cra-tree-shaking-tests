import React from 'react';


const Chart = ({children}) => <table>
    <thead>
        <th>U</th>
        <th>Wot</th>
        <th>m8</th>
    </thead>
    <tbody>
        { children }
    </tbody>
</table>


const Row = ({name, value1, value2}) => <tr>
    <th>{name}</th>
    <td>{value1}</td>
    <td>{value2}</td>
</tr>

const FancyRow = ({name, value1, value2}) => <tr style={{color: 'red'}}>
    <th>Fancy {name}</th>
    <td>{value1}</td>
    <td>{value2}</td>
</tr>

const VeryFancyRow = ({name, value1, value2}) => <tr style={{textDecoration: 'underline overline line-through', color: 'rebeccapurple'}}>
    <th>Very Fancy {name}</th>
    <td>{value1}</td>
    <td>{value2}</td>
</tr>

export { Chart, Row, FancyRow, VeryFancyRow };

export default Chart;
