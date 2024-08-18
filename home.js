document.addEventListener('DOMContentLoaded', () => {
    const showLoginButton = document.getElementById('showLogin');
    const showSignUpFromLoginButton = document.getElementById('showSignUpFromLogin');
    const showLoginFromSignUpButton = document.getElementById('showLoginFromSignUp');
    const exitLoginButton = document.getElementById('exitLogin');
    const exitSignUpButton = document.getElementById('exitSignUp');
    const loginSection = document.getElementById('login');
    const signUpSection = document.getElementById('signUp');
    const sections = document.querySelectorAll('.section');
    
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const toggleSignUpPassword = document.getElementById('toggleSignUpPassword');
    const loginPassword = document.getElementById('login-password');
    const signUpPassword = document.getElementById('password');

    function togglePasswordVisibility(input, toggleButton) {
        if (input.type === 'password') {
            input.type = 'text';
            toggleButton.classList.replace('bx-show-alt', 'bx-hide');
        } else {
            input.type = 'password';
            toggleButton.classList.replace('bx-hide', 'bx-show-alt');
        }
    }

    toggleLoginPassword.addEventListener('click', () => {
        togglePasswordVisibility(loginPassword, toggleLoginPassword);
    });

    toggleSignUpPassword.addEventListener('click', () => {
        togglePasswordVisibility(signUpPassword, toggleSignUpPassword);
    });

    function showFormSection(formSection) {
        // Hide all content sections
        sections.forEach(section => section.classList.add('hidden'));
        // Hide the other form section if visible
        if (formSection === loginSection && signUpSection.style.display === 'flex') {
            signUpSection.style.display = 'none';
        } else if (formSection === signUpSection && loginSection.style.display === 'flex') {
            loginSection.style.display = 'none';
        }
        // Show the selected form section
        formSection.style.display = 'flex';
        // Ensure background is set to bg5.jpg
        document.body.classList.add('form-active');
    }

    function hideFormSections() {
        // Show all content sections
        sections.forEach(section => section.classList.remove('hidden'));
        // Hide both form sections
        loginSection.style.display = 'none';
        signUpSection.style.display = 'none';
        // Remove background adjustment
        document.body.classList.remove('form-active');
    }

    showLoginButton.addEventListener('click', () => showFormSection(loginSection));
    showSignUpFromLoginButton.addEventListener('click', () => showFormSection(signUpSection));
    showLoginFromSignUpButton.addEventListener('click', () => showFormSection(loginSection));
    exitLoginButton.addEventListener('click', hideFormSections);
    exitSignUpButton.addEventListener('click', hideFormSections);
});
