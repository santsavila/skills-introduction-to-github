document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
    
    // Messages configuration (for internationalization)
    const MESSAGES = {
        EMPTY_FIELDS: 'Por favor, complete todos los campos.',
        USERNAME_MIN_LENGTH: 'El usuario debe tener al menos 3 caracteres.',
        PASSWORD_MIN_LENGTH: 'La contraseña debe tener al menos 6 caracteres.',
        LOGIN_SUCCESS: '¡Inicio de sesión exitoso! Bienvenido, ',
        LOGIN_ERROR: 'Usuario o contraseña incorrectos.'
    };

    // Demo mode: credentials are validated client-side for demonstration only
    // In production, authentication should always be handled server-side
    function validateDemoCredentials(username, password) {
        // This is intentionally a simple demo validation
        // Real authentication must use secure server-side validation
        return username === 'admin' && password === 'admin123';
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        // Clear previous messages
        messageDiv.className = 'message';
        messageDiv.textContent = '';
        
        // Basic validation
        if (!username || !password) {
            showMessage(MESSAGES.EMPTY_FIELDS, 'error');
            return;
        }
        
        if (username.length < 3) {
            showMessage(MESSAGES.USERNAME_MIN_LENGTH, 'error');
            return;
        }
        
        if (password.length < 6) {
            showMessage(MESSAGES.PASSWORD_MIN_LENGTH, 'error');
            return;
        }
        
        // Check credentials (demo purposes only)
        if (validateDemoCredentials(username, password)) {
            showMessage(MESSAGES.LOGIN_SUCCESS + username, 'success');
            // In a real application, you would redirect to another page
            // window.location.href = '/dashboard';
        } else {
            showMessage(MESSAGES.LOGIN_ERROR, 'error');
        }
    });
    
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;
    }
    
    // Clear message when user starts typing
    document.getElementById('username').addEventListener('input', clearMessage);
    document.getElementById('password').addEventListener('input', clearMessage);
    
    function clearMessage() {
        messageDiv.className = 'message';
        messageDiv.textContent = '';
    }
});
