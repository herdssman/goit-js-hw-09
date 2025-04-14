let formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");

const input = document.querySelector("input");

const textarea = document.querySelector("textarea");

const localStorageKey = "feedback-form-state";


const savedData = localStorage.getItem(localStorageKey);
if (savedData) { 
    formData = JSON.parse(savedData);
    input.value = formData.email || '';
    textarea.value = formData.message || '';
}

form.addEventListener("input", event => {
    const { name, value } = event.target;
    if (name in formData) {
        formData[name] = value.trim();
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
});

form.addEventListener("submit", event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem(localStorageKey);

    formData = { email: '', message: '' };
    
    form.reset();
});








