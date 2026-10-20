
# 🛍️ Chic-Shop | Angular E-Commerce Portfolio

A responsive e-commerce frontend developed with **Angular 19, TypeScript, Bootstrap 5, Angular Material, and SCSS**.

Chic-Shop is a personal portfolio project designed to demonstrate frontend development, component-based architecture, client-side routing, state management, and responsive UI/UX design.

### 🌐 Live Demo

**[Explore Chic-Shop](https://jotarredondo.github.io/chic-shop/)**

---

## ✨ Key Features

- Responsive interface with custom styling.
- Product catalog organized into shoes, bags, and sunglasses.
- Dynamic filtering by category, subcategory, color, size, and maximum price.
- Product detail pages with image galleries and navigation controls.
- Product customization through size, color, and quantity selection.
- Shopping cart with add/remove operations, quantity tracking, and total calculations.
- Interactive homepage image carousel.
- Animated navigation menu with additional portfolio links.
- Client-side navigation using Angular Router.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Angular 19 | Frontend framework |
| TypeScript | Application logic and typed models |
| RxJS | Reactive cart state and updates |
| Angular Router | Client-side navigation |
| Angular Material | UI components and icons |
| Bootstrap 5 | Responsive layout and styling |
| SCSS | Custom styling |
| GitHub Pages | Static website hosting |

---

## 🏗️ Architecture

The application follows Angular's component-based architecture, separating UI presentation, routing, data models, and application services.

### Components

Reusable interface components include:

- Header and navigation
- Side menu
- Product cards
- Cart modal
- Footer

### Services

- `ProductService`: Provides product data and category-based access.
- `CartService`: Manages cart items, quantities, totals, and reactive cart updates.
- `SlideService`: Provides homepage carousel data.
- `MenuService`: Supports menu-related behavior.

### State Management

The shopping cart is managed through an Angular service using RxJS `BehaviorSubject` to publish cart-count updates.

Product information is provided by local application data.

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── shared/
│   │   ├── models/
│   │   └── pipes/
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
│   └── img/
├── index.html
├── main.ts
└── styles.scss
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Angular-compatible development environment

### Installation

Clone the repository:

```bash
git clone https://github.com/jotarredondo/chic-shop.git
cd chic-shop
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open:

`http://localhost:4200/`

### Production Build

```bash
npm run build
```

---

## ☁️ Deployment

The frontend is published using GitHub Pages.

**Live application:**

https://jotarredondo.github.io/chic-shop/

---

## ℹ️ Project Scope

Chic-Shop is a frontend demonstration project.

Product data and cart state are managed on the client side. It does not implement a production backend, payment processing, or persistent order storage.

---

## 👨‍💻 Author

**Jose Arredondo**

Java Backend & Full Stack Software Engineer

- [GitHub](https://github.com/jotarredondo)
- [LinkedIn](https://www.linkedin.com/in/arredondojose/)
