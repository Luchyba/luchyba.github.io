/*
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxi3ZZNlra0LR4Po_O4aGUu-vtBKXu4AC4hlSlVhq2TwcOy8n05y2xtx75giv2lf7M6/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById(msg)
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML= "Message sent sussfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
      </script>*/

      /*<script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxi3ZZNlra0LR4Po_O4aGUu-vtBKXu4AC4hlSlVhq2TwcOy8n05y2xtx75giv2lf7M6/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
      </script>*/