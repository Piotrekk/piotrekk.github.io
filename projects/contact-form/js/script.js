$(document).ready(function(){
  
  // Declare input values variables
  var nameFormValue;
  var emailFormValue;
  var messageFormValue;

  // Set error messages divs
  var nameFormError = $('#ct-name-error');
  var emailFormError = $('#ct-email-error');
  var messageFormError = $('#ct-message-error');

  // Set inputs
  var nameFormInput = $('#ct-name-input');
  var emailFormInput = $('#ct-email-input');
  var messageFormInput = $('#ct-message-input');

  // Set a Regular Expression to check if an email is in correct format
  var re = new RegExp("([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))");

  $('#ct-send-button').click(function(e){
    e.preventDefault();

    // Set entered input values
    nameFormValue = $('#ct-name-input').val();
    emailFormValue = $('#ct-email-input').val();
    messageFormValue = $('#ct-message-input').val();

    // Set this variables to false in order to check if value is ready to send
    var ifName = false;
    var ifEmail = false;
    var ifMessage = false;

    // Check 'NAME' input
    if (nameFormValue) {
      nameFormError.transition({'opacity': '0', 'top': '92px', 'visibility': 'hidden'});
      nameFormInput.transition({'background-color': 'transparent'});
      ifName = true;
    } else {
      nameFormError.transition({'visibility': 'visible', 'top': '62px', 'opacity': '1'});
      nameFormInput.transition({'background-color': 'rgb(244, 105, 105'});
      ifName = false;
    }

    // Check 'EMAIL' input
    if (emailFormValue) {
      var testEmail = re.test(emailFormValue);

      if (testEmail) {
        emailFormError.transition({'opacity': '0', 'top': '187px', 'visibility': 'hidden'});
        emailFormInput.transition({'background-color': 'transparent'});
        ifEmail = true;
      } else {
        emailFormError.transition({'visibility': 'visible', 'top': '157px', 'opacity': '1'});
        emailFormInput.transition({'background-color': 'rgb(244, 105, 105'});
        ifEmail = false;
      }
    } else {
      emailFormError.transition({'visibility': 'visible', 'top': '157px', 'opacity': '1'})
      emailFormInput.transition({'background-color': 'rgb(244, 105, 105'});
      ifEmail = false;
    }

    // Check 'MESSAGE' input
    if (messageFormValue) {
      messageFormError.transition({'opacity': '0', 'top': '282px', 'visibility': 'hidden'})
      messageFormInput.transition({'background-color': 'transparent'});
      ifMessage = true;
    } else {
      messageFormError.transition({'visibility': 'visible', 'top': '252px', 'opacity': '1'})
      messageFormInput.transition({'background-color': 'rgb(244, 105, 105'});
      ifMessage = false;
    }

    // If inputs are correct, email is ready to send
    if (ifName == true && ifEmail == true && ifMessage == true) {
      $('#ct-send-button').transition({'width': '262px', 'background-color': 'rgb(108, 195, 160)'}).val('Thank you for your email')
    }
  });

});
