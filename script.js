
document.getElementById("dataContainer").style.display = 'none';
    var input = document.getElementById("search");
    var inputValue = input.value;

    function displayData () {
      document.getElementById("location").innerHTML = document.getElementById("search").value;
      document.getElementById("search").style.display = "none";
      document.getElementById("searchBtn").style.display = "none";
      document.getElementById("dataContainer").style.display = "block";

    }

    searchBtn.addEventListener('click', displayData);

    const apiKey = 'f07d78b71799499bb07225725241905';
    const apiURL = 'http://api.weatherapi.com/v1/current.json';
    const requestOptions = {
      method: 'GET',
      headers: {
      'Authorization': `Bearer ${apiKey}`,
      },
    };

    fetch(apiURL, requestOptions)
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
        })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
