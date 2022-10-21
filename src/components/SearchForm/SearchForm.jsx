import {useState} from 'react';
import PropTypes from 'prop-types';
import React from "react";
import * as SC from './SearchForm.style';

export default function SearchForm({ onSubmit }) {  
    const [query, setQuery] = useState('');

    const handleChangeQuery = event => {
        setQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();
        
        if (query.trim() === '' ) {
            alert('Enter the name of the movie');
        return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <SC.SearchForm onSubmit={handleSubmit}>
            <SC.SearchFormInput
                type="text"
                value={query}
                autoFocus
                placeholder="Enter the name of the movie"
                onChange={handleChangeQuery}
            />
            <SC.SearchFormBtn type="submit">
                Search
            </SC.SearchFormBtn>
    </SC.SearchForm>
    )
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};