document.addEventListener('DOMContentLoaded', () => {
    // Find the button and the stylesheet link element in the HTML.
    const styleToggleBtn = document.getElementById('style-toggle-btn');
    const stylesheet = document.getElementById('stylesheet');

    // This function updates the stylesheet link and saves the choice.
    const setStyleSheet = (styleName) => {
        stylesheet.setAttribute('href', styleName);
        localStorage.setItem('selectedStyle', styleName);
    };

    // When the page loads, check if a style was previously saved.
    const savedStyle = localStorage.getItem('selectedStyle');
    if (savedStyle) {
        // If a style is saved, apply it.
        stylesheet.setAttribute('href', savedStyle);
    } else {
        // Otherwise, default to the modern style (style1.css).
        stylesheet.setAttribute('href', 'style1.css');
    }

    // Add a click listener to the button.
    if(styleToggleBtn) {
        styleToggleBtn.addEventListener('click', () => {
            // Check which stylesheet is currently active.
            const currentStyle = stylesheet.getAttribute('href');
            
            // Swap to the other stylesheet.
            if (currentStyle === 'style1.css') {
                setStyleSheet('style3.css');
            } else {
                setStyleSheet('style1.css');
            }
        });
    }
});
