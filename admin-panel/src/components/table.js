import React,{ Component } from 'react';



class InfoTable extends Component  {
  
  render(){
    return(
 
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.getData.length > 0 ? 
                    (
                        this.props.getData.map(e => 
                            <tr key = {e._id}>
                                <td>{e.Name}</td>
                                <td>{e.Age}</td>
                                <td><button className="btn btn-primary" size="sm"
                                onClick = {event =>{
                                     this.props.setData(e);
                                }}>Edit</button></td>
                                <td><button className="btn btn-primary" size="sm"
                                 onClick = {event =>{
                                    this.props.del(e);
                               }}>Delete</button></td>
                            </tr>
                        )  
                    )
                    :
                    (
                        <tr>
                            <td>No Data</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    );
  }
}
export default InfoTable;
