

You're building a financial dashboard that aggregates stock data from an external REST API. The API provides raw data for multiple stocks, including prices, trading volume, and other key metrics. Your task is to implement a solution that fetches this data and derives meaningful insights from it.

#### Requirements:

1. **Fetch Stock Data**: You are provided with an API endpoint that returns data for a variety of stocks in the following JSON format:
```
[
  {
    "symbol": "AAPL",
    "date": "2024-10-01",
    "open": 173.00,
    "close": 175.50,
    "high": 176.00,
    "low": 172.50,
    "volume": 105000000
  },
  {
    "symbol": "GOOGL",
    "date": "2024-10-01",
    "open": 2810.00,
    "close": 2805.50,
    "high": 2825.00,
    "low": 2790.00,
    "volume": 750000
  },
  ...
]
```
    
    You will be fetching data for multiple stocks over several days.
    
2. **Analyze Data**: Once you've fetched the data, implement a function to derive the following insights:
    
    - **Top stock by average closing price over the past week**.
    - **Stock with the highest volatility** (calculated as the difference between high and low prices) for a given day.
    - **Total trading volume for a specific stock over the past week**.
3. **Implementation Details**:
    
    - Use Python (or any preferred language) to fetch and process the data.
    - Assume the API endpoint is `https://api.example.com/stocks`. It allows you to query historical data by providing query parameters like `start_date` and `end_date`.
    - Write clean, well-structured, and testable code.
4. **Bonus (Optional)**:
    
    - Cache the data locally to minimize repeated API calls for the same date range.
    - Handle API errors (e.g., rate limits, 500 status codes) gracefully.

#### Deliverables:

- A script or application that interacts with the API, fetches the required data, and outputs the insights.
- A brief explanation of your approach and any assumptions made.

### Evaluation Criteria:

- Correctness: Does the solution return the correct insights?
- Code Quality: Is the code clean, efficient, and easy to follow?
- Error Handling: How well does the solution handle API errors and edge cases?
- API Interaction: Proper usage of REST API, including handling HTTP methods, parameters, and error codes.

This exercise tests not only the candidate’s ability to write clean code but also how they handle real-world challenges like interacting with APIs, processing data, and deriving insights from it.