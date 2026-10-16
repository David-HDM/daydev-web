import { brand, hero, services, process, plans, about, faqs } from "./content.js";

const wa = (msg) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`;

function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="logo" aria-label="DayDev, inicio">
        <img src="/daydev-logo-horizontal-color.svg" alt="DayDev" />
      </a>
      <nav aria-label="Principal">
        <a href="#servicios">Servicios</a>
        <a href="#proceso">Proceso</a>
        <a href="#paquetes">Paquetes</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#faq">Preguntas</a>
        <a href="#contacto" className="btn btn-small">Contacto</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="sun" aria-hidden="true" />
      <div className="hero-inner">
        <p className="tagline">{brand.tagline}</p>
        <h1>{hero.title}</h1>
        <p className="lead">{hero.text}</p>
        <a className="btn" href="#contacto">{hero.cta}</a>
      </div>
      <div className="horizon" aria-hidden="true" />
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="section">
      <h2>Qué hacemos</h2>
      <div className="grid-3">
        {services.map((s) => (
          <article key={s.title} className="item">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="section band">
      <h2>Cómo trabajamos</h2>
      <ol className="steps">
        {process.map((p) => (
          <li key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Plans() {
  return (
    <section id="paquetes" className="section">
      <h2>Paquetes</h2>
      <p className="sub">Precios de referencia. Cada proyecto se confirma con una cotización.</p>
      <div className="grid-3">
        {plans.map((p) => (
          <article key={p.name} className={`plan ${p.featured ? "featured" : ""}`}>
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <p className="note">{p.note}</p>
            <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
            <a className="btn" href={wa(`Hola, me interesa el paquete ${p.name} de DayDev.`)}>
              Pedir cotización
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="section band">
      <div className="about">
        <div>
          <h2>{about.title}</h2>
          <p>{about.text}</p>
        </div>
        <ul className="chips" aria-label="Herramientas">
          {about.stack.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="section">
      <h2>Preguntas frecuentes</h2>
      <div className="faq">
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="section contact">
      <h2>Cuéntanos tu proyecto</h2>
      <p className="sub">Respondemos en un día hábil.</p>
      <div className="actions">
        <a className="btn" href={brand.agenda}>Agendar llamada de 20 min</a>
        <a className="btn btn-outline" href={wa("Hola, quiero cotizar un sitio web con DayDev.")}>Escribir por WhatsApp</a>
        <a className="btn btn-outline" href={`mailto:${brand.email}?subject=Cotización de sitio web`}>Enviar correo</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {brand.name}. {brand.tagline}.</p>
      <p>
        {/* Quitar comentario cuando haya redes sociales activas. Por ahora solo GitHub. 
        <a href={brand.instagram}>Instagram</a>
        */}
        <a href={brand.github}>GitHub</a>
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a href="#servicios" className="skip">Saltar al contenido</a>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Plans />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
