import React from 'react';
import styled from 'styled-components';

import {
    nameFieldTitle,
    budgetFieldsTitle,
    messageFieldTitle,
    submitButtonText,
    budgetOptions,
    formConfig
} from '../contact-us/constants'

import { useForm } from '../../hooks/use-form';

const ContactForm = (props) => {
    const [
        formFields,
        updateField,
        handleSubmit
    ] = useForm(formConfig);

    const {
        name,
        budget,
        message
    } = formFields;

    return (
        <form className={props.className} onSubmit={handleSubmit}>
            <label htmlFor="name">{nameFieldTitle}</label>
            <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={updateField}
                placeholder="Please enter your company name"
                required
            />

            <label htmlFor="budget">{budgetFieldsTitle}</label>
            <select
                id="budget"
                type="select"
                name="budget"
                value={budget}
                onChange={updateField}
                placeholder="Please select your budget"
                required
            >
                {budgetOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>

            <label htmlFor="message">{messageFieldTitle}</label>
            <input
                id="message"
                type="textarea"
                name="message"
                value={message}
                onChange={updateField}
                placeholder="Tell us about your idea and we will get back to you as soon as possible"
                required
            />

            <button>{submitButtonText}</button>
        </form>
    );
};

export default styled(ContactForm)`
    display: flex;
    flex-direction: column;
    margin: 0px 50px 0px 50px;
`;
