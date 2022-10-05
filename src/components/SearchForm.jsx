import React from "react";
import { useState } from "react";
import * as SC from './SearchForm.style';




export default function SearchForm({ onSubmit }) {
    const [query, setQuery] = useState('');
                
    const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
    };
        
    const handleSubmit = event => {
    event.preventDefault();
    if (query === ' ') {
        alert('Enter movies name');
        return;
    }
    onSubmit(query);
    setQuery(' ');
    };

    return (
        <SC.SearchForm onSubmit={handleSubmit}>
            <SC.SearchFormInput
                type="text"
                name="imagesName"
                value={query}
                onChange={handleNameChange}
                autoFocus
                utocomplete="off"
                placeholder=""
            />
            <SC.SearchFormBtn type="submit">
                Search
            </SC.SearchFormBtn>
    </SC.SearchForm>
    )
};
