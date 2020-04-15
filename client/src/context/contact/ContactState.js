import React, { useReducer } from 'react';
import { v4 as uuidv4 } from "uuid";
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';
import contactContext from './contactContext';


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Sara Watson',
                email: 'sara@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Barry White',
                email: 'barry@gmail.com',
                phone: '333-333-3333',
                type: 'professional'
            }
        ]
    };

    // Now we pull out the state and dispatch from our reducer by using the useReducer Hook
    // State allow us to access anything is in our state and dispatch allow us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact
    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };



    // Delete contact

    // Set current contact

    // Clear current contact

    // Update contact

    // Filter contacts

    // Clear filter

    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts,
                addContact
            }}>
            {props.children}
        </contactContext.Provider>
    );
};

export default ContactState;