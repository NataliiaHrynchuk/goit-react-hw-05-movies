import React from "react";
import * as SC from './SearchForm.style';

export default function SearchForm({ onSubmit }) {            
    const handleSubmit = event => {
        event.preventDefault();
        
        if (!event.currentTarget.elements.query.value) {
            alert('Enter movies name');
        return;
        }
        onSubmit(event.currentTarget.elements.query.value);
        event.currentTarget.reset();
    };

    return (
        <SC.SearchForm onSubmit={handleSubmit}>
            <SC.SearchFormInput
                type="text"
                name="query"
                autoFocus
                utocomplete="off"
            />
            <SC.SearchFormBtn type="submit">
                Search
            </SC.SearchFormBtn>
    </SC.SearchForm>
    )
};
