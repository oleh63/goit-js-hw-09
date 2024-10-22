let formData = {
    email: '',
    message: ''
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.getElementById('feedback-form');
const emailInput = form.elements["email"];
const messageTextarea = form.elements['message'];

function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email || '';
        messageTextarea.value = formData.message || '';

    }
}

function saveFormData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));   
}

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    saveFormData();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {
        email: '',
        message: ''
    };
});

document.addEventListener("DOMContentLoaded", loadFormData);