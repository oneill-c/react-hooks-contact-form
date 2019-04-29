export const sectionTitle = 'Contact Us';
export const nameFieldTitle = 'Company / Name';
export const budgetFieldsTitle = 'Budget';
export const messageFieldTitle = 'Message';
export const submitButtonText = 'Submit';

export const budgetOptions = [
    { label: 'Please select your budget', value: '' },
    { label: 'Up to £1000', value: 1000 },
    { label: 'Up to £2000', value: 2000 },
    { label: 'Up to £4000', value: 4000 },
    { label: 'Up to £6000', value: 6000 },
    { label: '£6000 +', value: 6001 },
];

export const formConfig = {
    fields: {
        name: '',
        budget: '',
        message: ''
    },
    url: '/contact',
    method: 'POST'
};