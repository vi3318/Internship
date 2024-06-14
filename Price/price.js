$(document).ready(function() {
    // Function to handle click event on the button
    $('.open-pdf-modal').click(function() {
        // Get the PDF URL from the data-pdf-url attribute
        var pdfUrl = $(this).data('pdf-url');
        
        // Open the PDF in a new window
        window.open(pdfUrl, '_blank');
    });
});
