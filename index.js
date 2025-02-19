document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const downloadLink = document.querySelector('a');
    const image = document.querySelector('img');

    // Add click effect to the download link
    downloadLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent immediate navigation/download
        downloadLink.style.transform = 'scale(0.95)';
        setTimeout(function() {
            downloadLink.style.transform = 'scale(1)';
            // Trigger the download after the click animation
            window.location.href = downloadLink.getAttribute('href');
        }, 100);
    });

    // Add hover effect to the image
    image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    });

    image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });

    // Add a visual cue for download progress
    const progressBar = document.createElement('div');
    progressBar.style.cssText = 'width: 0; height: 4px; background: #3498db; position: fixed; top: 0; left: 0; transition: width 0.5s linear;';
    document.body.appendChild(progressBar);

    window.addEventListener('beforeunload', function() {
        progressBar.style.width = '100%';  // Simulate download progress
    });

    window.addEventListener('load', function() {
        // Reset progress bar when page loads (useful if user refreshes or comes back)
        progressBar.style.width = '0';
    });
});