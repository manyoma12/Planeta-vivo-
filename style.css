:root {
  --green: #1e6b50;
  --lime: #d8f36a;
  --ink: #17352b;
  --muted: #61746b;
  --cream: #f7f8f0;
  --white: #fff;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--cream);
  color: var(--ink);
  line-height: 1.6;
}

a {
  color: inherit;
}

.wrap {
  width: min(1120px, 92%);
  margin: auto;
}

/* ENCABEZADO Y MENÚ */

header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(247, 248, 240, 0.94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e8dc;
}

.nav {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  font-size: 1.22rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 9px;
}

.brand-mark {
  display: grid;
  place-items: center;
  background: var(--lime);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 1.2rem;
}

nav {
  display: flex;
  gap: 24px;
  align-items: center;
}

nav a {
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 700;
  color: #456256;
}

nav a:hover {
  color: var(--green);
}

/* PORTADA */

.hero {
  padding: 66px 0 74px;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 48px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #dce6d7;
  border-radius: 99px;
  padding: 7px 13px;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 800;
  color: var(--green);
  background: #fff;
}

.eyebrow span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #74a95c;
}

h1 {
  font-size: clamp(3rem, 6vw, 5.6rem);
  line-height: 0.98;
  letter-spacing: -0.07em;
  margin: 23px 0;
}

.highlight {
  color: var(--green);
}

.hero p {
  font-size: 1.12rem;
  color: var(--muted);
  max-width: 520px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 27px;
}

/* BOTONES */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 19px;
  border-radius: 99px;
  font-weight: 800;
  text-decoration: none;
  border: 1px solid var(--green);
  transition: 0.2s;
}

.btn.primary {
  background: var(--green);
  color: white;
}

.btn.primary:hover {
  background: #124c38;
  transform: translateY(-2px);
}

.btn.secondary {
  color: var(--green);
  background: transparent;
}

.btn.secondary:hover {
  background: #eaf0e4;
}

/* ILUSTRACIÓN DE LA PORTADA */

.hero-art {
  min-height: 420px;
  border-radius: 34px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    155deg,
    #b9dca6,
    #4d9368 54%,
    #1f604c
  );
  box-shadow: 0 24px 70px #194e3222;
}

.hero-art::before {
  content: "";
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: #e5f5b0;
  top: -110px;
  right: -70px;
  opacity: 0.95;
}

.hero-art::after {
  content: "";
  position: absolute;
  width: 430px;
  height: 240px;
  background: #245f48;
  border-radius: 50% 50% 0 0;
  bottom: -70px;
  left: -40px;
  transform: rotate(-10deg);
}

.sun {
  position: absolute;
  width: 90px;
  height: 90px;
  background: #fff5c8;
  border-radius: 50%;
  right: 88px;
  top: 60px;
  z-index: 1;
  box-shadow: 0 0 0 18px #fff5c822;
}

.hill {
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: -80px;
  width: 370px;
  height: 250px;
  background: #8ebc68;
  border-radius: 60% 0 0 0;
  transform: rotate(-8deg);
}

.tree {
  position: absolute;
  z-index: 3;
  bottom: 94px;
  left: 45%;
  width: 18px;
  height: 125px;
  background: #704e35;
  border-radius: 9px;
  transform: rotate(4deg);
}

.tree::before {
  content: "";
  position: absolute;
  width: 145px;
  height: 155px;
  border-radius: 55% 45% 55% 45%;
  background: #1e6b50;
  left: -64px;
  top: -100px;
  box-shadow:
    34px 25px 0 #2d7b52,
    -25px 37px 0 #3e8e59;
}

.leaf {
  position: absolute;
  z-index: 4;
  font-size: 2.2rem;
  color: #f5f9da;
  left: 24%;
  top: 30%;
  transform: rotate(-25deg);
}

.art-label {
  position: absolute;
  z-index: 5;
  left: 24px;
  bottom: 24px;
  background: #ffffffed;
  border-radius: 18px;
  padding: 15px 18px;
  max-width: 220px;
  box-shadow: 0 8px 30px #123d2422;
}

.art-label strong {
  display: block;
  font-size: 1rem;
}

.art-label small {
  color: var(--muted);
}

/* TARJETAS DE RESUMEN */

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 10px;
}

.stat {
  background: white;
  padding: 20px;
  border: 1px solid #e5eadd;
  border-radius: 18px;
}

.stat strong {
  display: block;
  font-size: 1.5rem;
  color: var(--green);
  letter-spacing: -0.04em;
}

.stat span {
  font-size: 0.86rem;
  color: var(--muted);
}

/* SECCIONES */

section {
  padding: 76px 0;
}

.section-head {
  max-width: 680px;
  margin-bottom: 32px;
}

.kicker {
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  color: #60854c;
}

.section-head h2 {
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.05;
  letter-spacing: -0.055em;
  margin: 12px 0;
}

.section-head p {
  color: var(--muted);
  font-size: 1.05rem;
}

/* TARJETAS INFORMATIVAS */

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.card {
  background: white;
  border: 1px solid #e5eadd;
  border-radius: 22px;
  padding: 25px;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px #1a4a2d0c;
}

.icon {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  background: #edf5df;
  border-radius: 16px;
  font-size: 1.55rem;
}

.card h3 {
  margin: 17px 0 8px;
  font-size: 1.2rem;
}

.card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.96rem;
}

/* PROBLEMAS AMBIENTALES */

.impact {
  background: #eaf0e3;
}

.impact-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 50px;
  align-items: center;
}

.impact-note {
  background: var(--green);
  color: white;
  border-radius: 26px;
  padding: 30px;
}

.impact-note .big {
  font-size: 3.6rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.07em;
  color: var(--lime);
}

.impact-note p {
  color: #e0eee4;
}

.impact-note small {
  color: #c5dbc9;
}

.causes {
  display: grid;
  gap: 13px;
}

.cause {
  display: flex;
  gap: 15px;
  background: #fff;
  border: 1px solid #dfe8d8;
  padding: 17px;
  border-radius: 17px;
}

.cause .num {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  background: #edf5df;
  border-radius: 12px;
  color: var(--green);
  font-weight: 900;
}

.cause h3 {
  margin: 0 0 3px;
  font-size: 1.02rem;
}

.cause p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}

/* CONSEJOS */

.tips {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.tip {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  padding: 18px;
  background: white;
  border: 1px solid #e5eadd;
  border-radius: 18px;
}

.check {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--lime);
  font-weight: 900;
  color: var(--green);
}

.tip strong {
  display: block;
  margin-bottom: 3px;
}

.tip p {
  margin: 0;
  color: var(--muted);
  font-size: 0.93rem;
}

/* MENSAJE FINAL */

.callout {
  background: var(--green);
  color: white;
  border-radius: 30px;
  padding: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.callout h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
  margin: 0 0 12px;
}

.callout p {
  color: #d8e9dc;
  max-width: 600px;
  margin: 0;
}

.callout .btn {
  background: var(--lime);
  color: var(--ink);
  border-color: var(--lime);
  white-space: nowrap;
}

.callout .btn:hover {
  transform: translateY(-2px);
}

/* PIE DE PÁGINA */

footer {
  padding: 28px 0;
  color: var(--muted);
  font-size: 0.88rem;
}

.foot {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border-top: 1px solid #e0e6d9;
  padding-top: 23px;
}

.foot a {
  color: var(--green);
  font-weight: 700;
}

/* TABLET */

@media (max-width: 800px) {
  nav {
    gap: 12px;
  }

  nav a {
    font-size: 0.82rem;
  }

  .hero-grid,
  .impact-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 42px;
  }

  .hero-art {
    min-height: 330px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .stats {
    gap: 8px;
  }

  .stat {
    padding: 14px;
  }

  .stat strong {
    font-size: 1.25rem;
  }

  .stat span {
    font-size: 0.78rem;
  }

  .impact-grid {
    gap: 25px;
  }

  .callout {
    align-items: flex-start;
    flex-direction: column;
  }
}

/* CELULARES */

@media (max-width: 520px) {
  .nav {
    min-height: 70px;
    flex-wrap: wrap;
    padding: 12px 0;
  }

  .brand {
    font-size: 1.05rem;
  }

  nav {
    width: 100%;
    justify-content: space-between;
    padding-bottom: 4px;
  }

  nav a {
    font-size: 0.78rem;
  }

  .hero {
    padding: 36px 0 48px;
  }

  .hero-grid {
    gap: 28px;
  }

  h1 {
    font-size: 3.25rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .hero-art {
    min-height: 285px;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat strong {
    font-size: 1.2rem;
  }

  section {
    padding: 55px 0;
  }

  .tips {
    grid-template-columns: 1fr;
  }

  .callout {
    padding: 28px;
  }

  .foot {
    flex-direction: column;
    align-items: flex-start;
  }
}
