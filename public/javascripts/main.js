function loginUser() {
  let url = 'https://mission-bend-activity-tracker.herokuapp.com/login';
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", url, true);
  xhttp.send();
}
