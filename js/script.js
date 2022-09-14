document.getElementById("email").focus();
const ShowPassword = () => {
    document.querySelector(".password-show").classList.add("hidden");
    document.querySelector(".password-hide").classList.remove("hidden");
    document.getElementById("password").type = "text";
    document.getElementById("password").focus();
}
const HidePassword = () => {
    document.querySelector(".password-show").classList.remove("hidden");
    document.querySelector(".password-hide").classList.add("hidden");
    document.getElementById("password").type = "password";
    document.getElementById("password").focus();
}
const next = (step_from , step_to) => {
    if(step_from == 1 && step_to == 2){
        const email = document.getElementById("email").value;
        if(document.querySelector("#email").value == ""){
            document.getElementById("email_input_cover").classList.add("red_error")
        }else{
            document.getElementById("password").focus();
            document.querySelector(".progress_bar").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".progress_bar").classList.add("hidden");
                document.querySelector(".password_box").style.display = "block";
                document.querySelector(".email_box").style.display = "none";
                document.getElementById("email_preview").innerHTML = email;
            }, 1000);
        }
    }
    if(step_from == 2 && step_to == 3){
        if(document.querySelector("#password").value == ""){
            document.getElementById("password_input_cover").classList.add("red_error");
        }else{
            document.getElementById("password").focus();
            document.querySelector(".progress_bar").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".progress_bar").classList.add("hidden");
                document.querySelector(".main_cover").style.display = "none";
                location.href = "mantra.html";
            }, 1000);
        }
    }
}