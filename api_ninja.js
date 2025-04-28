require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.APINinjas_API_KEY;

async function main() {
  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/commodityprice?name=platinum",
      {
        headers: { "X-Api-Key": API_KEY },
        contentType: "application/json",
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data");
  }
}

main();
