// src/App.jsx
import React, { useState } from "react";
import "./App.css";


const PRODUCTS = [
  {
    id: 1,
    name: "Classic Brown Teddy",
    price: "599",
    size: "40 cm",
    img: "teddy.jpg",

  },
  {
    id: 2,
    name: "Giant Huggable Bear",
    price: "2499",
    size: "120 cm",
    img: "teddy2.jpg",
  },
  {
    id: 3,
    name: "Pocket Cute Bear",
    price: "349",
    size: "20 cm",
    img: "teddy3.jpg",
  },
  {
    id: 4,
    name: "Valentine Bear with Heart",
    price: "799",
    size: "35 cm",
    img: "teddy4.jpg",
  },
  {
    id: 5,
    name: "Angel Ribbon Bear",
    price: "679",
    size: "38 cm",
    img: "teddyyy.jpg",
  },
  {
    id: 6,
    name: "Plush Puppy Buddy",
    price: "499",
    size: "30 cm",
    img: "teddy6.jpg",
  },
];

const CATEGORIES = ["All", "Giant", "Classic", "Valentine", "Pocket", "New"];

function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <h1 className="brand">TeddyHouse</h1>
        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn">🔍</button>
          <button className="primary small">Cart (0)</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h2>Soft. Huggable. Forever.</h2>
          <p>
            Discover our collection of ultra-soft teddy bears — perfect for gifts,
            décor, and snuggles.
          </p>
          <div className="hero-ctas">
            <a className="primary" href="#products">Shop Teddy Bears</a>
            <a className="ghost" href="#about">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <img alt="teddy-hero" src="/teddy5.jpg"/>
        </div>
      </div>
    </section>
  );
}

function CategoryFilter({ active, setActive }) {
  return (
    <div className="categories">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`chip ${active === cat ? "active" : ""}`}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function ProductCard({ p }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={p.img} alt={p.name} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{p.name}</h3>
        <p className="muted">{p.size}</p>
        <div className="card-footer">
          <div className="price">₹{p.price}</div>
          <div className="actions">
            <button className="icon-btn" title="Quick view">👁️</button>
            <button className="primary small">Add</button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductGrid({ products }) {
  return (
    <section id="products" className="container">
      <h2 className="section-title">Featured Teddy Bears</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="container about-section">
      <h2>About TeddyHouse</h2>
      <p>
        TeddyHouse was founded with love and passion for soft toys. 
        Each teddy bear is crafted from premium materials ensuring 
        endless cuddles, warmth, and comfort. Our mission is to 
        bring smiles and happiness through every hug.
      </p>
      <p>
        From classic designs to themed bears, we make every gift 
        moment special — whether it’s for birthdays, anniversaries, 
        or just a cozy night in!
      </p>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="container contact-section">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you!</p>
      <ul>
        <li><strong>Email:</strong> support@teddyhouse.com</li>
        <li><strong>Phone:</strong> +91 7093304553</li>
        <li><strong>Address:</strong> Teddy Street, Hyderabad, India</li>
      </ul>
      <p>Follow us on social media for latest offers and new collections 💖</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h4>TeddyHouse</h4>
          <p className="muted">Handmade with love • Shipping worldwide</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} TeddyHouse — All rights reserved
      </div>
    </footer>
  );
}

export default function App() {
  const [category, setCategory] = useState("All");

  const filtered = PRODUCTS.filter((p) => {
    if (category === "All") return true;
    if (category === "Giant") return p.name.toLowerCase().includes("giant");
    if (category === "Valentine") return p.name.toLowerCase().includes("valentine");
    if (category === "Pocket") return p.name.toLowerCase().includes("pocket");
    if (category === "Classic")
      return p.name.toLowerCase().includes("classic") || p.name.toLowerCase().includes("brown");
    if (category === "New") return p.id >= 4;
    return true;
  });

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <main className="container main">
        <CategoryFilter active={category} setActive={setCategory} />
        <ProductGrid products={filtered} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
