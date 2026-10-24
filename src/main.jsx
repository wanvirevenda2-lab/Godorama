import React from 'react';
import { createRoot } from 'react-dom/client';
import { Play, Smartphone, Tv, ExternalLink } from 'lucide-react';
import './style.css';

function App() {
  return (
    <main className="shell">
      <div className="brand">GODORAMA</div>
      <section className="hero">
        <div className="eyebrow">SEU ENTRETENIMENTO</div>
        <h1>Suas histórias<br /><span>em qualquer tela.</span></h1>
        <p>Abra o Godorama oficial para acessar o catálogo e os recursos disponíveis na plataforma.</p>
        <a className="launch" href="https://godorama.com" rel="noreferrer">
          <Play size={19} fill="currentColor" /> Abrir Godorama <ExternalLink size={16}/>
        </a>
      </section>
      <section className="compat">
        <article><Smartphone/><div><b>Celular Android</b><small>Interface adaptada à tela e ao toque.</small></div></article>
        <article><Tv/><div><b>Android TV</b><small>Use o controle remoto no site, quando suportado.</small></div></article>
      </section>
      <footer>O catálogo, a conta e a reprodução são fornecidos pelo site oficial. A compatibilidade com TV depende dos recursos oferecidos pelo próprio site.</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
