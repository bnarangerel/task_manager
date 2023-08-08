const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.addEventListener("DOMContentLoaded", function() {
    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            console.log("Iishee orjinu");
            cur_status = "{{task.completed}}";
            console.log(cur_status);
            updateVariable(!cur_status);
            e.target.classList.toggle("checked");
        }
    }, false);
  });
fetch('/tasks/json/')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => console.error('Error:', error));

function updateVariable(newVariableValue) {
    const csrfToken = getCookie('csrftoken'); // Get the CSRF token to include in the AJAX request

    // Send the AJAX request
    fetch('/update_variable/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrfToken,
      },
      body: `new_value=${encodeURIComponent(newVariableValue)}`,
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log('Variable updated successfully.');
      } else {
        console.error('Error:', data.message);
      }
    })
    .catch(error => console.error('Error:', error));
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }