const year = prompt('In what year were you born?');

const age = 2024 - year; 

    if(year !== null){
        alert(`You are ${age} years old.`);
    }
    else{
        alert('It`s a pity that you didn`t want to answer about your city.');
    }

const city = prompt('what city do you live in?');

    if(city !== null){
    
        if(city === 'Kyiv'){
        alert('You live in the capital of Ukraine.');
        }
        else if(city === 'Washington'){
            alert('You live in the capital of USA.');
        }
        else if(city === 'London'){
            alert('You live in the capital of GB.');
        }
        else{
            alert(`You live in ${city}`);
        }
    }
    else{
        alert('It`s a pity that you didn`t want to answer about your city.');
    }

const sport = prompt('What kind of sport do you prefer: karate, wushu, wrestling?');

    if(sport !== null){

        if(sport === 'karate'){
            alert('Cool! Do you want to become Youssef Badawi?');
        }
        else if(sport === 'wushu'){
            alert('Cool! Do you want to become Bruce Lee?');
        }
        else if(sport === 'wrestling'){
            alert('Cool! Do you want to become Undertaker?');
        }
        else{
            alert('So you don`t like these types of sports.');
        }
    }
    else{
        alert('It`s a pity that you didn`t want to answer about sport.');
    }



