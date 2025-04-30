document.getElementById('copyEmail').addEventListener('click', function () {
    const email = 'maxwelllajoie@gmail.com'; // Replace with your actual email
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
});