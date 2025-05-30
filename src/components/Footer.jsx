import React from 'react';
import './all.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pabitra Pramanik. All rights reserved.</p>
    </footer>
  );
}
