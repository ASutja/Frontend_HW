const container = document.getElementById('container');
    container.addEventListener('click', function(event){
        if(event.target.tagName === 'BUTTON'){
            const buttonClicked = event.target.textContent;
            alert(`Button ${buttonClicked} clicked!`);
        }
    })