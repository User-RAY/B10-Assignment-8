# RayGadget E-commerce Platform

## Overview
RayGadget is an e-commerce platform for purchasing gadgets, designed and developed based on detailed Figma specifications. The project offers product navigation, detailed product views, shopping cart functionality, and a wishlist system. It emphasizes user-friendly interactions and data persistence through React and related technologies.

## Live Links
- **Live Website**: [RayGadget](https://ray-gadget-assignment-8.surge.sh/)
- **Requirement Document**: [Project Requirements](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

## React Fundamental Concepts Used
- **Functional Components**: The app uses reusable and modular functional components for UI elements.
- **React Hooks**: Utilized `useState`, `useEffect`, `useContext`, `useLocation`, and `useNavigate` for managing state, side effects, and navigation.
- **React Router**: For client-side routing and navigation between pages.
- **Context API**: For managing global state such as cart and wishlist data without prop drilling.
- **Conditional Rendering**: Used to dynamically display UI elements based on user interactions and states.

## Data Handling and Management
- **Context API**: Provides global state management for cart and wishlist functionalities, ensuring smooth data flow and interaction across the application.
- **LocalStorage**: Used for data persistence, allowing users to retain their cart and wishlist information even after refreshing or navigating away from the site.

## 5 Features of the Website
1. **Dynamic Product Display**: A grid-based product layout that allows users to filter items by category and view detailed product information.
2. **Interactive Dashboard**: A page for managing cart and wishlist items, displaying total cart costs, and sorting items by price.
3. **Toast Notifications**: Provides immediate feedback to users when items are added to the cart or wishlist with different contextual messages.
4. **Purchase Modal**: Confirms purchases with a modal that congratulates the user, clears the cart, and redirects to the home page without reloading.
5. **Responsive Design**: The platform is designed to be fully responsive, ensuring a smooth user experience on various devices.

## Miscellaneous
- **Error Handling**: Includes a 404 page for incorrect URLs and proper handling for user errors.
- **Page Titles and Favicon**: Dynamic page titles and favicon for an improved user experience.
- **Sorting and Filtering**: Users can sort cart items by price and filter products by category.
