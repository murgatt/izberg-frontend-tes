import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class FormComponent extends Component {

    render() {
        return (
            <div className="FormComponent">
                <Paper zDepth={2} className="FormComponent_paper">
                    <TextField onChange={(e) => this.changeHandler(e, 'firstName')}
                               defaultValue={this.props.firstName}
                               hintText="First name" underlineShow={false} style={{marginLeft: 20}} />
                    <Divider />

                    <TextField onChange={(e) => this.changeHandler(e, 'lastName')}
                               defaultValue={this.props.lastName}
                               hintText="Last name" underlineShow={false} style={{marginLeft: 20}} />
                    <Divider />

                    <TextField onChange={(e) => this.changeHandler(e, 'email')}
                               defaultValue={this.props.email}
                               hintText="Email" underlineShow={false} style={{marginLeft: 20}} />
                    <Divider />
                </Paper>

                <RaisedButton label="Submit" primary={true}
                              containerElement={<Link to="/data" />} />
            </div>
        );
    }

    changeHandler = (e, id) => {
        this.props.onChange(e.currentTarget.value, id);
    }

}

export default FormComponent;
