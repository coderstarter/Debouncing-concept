<!DOCTYPE html>
<html>
  <!-- Please NOTE that the link to assets (like images) need to be set in global context.
For example:
To access an image from assets folder correct way to set src attribute is 

src = 'profile.png'

instead of 

src = './assets/profile.png'
-->
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div class="cell">
      <input type="text" id="input">
    </div>
  </body>
  <script>
    // Write your JS program here
    const input = document.getElementById('input');
    let timerid = null;
    function makeAPICall(search) {
      if(timerid) {
        clearTimeout(timerid);
      }
      timerid = setTimeout(() => {
        const date = new Date();
        console.log(`Making an API call for ${search} at ${date.getTime()}`);
      }, 2000)
    }
    input.addEventListener('keydown', (e) => {
      const value = e.target.value;
      makeAPICall(value);
    });
    console.log(input);
  </script>
</html>
