document.addEventListener('DOMContentLoaded', () => {
    // --- Style Toggler ---
    const styleToggleBtn = document.getElementById('style-toggle-btn');
    const stylesheet = document.getElementById('stylesheet');
    const body = document.body;

    const setStyleSheet = (styleName) => {
        if (stylesheet) {
            stylesheet.setAttribute('href', styleName);
            localStorage.setItem('selectedStyle', styleName);
        }
    };

    const savedStyle = localStorage.getItem('selectedStyle');
    if (savedStyle && stylesheet) {
        stylesheet.setAttribute('href', savedStyle);
    } else if (stylesheet) {
        stylesheet.setAttribute('href', 'style1.css');
    }

    if(styleToggleBtn && stylesheet) {
        styleToggleBtn.addEventListener('click', () => {
            body.classList.add('fade-out');
            setTimeout(() => {
                const currentStyle = stylesheet.getAttribute('href');
                if (currentStyle === 'style1.css') {
                    setStyleSheet('style3.css');
                } else {
                    setStyleSheet('style1.css');
                }
                body.classList.remove('fade-out');
            }, 500);
        });
    }

    // --- Share Button Functionality ---
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            // Create a temporary textarea element to hold the custom URL
            const textArea = document.createElement('textarea');
            textArea.value = 'https://people.tamu.edu/~danielwu1510/index.html'; // Custom link
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy'); // Copy the URL
            document.body.removeChild(textArea);

            // Provide user feedback
            const originalText = shareBtn.textContent;
            shareBtn.textContent = 'Copied!';
            setTimeout(() => {
                shareBtn.textContent = originalText;
            }, 2000); // Revert text after 2 seconds
        });
    }

    // --- Download/Export Button Functionality ---
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Triggers the browser's print functionality
            window.print();
        });
    }

    // --- Social Media Button Functionality ---
    const twitterBtn = document.getElementById('twitter-btn');
    if (twitterBtn) {
        twitterBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the link from opening
            alert('lol I don\'t have a Twitter');
        });
    }
});

