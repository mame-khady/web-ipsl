function validateForm() {
    var form = {}; //JavaScript doesn't have associate arrays, thus use Objects instead;

    // select only those form fields that are marked required and are visible to the user
    var reqformFields = $('input,textarea,select').filter('[required]:visible').serializeArray();

    //Check each required filled and alert the user if necessary
    for (i = 0; i < reqformFields.length; i++) {
        if (reqformFields[i].value === "") {
            alert(reqformFields[i].name + " is empty");
            //set focus on the element;
            $("#" + reqformFields[i].name).focus();
            return false;
        }
    }

    //Check to see if email is of a valid format
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/.test($('input[name="email"]').val())) {
        alert("You have entered an invalid email address!");
        $("#email").focus();
        return false;
    }

    return true;
}

// Handle form submit
$("#submit").click(function(e) {
    e.preventDefault();

    if (validateForm()) {
        //query endpoint to send a form;
        alert("All good!");
    }
});