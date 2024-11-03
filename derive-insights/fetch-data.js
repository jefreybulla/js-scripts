// simple example that uses fetch to fetch data from a server

/*
To include secrets, you need to run this script with
node --env-file=.env fetch-data
*/

async function getData() {
    const url = "https://example.org/products.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

// example with headers
const response = await fetch(baseUrl + fullQuery, {
    headers: {
        'x-rapidapi-key': 'process.env.API_KEY',
        'x-rapidapi-host': 'real-time-stock-finance-quote.p.rapidapi.com'
    }
})
const data = await response.json()

// POST example
const response2 = await fetch(`${apiRoot}/responses`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    question_id: question?.current_question,
    answer: userAnswer,
  })
});
