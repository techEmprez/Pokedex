renderForm = () => `<form id='submit-reservation'>
<h3>Add a reservation</h3>
<div class="resPopupFormItem">
  <input type='text' required name="name" placeholder='Your name'>
</div>
<div class="resPopupFormItem">
  <input type='text' required name="res-popup-start-date" placeholder='Start date' onfocus="(this.type = 'date')">
</div>
<div class="resPopupFormItem">
  <input type='text' required name="res-popup-end-date" placeholder='End date' onfocus="(this.type = 'date')">
</div>
<button type='submit'>Reserve</button>
</form>
<h3 class='reservations-list-header'>
Reservations
<span id="reservations-counter"></span>
</h3>
<div id='reservations-list'>
</div>
`;