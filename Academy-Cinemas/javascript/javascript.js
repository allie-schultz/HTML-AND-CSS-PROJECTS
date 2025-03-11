//initialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc +"'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

//initiallize toast
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})

//function to display toast with selected options
function displaySelectedMovieOptions() {
    var movieSelect = document.getElementById('movieSelect');
    var timeSelect = document.getElementById('timeSelect');
    var movie = movieSelect.options[document.getElementById('movieSelect').selectedIndex].text;
    var time = timeSelect.options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;
    
    //display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets() {
    var movieSelect = document.getElementById('movieSelect');
    var timeSelect = document.getElementById('timeSelect');

    //added if statement to decide wether an alert should display or a toast should display
    //toast shows ticket choices, alert informs user to fill out choices before buying tickets
    if (movieSelect.value !== 'Select Movie' && timeSelect.value !== 'Select Time') {
        displaySelectedMovieOptions();
    } else {
        alert('Please select ticket info before proceeding.', 'warning');
    }
}


var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.innerHTML = '';
    alertPlaceholder.append(wrapper)
}