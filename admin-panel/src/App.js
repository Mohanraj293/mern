import React,{ Component } from 'react';
import InfoForm from './components/form';
import InfoTable from './components/table';
import axios from "axios";


class App extends Component  {
  constructor(){
    super();
    this.state = {
      data:[],
      editData:[]
    }

  }

  create = data =>
  {
    if(!data.isEdit){
      axios.post("http://localhost:2000/students",data).then(res =>{
      this.getAll();
    })
  }
    else{
      axios.put("http://localhost:2000/students/update",data).then(res =>{
        this.getAll();
      })
    }
  }

  componentDidMount(){
    this.getAll();
  }
  getAll(){
    axios.get("http://localhost:2000/students").then(res => {
      this.setState({
        data:res.data
      })
    })
  }
  update = data =>{
    console.log(data);
    this.setState({
      editData:data
    })
  }
  del = data =>{
    var option = window.confirm(`Are you sure want to delelte the ${data.Name}`)
    if(option){
      axios.delete(`http://localhost:2000/students/delete/${data._id}`).then(res => {
       console.log("deleted");
       this.getAll();
      })
    }
  }
  render(){
    return(
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <InfoForm myData ={this.create} setForm = {this.state.editData}/>
          </div>
          <div className="col-6">
            <InfoTable getData={this.state.data} setData = {this.update} del = {this.del}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
