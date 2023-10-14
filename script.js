function clockIn() {
    var fullName = document.getElementById("fullName").value;
    var position = document.getElementById("position").value;
    var department = document.getElementById("department").value;
    var staffId = document.getElementById("staffId").value;

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zero if the number is less than 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeIn = hours + ":" + minutes + ":" + seconds;

    var clockDiv = document.getElementById("clock");
    clockDiv.innerText = `Hello, ${fullName}! You clocked in at: ${timeIn}\nPosition: ${position}\nDepartment: ${department}\nStaff ID: ${staffId}`;
    $('#clockInModal').modal('hide');

}


function clockOut() {
    var fullName = document.getElementById("fullName").value;
    var staffId = document.getElementById("staffId").value;

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zero if the number is less than 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeOut = hours + ":" + minutes + ":" + seconds;

    var clockDiv = document.getElementById("clock");
    clockDiv.innerText = `Goodbye, ${fullName}! You clocked out at: ${timeOut}\nStaff ID: ${staffId}`;
    $('#clockOutModal').modal('hide');

}
