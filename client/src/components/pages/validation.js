import React from 'react'

export default function validation() {

    let errors = {};

    if(!values.firstName){
        errors.firstName="Please enter first name"
    }
    if(!values.lastName){
        errors.lastName="Please enter last name"
    }
    if(!values.email){
        errors.email="Please enter an email"
    }
    if(!values.password){
        errors.password="Please enter a password"
    }




    return (
        <div>
        </div>
    )
}

