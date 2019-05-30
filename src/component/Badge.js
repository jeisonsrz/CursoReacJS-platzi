import React from 'react';
import confLogo from '../images/logoConf.svg';
import './styles/Badge.css';


class Badge extends React.Component{
render(){
    

    const firstName = "Jeison";
    const lastName = "Ruiz"

    return <div className="Badge">

    <div className="Badge__header">
        <img src={confLogo} alt="Logo conferencia" />
    </div>

    <div className="Badge__section-name">
        <img className="Badge__avatar"src={this.props.avatarUrl} alt="Avatar"/>
        <h1>{this.props.firstName}<br />{this.props.lastName}**<br /> Eureka!</h1>
    </div>

    <div className="Badge__section-info">
        <h3>{this.props.jobTItle}</h3>
        <div>@{this.props.twitter}</div>
    </div>

    <div className="Badge__footer">
        #Impresión 3D
    </div>
    </div>
}
}

export default Badge;