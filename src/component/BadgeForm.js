import React from 'react'

class BadgeForm extends React.Component{
   // state={};

   /* handleChange = (e) =>{
       /* console.log({
            name: e.target.name,            
            value: e.target.value});
            console.log(e.target.value) */
     /*   this.setState({
            [e.target.name]: e.target.value
        })
};*/

    handleClick = (e) =>{
        console.log("Botton Guardar")
     }
     handleSubmit = (e) =>{
         e.preventDefault();
         console.log("Form was sobmit")
         console.log(this.state)
     }

    render(){
        return (
           <div>
               <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Primer Nombre</label>
                        <input onChange={this.props.onChange}
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValues.firstName}/>
                    </div>

                    <div className="form-group">
                        <label>Segundo Nombre</label>
                        <input onChange={this.props.onChange}
                        className="form-control" 
                        type="text" 
                        name="LastName"
                        value={this.props.formValues.LastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange}
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange}
                        className="form-control" 
                        type="text" 
                        name="jobTitle"/>
                        <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange}
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter}/>
                    </div>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
              </div>
        )
    }
}

export default BadgeForm;