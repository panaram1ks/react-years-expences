import DiagramBar from "./DiagramBar"
import './Diagram.css'


const Diagram = (props) => {
    return (
        <div className="diagram">
            {props.dataSets.map(dataSet => <DiagramBar key={dataSet.lable} value={dataSet.value} maxValue={null} lable={dataSet.lable}/>)}
        </div>
    )
}

export default Diagram