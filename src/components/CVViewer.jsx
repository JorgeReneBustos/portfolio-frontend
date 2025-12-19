import React, { useEffect, useState, useRef } from 'react';

export default function CVViewer({ src = '/Jorge_Rene_Bustos_Frontend_Developer_CV.pdf', height = 720 }) {
  const [available, setAvailable] = useState(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    // Try HEAD first; if fails, try fetching the file to check availability
    fetch(src, { method: 'HEAD' }).then(res => {
      if (!cancelled) setAvailable(res.ok);
    }).catch(() => {
      fetch(src).then(res => { if (!cancelled) setAvailable(res.ok); }).catch(() => { if (!cancelled) setAvailable(false); });
    });
    return () => { cancelled = true; };
  }, [src]);

  function handleOpen() {
    window.open(src, '_blank');
  }

  function handleDownload() {
    const a = document.createElement('a');
    a.href = src;
    a.download = src.split('/').pop() || 'cv.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function handlePrint() {
    const w = window.open(src, '_blank');
    if (!w) return alert('No se pudo abrir la ventana para imprimir. Permitir ventanas emergentes.');
    // Try to call print after load
    w.onload = function () { try { w.print(); } catch (e) { /* ignore */ } };
  }

  return (
    <div className="cv-viewer">
      <div className="cv-toolbar">
        <div className="cv-actions">
          <button className="btn" onClick={handleOpen}>Abrir en nueva pestaña</button>
          <button className="btn" onClick={handleDownload}>Descargar PDF</button>
          <button className="btn" onClick={handlePrint}>Imprimir</button>
        </div>
        <div className="cv-hint">
          {available === null && <span>Cargando...</span>}
          {available === false && <span className="muted">CV no encontrado en <code>{src}</code>. Sube el PDF a la carpeta <strong>public</strong>.</span>}
          {available === true && <span className="muted">CV listo. Puedes verlo abajo o descargarlo.</span>}
        </div>
      </div>

      {available ? (
        <iframe
          ref={iframeRef}
          title="CV - Jorge René Bustos"
          src={src}
          style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: 12 }}
        />
      ) : (
        <div className="cv-placeholder card">
          <p className="muted">No se encontró el archivo PDF. Coloca tu CV en <strong>public/{src.replace('/', '')}</strong> o confirma la ruta.</p>
          <div className="buttons">
            <button className="btn" onClick={handleOpen}>Abrir en nueva pestaña</button>
            <button className="btn" onClick={handleDownload}>Descargar</button>
          </div>
        </div>
      )}
    </div>
  );
}
