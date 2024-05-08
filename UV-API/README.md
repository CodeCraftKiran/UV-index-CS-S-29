# UV Index Checker

This is a simple web application built with Express.js that allows users to check the UV index of a location by entering its latitude and longitude coordinates. Then tells you if you need to apply sunscreen today or not.

## Prerequisites

Before running this application, ensure you have Node.js installed on your machine.

## Getting Started

1. Clone this repository to your local machine.

2. Install dependencies by running the following command in your terminal:


3. Obtain an API key from OpenUV API. You can sign up for an account and get your API key from [OpenUV website](https://www.openuv.io/).

4. Set your API key in the `APIKey` variable inside `index.js` file.

5. Run the application by executing the following command:


6. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Enter the latitude and longitude of the location you want to check.
- Click the "Check" button.
- The application will fetch the UV index data for the specified location and display the maximum UV index.

## Technologies Used

- Node.js
- Express.js
- Axios
- Body-parser


