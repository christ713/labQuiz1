document.getElementById("showButton").addEventListener("click", function () {

    document.getElementById("displayName").textContent =
        document.getElementById("fullName").value;

    document.getElementById("displayEmail").textContent =
        document.getElementById("email").value;

    document.getElementById("displayAge").textContent =
        document.getElementById("age").value;

    document.getElementById("displayBirthday").textContent =
        document.getElementById("birthday").value;

    document.getElementById("displayPhone").textContent =
        document.getElementById("phone").value;

    document.getElementById("displayAddress").textContent =
        document.getElementById("address").value;

    document.getElementById("displayCourse").textContent =
        document.getElementById("course").value;

    document.getElementById("displaySchool").textContent =
        document.getElementById("school").value;

    document.getElementById("displayHobby").textContent =
        document.getElementById("hobby").value;

    document.getElementById("displayCountry").textContent =
        document.getElementById("country").value;

    const gender =
        document.querySelector('input[name="gender"]:checked');

    document.getElementById("displayGender").textContent =
        gender ? gender.value : "";

});
