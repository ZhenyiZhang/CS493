import React, { Component } from 'react';
import {
    Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { getClubs } from '../actions/clubActions';

class FullListModal extends Component {

    toggle = () => {
        this.props.getClubs();
    };



    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '1rem' }}
                    onClick={this.toggle}
                >
                    See Full List
        </Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    club: state.club
});

export default connect(
    mapStateToProps,
    { getClubs }
)(FullListModal);