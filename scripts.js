document.addEventListener('DOMContentLoaded', () => {
    const modeToggleButton = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');

    if (localStorage.getItem('mode') === 'light') {
        document.body.classList.add('light-mode');
        modeIcon.src = 'moon-icon.png'; 
    } else {
        document.body.classList.add('dark-mode');
        modeIcon.src = 'sun-icon.png'; 
    }

    modeToggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('mode', 'light');
            modeIcon.src = 'moon-icon.png'; 
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
            modeIcon.src = 'sun-icon.png'; 
        }
    });
});
