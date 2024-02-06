#### Team #7's group project for the React.js course at Hyper Island School

# HI Library

## Description

**HI Library** is a library platform that also sells books.
Users can browse, search and review books dynamically retrieved from the _Google Books API_.
Books can be bought and borrowed, and the platform provides two separate carts for this purpose.

## Features

- _Book Browsing and Searching_: Users can search for books by title, author, or category.
- _Filtering_: Users can filter books by actions: for buying books or borrowing.
- _Dynamic Book Details_: View detailed information about each book, including ratings, reviews, and descriptions.
- _Cart Functionality_: A pop-up cart allows users to add books they are interested in and proceed to checkout.
- _Dark Mode_: Supports dark mode for a user-friendly experience in different lighting conditions.
- _Responsive Design_: Ensures a smooth browsing experience across various devices and screen sizes.

## Tech Stack

- **React**: For building the user interface.
- **React Router**: To handle in-app routing.
- **Bootstrap & Bootswatch**: For styling and responsive design.
- **React Rating Stars Component**: To display and select book ratings.
- **Yup** and **Formik** for working with forms.

**Contexts of The Application**:

1. `ThemeContext`: Manages the theme of the application, such as toggling between light and dark modes.
2. `CartPopUpContext`: Controls the visibility and behavior of the cart popup. This context is crucial for managing the state of whether the cart popup is open or closed.
3. `BookContext`: Provide Data from useBookFetching custom hook.
4. `BookDetailsContext`: Specifically focused on managing the state and operations related to individual book details. This could include fetching detailed information for a single book, such as descriptions, authors, and ratings, when a user selects a book to view more information.
5. `CartContext`: Manages the shopping cart’s state, including items that have been added to the cart for purchase. This context likely handles operations such as adding or removing items from the cart and calculating the total price.
6. `LoanCartContext`: Similar to CartContext but specifically for items that users intend to borrow instead of purchase. This context manages the list of books selected for loan.
7. `CategoryContext`: Manages the state related to book categories or genres, allowing users to filter books based on their interests. This could include storing the current category selection and updating the displayed books list accordingly.
8. `FilterContext`: Used for managing additional filtering criteria beyond categories, such as sorting by price, popularity, or new arrivals. This context enables dynamic filtering of the books list based on various parameters chosen by the user.

**Custom hooks**: `useBookFeching`: Handling API requests to fetch book data

**Helpers**: we use one function-helper: `makeShorterName` - to make a string shorter, since some titles and list of authors might be too long.

## Setup and Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository:

```
git clone https://github.com/collaboration-work/team-7-react-project.git
```

2. Navigate into the project directory:

```
cd team-7-react-project
```

3. Install the required dependencies:

```
npm install
```

## Usage

**To run** the application in development mode, use the command:

```
npm run dev
```

This will start the application on `localhost:5173`.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch

```
git checkout -b feature/AmazingFeature
```

3. Commit your Changes

```
git commit -m 'Add some AmazingFeature'
```

4. Push to the Branch

```
git push origin feature/AmazingFeature
```

5. Open a Pull Request

## Contact

_Contributors:_

- [jesslee2023](jesslee2023)
- [Shandiyaravi](https://github.com/Shandiyaravi)
- [elen-oz](https://github.com/elen-oz)

... _Rahmat_?
