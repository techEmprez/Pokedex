renderPopup(data) {
    const res = data.meals[0];

    const id = res.idMeal;
    const thumb = res.strMealThumb;
    const name = res.strMeal;
    const category = res.strCategory;
    const area = res.strArea;
    const recipie = res.strSource;

    const popup = document.getElementById('reservation__data-content');
    this.removePopup();

    let html = `
    <img src='${thumb}' alt="Image of ${name}">
    <h2>${name}</h2>
    <div id='resPopup--dish-description'>
      <div class='rpdd-item'>
        <p>Category:</p>
        <p>${category}</p>
      </div>
      <div class='rpdd-item'>
        <p>Origin:</p>
        <p>${area}</p>
      </div>
      <div class='rpdd-item'>
        <a href='${recipie}' target="_blank">Recipie</a>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </div>
    </div>
    `;
    html += this.AddShowRes.renderForm();
    this.AddShowRes.getReservations(id);
    popup.insertAdjacentHTML('afterbegin', html);

    const form = document.getElementById('submit-reservation');
    form.addEventListener('submit', (e) => {
      const formData = new FormData(e.target);

      e.preventDefault();
      this.AddShowRes.submitForm(formData, e.target, id);
      form.reset();
    });
  }

  openPopup = (e) => {
    document.body.classList.add('popup-open');
    document.body.insertAdjacentHTML('afterbegin', `
    <div id='reservationPopup'>
      <div id='reservation-p__container'>
        <div id='reservation__container'>
            <div id='reservation__closeBtn'>
              <div id='r__cBtn-lines'></div>
            </div>
            <div id='reservation__data-content'></div>
          </div>
      </div>
    </div>
    `);

    this.apidata(e.target.dataset.name);
    this.removePopup();
  };