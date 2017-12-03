import React,{Component} from 'react';
import TodoItems from './TodoItmes';

class TodoList extends Component{

    constructor(props){
        
        super(props);

        this.state = {
            items : []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        e.preventDefault();

        var itemArray = this.state.items;

        // 把資料新增至陣列的第一個元素前
        itemArray.unshift({
            text: this._inputElement.value,
            key : Date.now()
        });

        // 設定狀態
        this.setState({items:itemArray});

        // 清空 input 元素欄位的資料
        this._inputElement.value = '';
        
        console.log(itemArray);
    }

    deleteItem(key){

        var filteredItem = this.state.items.filter(function(item){
            return (item.key !== key);
        });

        this.setState({items:filteredItem});
    }

    render(){
        return(
            <div style={{padding:'150px'}} className="container">
                <div className="row">
                    <div className="offset-md-4 col-md-8">
                        <form className="form-inline" onSubmit = {this.addItem}> 
                            <input type="text" className="form-control" 
                                    placeholder="請輸入待辦事項" 
                                    ref = { (input) => { this._inputElement = input;}}/>
                            <button style={{marginLeft:'10px'}} 
                                    type="submit" className="btn btn-primary">新增</button>
                        </form>
                    </div>
                </div>
                <div className="row" style={{paddingTop:'15px'}}>
                    <div className="offset-md-4 col-md-8">
                        <TodoItems entries = {this.state.items} delete = {this.deleteItem}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;