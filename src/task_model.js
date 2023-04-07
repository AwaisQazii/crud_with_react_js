export const TaskModel = (props) => {

    return <div className="Taks" style={{ backgroundColor: props.completed ? "green" : "white" }}>

        <heading> {props.name} </heading>
        <button onClick={() => props.deleteItem(props.id)}> delete </button> &nbsp;
        <button onClick={() => props.complete(props.id)}> completed </button>

    </div>

}