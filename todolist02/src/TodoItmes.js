import React,{Component} from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component{

    constructor(props){

        super(props);
        this.createTask = this.createTask.bind(this);
        this.delete = this.delete.bind(this);
    }

    // 創建待辦事項
    createTask(item){
        return (
            <li key={item.key} className="list-group-item" style={{ marginTop:'15px'}}
                onClick = {(e) => this.delete(item.key,e)}>
                {item.text}
            </li>
        )
    }

    // 刪除待辦事項
    delete(key){
        this.props.delete(key); // 呼叫父元素的 delete 函數
    }

    // 渲染待辦事項
    render(){

        var entries = this.props.entries;
        var listItems = entries.map(this.createTask);

        return(
            <ul className="list-group">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        )
    }
}

export default TodoItems