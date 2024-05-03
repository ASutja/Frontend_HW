const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let link = '';

    button1.addEventListener('click', function() {
        link = prompt('Enter the link to the website');
    });

    button2.addEventListener('click', function() {
        if (link) {
            window.location.href = link; 
        } 
        else {
            alert('Please enter the link first.'); 
        }
    });