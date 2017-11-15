import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

class DataViewerComponent extends Component {

    render() {
        return (
            <div className="DataViewer">
                <Paper zDepth={2} className="DataViewer_paper">
                    <List>
                        <ListItem primaryText="First name" secondaryText={this.props.firstName} />
                        <Divider />
                        <ListItem primaryText="Last name" secondaryText={this.props.lastName} />
                        <Divider />
                        <ListItem primaryText="Email" secondaryText={this.props.email} />
                    </List>
                </Paper>

                <RaisedButton label="Go back" secondary={true}
                              containerElement={<Link to="/" />} />
            </div>
        );
    }

}

export default DataViewerComponent;
