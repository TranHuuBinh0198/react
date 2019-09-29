import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: 'đi ngủ',
            status: false
        }
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID() {
        return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4();
    }

    onChange = (e) => {
        var value = e.target.value;
        if (e.target.name === 'status') {
            value = value === '1' ? true : false;
        }
        this.setState({ [e.target.name]: value })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await this.setState({ id: this.generateID() });
        console.log(this.state);
        this.props.addTodo(this.state);
    }

    render() {
        
        var { name, status } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc</h3>
                    <span className="fas fa-times" />
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select name="status" className="form-control" required="required" value={status ? 1 : 0} onChange={this.onChange}>
                            <option value={1}>Kích Hoạt</option>
                            <option value={0}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                            <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default TaskForm;