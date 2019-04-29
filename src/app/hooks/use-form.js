import { useState } from 'react';
import axios from 'axios';

export const useForm = config => {
    const [ formFields, setValue ] = useState(config.fields);

    const reset = () => {
        setValue(config.fields);
    }

    const updateField = e => {
        setValue({
            ...formFields,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        const {
            url,
            method,
        } = config;

        const submitForm = async (url, method, data) => {

            try {
                await axios({ url, method, data });
                reset();

            } catch(err) {
                alert(err);
            }
        }
    
        submitForm(url, method, formFields);
    }

    return [
        formFields,
        updateField,
        handleSubmit
    ];
}