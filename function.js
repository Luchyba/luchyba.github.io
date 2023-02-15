function opentab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function openmenu() {
    //document.getElementById("sidemenu").style.width = "200px";
    document.getElementById("sidemenu").style.right = "0";
  }
  
  /* Set the width of the side navigation to 0 */
  function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
  }
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxi3ZZNlra0LR4Po_O4aGUu-vtBKXu4AC4hlSlVhq2TwcOy8n05y2xtx75giv2lf7M6/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent sussfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })