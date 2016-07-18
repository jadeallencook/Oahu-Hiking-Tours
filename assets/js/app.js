$(function () {
    // caching jQuery variables
    var $app = $('div#app');
    // creating customer 
    var customer = {
        name: null,
        email: null,
        phone: null,
        heart: false,
        guests: []
    };
    // load external hiking information
    var hikes = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'assets/js/hikes.json',
            'dataType': 'json',
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    // starting initial build
    $app.empty().append(
        '<div class="column">' +
        '<h4>Let\'s get started!</h4>' +
        '<input type="text" placeholder="Full Name" id="customer-name">' +
        '<input type="text" placeholder="Email Address" id="customer-name">' +
        '<input type="text" placeholder="Phone Number" id="customer-name">' +
        '<button>I am over over 18</button>' +
        '</div>'
    );
});