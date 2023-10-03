// Simulating a fake API call that returns data after a delay
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          name: "John",
          age: 25,
        };
  
        // Simulating a successful response
        resolve(data);
  
        // Simulating an error response
        // Uncomment this line to see the "reject" scenario
        // reject("Failed to fetch data");
      }, 2000); // Simulate a 2-second delay
    });
  }
  
  // Using the fetchData function with promises
  console.log("Fetching data...");
  
  fetchData()
    .then((data) => {
      console.log("Data fetched successfully:", data);
      return data.age * 2; // Perform a calculation based on the fetched data
    })
    .then((result) => {
      return result;
    })
    .then((final) => {
    console.log(+final - 25);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("Cleanup or additional tasks can be done here.");
    });
  
  
  
  
  
  