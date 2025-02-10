# Currency Swap Application

## Overview

This application allows users to convert an amount from one currency to another using real-time exchange rates fetched from an external API. The application is built using React, Material-UI, and `react-hook-form` for form management and validation.

## Features

- Fetches real-time exchange rates from an external API.
- Allows users to select the source and target currencies.
- Validates user input using `yup` and `react-hook-form`.
- Displays conversion results.
- Provides user feedback with `react-hot-toast`.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/hasynguyen.git
    cd hasynguyen/src/problem2
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

3. Start the application:
    ```bash
    pnpm start
    ```

## Code Explanation

### Main Components

- **App.tsx**: The main component that handles the currency conversion logic and UI.

### Key Libraries

- **React**: The core library for building the user interface.
- **Material-UI**: A popular React UI framework for building responsive and visually appealing components.
- **react-hook-form**: A library for managing form state and validation in React.
- **yup**: A JavaScript schema builder for value parsing and validation.
- **react-hot-toast**: A library for showing toast notifications.

### Code Breakdown

#### Fetching Data

The application fetches real-time exchange rates from an external API, handle if currency is duplicate, get its latest value.

#### Form Management and Validation
The form is managed using react-hook-form and validated using yup

#### Handling Form Submission
When the form is submitted, the application converts the currency and displays the result

#### Displaying the Form and Results
The form and results are displayed using Material-UI components

### Conclusion
This application demonstrates how to build a currency converter using React, Material-UI, react-hook-form, and yup. It includes real-time data fetching, form validation, and user feedback with toast notifications.