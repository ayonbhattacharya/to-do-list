import React from 'react';

export default class  Task extends React.Component {
    state = {
        editing : false
    }
    notCompleted = {color: 'red'}
    completed = {color: 'green'}
    textInput = React.createRef();

    constructor(props) {
        super(props);
      }

      handleEdit = () => {
        this.setState({editing:true});
      }

      handleSave = () => {
        this.props.editTask(this.textInput.current.value);
        this.setState({editing:false});
        
      };



    render() {

       const  editingDiv = (<div className = 'DisplayTask'>
        <span className='TaskDisplayText' style={!this.props.taskCompleted ? this.notCompleted: this.completed}>{this.props.taskDescText} </span>
        <button label='Complete' className='TaskButton' onClick={this.props.handleComplete}> Complete</button>
        <button label='Edit' className='TaskButton' onClick={this.handleEdit}> Edit Task</button>
        <button label='Delete' className='TaskButton' onClick={this.props.deleteTask}> Delete Task</button>
        </div> );
    
        const nonEditingDiv = ( <div className = 'DisplayTask'>
        <input className='TaskDescEditInput' ref={this.textInput}/>
        <button label='Save' className='TaskButton' onClick={this.handleSave} > Save Task</button>
        <button label='Delete' className='TaskButton' onClick={this.props.deleteTask}> Delete Task</button>
        </div>);

    return (
    !this.state.editing ? editingDiv : nonEditingDiv
    )
};
}
