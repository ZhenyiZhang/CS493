import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { searchClubs, getClubs } from '../actions/clubActions';

class SearchModal extends Component {
    state = {
        modal: false,
        name: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // const refreshed = () => new Promise(
    //     (resolve, reject) => {
    //         if (this.props.getClubs()) {
    //             resolve(true);
    //         } else {
    //             reject(false);
    //         }
    //     }
    // )

    onSubmit = e => {
        e.preventDefault();

        this.props.searchClubs(this.state.name);

        // Close modal
        this.toggle();
    };

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '1rem' }}
                    onClick={this.toggle}
                >
                    Search
        </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Search a Club by Name</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="name"
                                    id="club"
                                    placeholder="Input Club Name"
                                    onChange={this.onChange}
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Search
                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    club: state.club
});

export default connect(
    mapStateToProps,
    { searchClubs,getClubs }
)(SearchModal);