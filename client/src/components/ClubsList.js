import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getClubs,deleteClub} from '../actions/clubActions';
import PropTypes from 'prop-types'; 



class ClubsList extends Component {

    componentDidMount() {
        this.props.getClubs();
    };

    onDeleteClick = (id) => {
        this.props.deleteClub(id);
    };

    render() {
        const{clubs} = this.props.club;
        return(
            <Container>
            {/* <Button 
            color="dark"
            style={{marginBottem: '2rem'}}
            onClick =  {() => {
                const name = prompt('Enter Club Name');
                if (name) {
                    this.setState(state => ({
                        clubs: [...state.clubs, {id: uuid(), name}]
                    }));
                }
            }}> Add Club
            </Button> */}
            <ListGroup> 
            <TransitionGroup className="clubs-list"> 
            {clubs.map(({_id,name}) => (
                <CSSTransition key={_id} timeout={500} classNames = "fade">
                <ListGroupItem>
                <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick = {this.onDeleteClick.bind(this,_id)}
                >&times;</Button>
                {name}
                </ListGroupItem>
                </CSSTransition>
            ))}
            </TransitionGroup>
            </ListGroup>
            </Container>
        );
    }
}

ClubsList.propTypes = {
    getClubsL: PropTypes.func.isRequired,
    club: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    club: state.club 
});

export default connect(mapStateToProps,{getClubs,deleteClub } ) (ClubsList);