// Validation form on slide 4

function ValidateForms() {
    let message = {
        loading: '<img src="./img/ajax-loader.gif">',
        success: '<img src="./img/success.svg">',
        failure: '<img src="./img/error.svg">'
    };

    let form = document.querySelector('.form'),
        scheduleForm = document.querySelector('.form__schedule'),
        input = document.querySelectorAll('.form__item input'),
        scheduleInput = document.querySelectorAll('.form__block div input'),
        statusIcon = document.createElement('div');

    console.log('Input length:' + scheduleInput.length);

    function sendJSONData(element, status, inputs) {
        element.addEventListener('submit', function(e) {
            e.preventDefault();
            statusIcon.classList.add(status);
            let formStatus = element.querySelector('.form__status');
            formStatus.appendChild(statusIcon);
            let formData = new FormData(element);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve();
                        }
                        else if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        }
                    }
                    request.send(data);
                });
            }

        function clearInput() {
            inputs.forEach(function(element) {
                element.value = '';
            })
        }

        postData(formData)
                        .then(() => statusIcon.innerHTML = message.loading)
                        .then(() => statusIcon.innerHTML = message.success)
                        .catch(() => statusIcon.innerHTML = message.failure)
                        .then(clearInput);
        });
    }

    sendJSONData(form, 'status-abs', scheduleInput);
    sendJSONData(scheduleForm, 'status-abs', input);
}

module.exports = ValidateForms;
    
