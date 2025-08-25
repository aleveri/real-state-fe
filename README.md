# Real Estate Frontend

A React + TypeScript + Material UI frontend application for browsing and filtering real estate properties.  
This project consumes the **.NET + MongoDB backend API**.

---

## 🚀 Features
- Built with **React + TypeScript**  
- Styled with **Material UI (MUI)**  
- Property listing with:
  - Name filter
  - Address filter
  - Price range filter
- Property detail view  
- API integration with backend  
- Unit tests with **Jest + React Testing Library**  

---

## 🛠 Tech Stack
- [React 19](https://react.dev) with Vite
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/) for API calls
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) for unit testing

---

## 📦 Installation

Clone repository and install dependencies:

```bash
git clone https://github.com/aleveri/real-state-fe.git
cd real-state-fe
npm install
```

---

## ▶️ Running the App

Start development server:
```bash
npm run dev
```

Open in browser:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧪 Running Tests

Unit tests are written with Jest and Testing Library.

Run all tests:
```bash
npm test
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```
VITE_API_URL=http://localhost:5000/api
```

---

## 📂 Project Structure

```
src/
 ├── components/       # Reusable components (PropertyCard, Filters, etc.)
 ├── pages/            # Pages (PropertyList, PropertyDetails)
 ├── services/         # API calls
 ├── types/            # TypeScript interfaces
 ├── tests/            # Unit tests
 └── App.tsx           # Root component
```

---

## 👨‍💻 Author
**Andres Leveri**
