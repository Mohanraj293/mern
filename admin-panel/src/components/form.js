import React,{ Component } from 'react';



class InfoForm extends Component  {
  constructor(){
    super();
    this.state={ 
        _id:"",
        Name:"",
        Age:"",
        isEdit:false
    }
  }

  infoChange = event => {
      const {name,value} = event.target;

      this.setState({
          [name] : value
      })
 }
infoSubmit = event =>{
    if(!this.state.isEdit){
      event.preventDefault();
      let data = {
          isEdit:this.state.isEdit,
          Name: this.state.Name,
          Age: this.state.Age
      }
      this.props.myData(data);
    }
    else{ 
        let data = {
        isEdit:this.state.isEdit,
        _id:this.state._id,
        Name: this.state.Name,
        Age: this.state.Age
    }
    this.props.myData(data);

    }
}
  componentWillReceiveProps(props){
      if(props.setForm._id != null){
          this.setState({
              isEdit:true,
               _id:props.setForm._id,
              Name: props.setForm.Name,
              Age: props.setForm.Age
          })
      }
  }
  render(){
    return(
            <form onSubmit= {this.infoSubmit} autoComplete="off">
                <h3>Form</h3>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" placeholder="Enter name"
                    onChange = {this.infoChange}
                    name = "Name"
                    value = {this.state.Name}
                    />
                </div>
                <div className="form-group">
                    <label >Age:</label>
                    <input type="text" className="form-control" placeholder="Enter age"
                    onChange = {this.infoChange}
                    name = "Age"
                    value = {this.state.Age}
                    />
                </div>
                <button type="submit" className="btn btn-primary">{
                    this.state.isEdit ? 'Update' : 'Add Student'
                }
                </button>
 </form>
    );
  }
}
export default InfoForm;
