var form = document.getElementById("reservationForm");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML =`
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Thank you for your reservation! One of our staff members will contact you shortly.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
          Oops! There was a problem submitting your form
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        }
      })
    }
  }).catch(error => {
    status.innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
    Oops! There was a problem submitting your form
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  });
}
form.addEventListener("submit", handleSubmit)