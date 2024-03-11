# mini-redux-middleware

## Introduction

`mini-redux-middleware` is a lightweight collection of essential middlewares for Redux applications, designed to simplify the integration of basic middleware functionalities such as action logging and handling asynchronous actions.

## Installation

To install the library, run the following command in your project directory:

```bash
npm install mini-redux-middleware
```

## Usage

To use the `mini-redux-middleware` in your Redux application, you can follow the steps below:

1. Import the `configureStore` function from the library:

```javascript
import configureStore from 'mini-redux-middleware';
```

2. Use the `configureStore` function to create your Redux store:

```javascript
const store = configureStore();
```

This store will be configured with the essential middlewares including a logger and thunk middleware.

## Contributing

Contributions to `mini-redux-middleware` are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with descriptive commit messages.
4. Push your branch and submit a pull request.

We appreciate your contributions to make `mini-redux-middleware` even better!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
