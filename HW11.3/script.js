let textColor = 'black'; 
        const textElement = document.getElementById('text');

        function changeColor() {
            textColor = textColor === 'black' ? '#03dffc' : 'black';
            textElement.style.color = textColor; 
        }