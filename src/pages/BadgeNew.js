import React from 'react';
import Navbar from '../component/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../component/Badge';
import BadgeForm from '../component/BadgeForm';

class BadgeNew extends React.Component {
    state={form:{
        firstName:'',
        lastName:'',
        email: '',
        jobTitle: '',
        twitter: '',
    }};

    handleChange = e => {
        /*const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value;*/
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }
    render(){
        return(

         <div>
             <Navbar/>
             <div className="BadgeNew__hero">
             <img className="img-fluid" src={header} alt="Logo"></img>
             </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <Badge firstName={this.state.form.firstName}
lastName={this.state.form.lastName}
jobTitle={this.state.form.jobTitle} 
twitter={this.state.form.twitter}
email={this.state.form.email}
avatarUrl="https://www.gravatar.com/avatar?d=identicon"
/>
                    </div>
                    <div className="col-6">
                <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                    </div>
                </div>
            </div>

         </div>

        )
    }
}

export default BadgeNew;