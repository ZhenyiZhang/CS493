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
import { addClub } from '../actions/clubActions';

class ClubModal extends Component {
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

  onSubmit = e => {
    e.preventDefault();

    const newClub = {
      name: this.state.name
    };

    // Add item via addItem action
    this.props.addClub(newClub);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Club
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Club List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="club">Join Habitat</Label>
                <Input
                  type="text"
                  name="name"
                  id="club"
                  placeholder="Input Club Name"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add
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
  { addClub }
)(ClubModal);