import React, {} from "react";

export const UserForm = ({onFormSubmit}) => {
 
    // const submitHadler = (event) => {
    //     event.preventDefault();
    //     console.log('form submit', event.target.elements.Avatar);
    //     userData.get('LastName');
    //     const userData = new FormData(event.target);  // .get('Name');
    // };


    return (
        <form onSubmit={onFormSubmit}>
            <input name="first_name" placeholder="user name"/>
            <input name="lastName" placeholder="user lastName"/>
            <input name="Email" placeholder="user email"/>
            <input name="Avatar" placeholder="user avatar"/>
            <input type='submit' value="add user"/>
        </form>
    )
}