//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const name = document.getElementById('name').value;

    if (!age || !name) {
        alert('Please fill out all fields');
        return;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                alert('Welcome, ' + name + '. You can vote.');
                resolve();
            } else {
                alert('Oh sorry ' + name + '. You aren\'t old enough.');
                reject();
            }
        }, 4000);
    });

    promise.then(() => {
        // Code to execute on successful form submission
    }).catch(() => {
        // Code to execute if form submission fails
    });
});