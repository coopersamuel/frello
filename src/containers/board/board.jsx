import React from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addList, editList, addCard, editCard, moveCard, deleteCard, toggleLabel } from '../../actions/actions';

import List from '../../components/list/list';
import { MdSentimentVerySatisfied } from 'react-icons/lib/md';
import './board.scss';
import index from '../../reducers';

const getColumn = (collection, column) => {
    /*
    *   This function handles organizing the collection of lists that is stored in state into four separate arrays for display
    *   This is necessary utility function to display in a masonry-esque format
    */

    let subArray = [];
    const keys = _.keys(collection);
    
    _.forEach(keys, (listId, index) => {
        if ((index - column) % 4 === 0) {
            subArray.push(collection[listId]);
        }
    });

    return subArray;
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            overlay: false,
            menuList: null,
            menuCard: null
        }

        this.submitList = this.submitList.bind(this);
        this.submitCard = this.submitCard.bind(this);
        this.addTrailingList = this.addTrailingList.bind(this);
        this.addTrailingCard = this.addTrailingCard.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    submitList(name, id, list) {
        if (!list.name) {
            this.addTrailingList();
        } else {
            document.getElementById(`input_${id}`).blur();
        }
        
        this.props.editList(name, id);
    }

    submitCard(message, cardId, list) {
        const card = _.find(list.cards, { 'id': cardId });

        if (!card.message) {
            this.addTrailingCard(list.id);
        } else {
            document.getElementById(`input_${cardId}`).blur();
        }
        
        this.props.editCard(message, list.id, cardId);
    }

    async addTrailingList() {
        // Add an empty list
        await this.props.addList(null); // Need to await the completion of this, otherwise you'll target the wrong list
        
        // Place the cursor in the new list
        const id = _.findLast(this.props.lists).id; // Grab the last list in the object
        const nextForm = document.getElementById(`input_${id}`);
        nextForm.focus();

        this.props.addCard(null, id); // Add an empty card to each list
    }

    async addTrailingCard(listId) {
        // Add an empty list
        await this.props.addCard(null, listId); // Need to await the completion of this, otherwise you'll target the wrong card
        
        // Place the cursor in the new list
        const id = _.findLast(this.props.lists[listId].cards).id; // Grab the last list in the object
        const nextForm = document.getElementById(`input_${id}`);
        nextForm.focus();
    }

    onMenuClick(listId = null, cardId = null) {
        this.setState({ 
            overlay: true,
            menuList: listId,   // Pass these to the lists and cards
            menuCard: cardId    // so that they will know if they're the menu list/card
        });
    }

    deleteCard(listId, cardIndex) {
        // First reset the overlay to default
        this.setState({ 
            overlay: false,
            menuList: null,   
            menuCard: null    
        });

        this.props.deleteCard(listId, cardIndex);
    }

    render() {
        const { lists } = this.props;

        return (
            <div className='container-fluid'>
                <div className='row justify-content-center pt-5'>
                    {!_.isEmpty(this.props.lists) &&
                        <div className='col-10'>
                            <div className='row'>
                                {_.times(4, (index) => {
                                    /* Print out four of these */
                                    return (
                                        <div key={`column_${index}`} className='col-sm-12 col-lg-3'>
                                            {_.map(getColumn(lists, index), (list) => {
                                                return (
                                                    <List   key={list.id} list={list} 
                                                            editList={(name, id) => this.submitList(name, id, list)} 
                                                            editCard={(message, id) => this.submitCard(message, id, list)}
                                                            moveCard={this.props.moveCard}
                                                            deleteCard={(listId, cardIndex) => this.deleteCard(listId, cardIndex)}
                                                            onMenuClick={this.onMenuClick}
                                                            menuList={this.state.menuList}
                                                            menuCard={this.state.menuCard}
                                                            toggleLabel={(listId, cardId, label) => this.props.toggleLabel(listId, cardId, label)} />
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                    {_.isEmpty(this.props.lists) && 
                        <div className='instructions mt-5'>
                            <div className='text-center py-4'><MdSentimentVerySatisfied size={60} /></div>
                            <div className="col-12 text-center">Welcome to frello! Let's start with your first list</div>
                            <div className='text-center pt-4'>
                                <button className='btn btn-light create-button' onClick={() => this.addTrailingList()}>CREATE LIST</button>
                            </div>
                        </div>
                    }
                </div>
                <div className={`${this.state.overlay ? 'overlay' : ''}`} onClick={() => this.setState({ 
                    overlay: false,
                    menuList: null,
                    menuCard: null
                })}></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addList,
        editList,
        addCard,
        editCard,
        moveCard,
        deleteCard,
        toggleLabel
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);