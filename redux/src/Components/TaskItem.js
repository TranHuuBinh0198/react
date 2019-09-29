import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        var { index, name, status } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td className="text-center">
                    {
                        status ? <span className="label label-success">
                            Kích Hoạt
                        </span>
                            :
                            <span className="label label-info">
                                Ẩn
                        </span>
                    }
                </td>
                <td className="text-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-warning">
                            <span className="fa fa-pencil mr-5">Sửa</span>
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger">
                            <span className="fa fa-trash mr-5">Xóa</span>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TaskItem;