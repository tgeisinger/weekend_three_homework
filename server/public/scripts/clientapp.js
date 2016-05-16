$(document).ready(function() {
    var values = {};
    var form = document.getElementById("inputForm");



    $('#add').on('click', function() {
        grabValues();
        postAdd();
        updateDomAdd();



    });
    $('#subtract').on('click', function() {
        grabValues();
        postSubtract();
        updateDomSubtract();


    });

    $('#multiply').on('click', function() {
        grabValues();
        postMulti();
        updateDomMulti();

    });

    $('#divide').on('click', function() {
        grabValues();
        postDivide();
        updateDomDivide()


    });

    $('#clear').on('click', reset);

    function reset() {
        form.reset();
        $('#answer-container').empty();

    }




    // Grabs values that user enters in form.
    function grabValues() {
        event.preventDefault();
        $.each($('#inputForm').serializeArray(), function(i, field) {
            values[field.name] = field.value;
            console.log(values);
        });

    }

    function postAdd() {
        $.ajax({
            type: 'POST',
            url: '/add',
            data: values,
            success: function(response) {
                console.log('post sent');
                console.log(values);

            }
        });
    }

    function postSubtract() {
        $.ajax({
            type: 'POST',
            url: '/subtract',
            data: values,
            success: function(response) {
                console.log('post sent');
                console.log(values);

            }
        });
    }

    function postMulti() {
        $.ajax({
            type: 'POST',
            url: '/multi',
            data: values,
            success: function(response) {
                console.log('post sent');
                console.log(values);

            }
        });
    }

    function postDivide() {
        $.ajax({
            type: 'POST',
            url: '/divide',
            data: values,
            success: function(response) {
                console.log('post sent');
                console.log(values);

            }
        });
    }

    function updateDomAdd() {
        $.ajax({
            type: 'GET',
            url: '/add',
            success: function(response) {
                $('#answer-container').text(parseInt(response[0]) + parseInt(response[1]));

                console.log("get received");
                console.log(response);
            }
        });
    }

    function updateDomSubtract() {
        $.ajax({
            type: 'GET',
            url: '/subtract',
            success: function(response) {

                $('#answer-container').text(parseInt(response[0]) - parseInt(response[1]));
                console.log("get received");
                console.log(response);
            }
        });
    }

    function updateDomMulti() {
        $.ajax({
            type: 'GET',
            url: '/multi',
            success: function(response) {

                $('#answer-container').text(parseInt(response[0]) * parseInt(response[1]));
                console.log("get received");
                console.log(response);
            }
        });
    }

    function updateDomDivide() {
        $.ajax({
            type: 'GET',
            url: '/divide',
            success: function(response) {

                $('#answer-container').text(parseInt(response[0]) / parseInt(response[1]));
                console.log("get received");
                console.log(response);
            }
        });
    }
});
