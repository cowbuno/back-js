document.querySelector('form').addEventListener('submit', function(event) {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height!');
        event.preventDefault();
    }
});
