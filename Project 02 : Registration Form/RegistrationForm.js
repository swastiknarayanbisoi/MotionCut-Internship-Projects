document.addEventListener("DOMContentLoaded", function() {
    function validateForm() {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmpassword').value;
        var valid = true;

        // Reset errors
        document.getElementById('usernameerror').textContent = '';
        document.getElementById('emailerror').textContent = '';
        document.getElementById('passworderror').textContent = '';
        document.getElementById('confirmpassworderror').textContent = '';

        // username
        if(username === '') {
            document.getElementById('usernameerror').textContent = 'Username is required';
            valid = false;
        }

        // email
        if(email === '') {
            document.getElementById('emailerror').textContent = 'Email is required';
            valid = false;
        } else if(!/\S+@\S+\.\S+/.test(email)) {
            document.getElementById('emailerror').textContent = 'Email is invalid';
            valid = false;
        }

        // password
        if(password === '') {
            document.getElementById('passworderror').textContent = 'Password is required';
            valid = false;
        }

        // confirm password
        if(confirmPassword === '') {
            document.getElementById('confirmpassworderror').textContent = 'Confirming password is required';
            valid = false;
        } else if(password !== confirmPassword) {
            document.getElementById('confirmpassworderror').textContent = 'Passwords do not match';
            valid = false;
        }

        return valid;
    }

    document.querySelector('.FormFill').addEventListener('submit', function(e) {
        e.preventDefault(); 
        if(validateForm()) {
            this.submit();
        }
    });
});
