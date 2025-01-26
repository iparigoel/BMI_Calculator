const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector('#Height').value);
    const weight = parseFloat(document.querySelector('#Weight').value);
    const results = document.querySelector('#results');

    const underweightlimit = 18.6;
    const overweightlimit = 24.9;

    if(!height || height <= 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(!weight || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        
        let category = '';
        if (bmi < underweightlimit) {
            category = 'Underweight';
        }
        else if (bmi <= overweightlimit) {
            category = 'Healthy';
        }
        else {
            category = 'Overweight';
        }

        results.innerHTML = `<span> Your BMI is = ${bmi} (${category})</span>`;
    }

});