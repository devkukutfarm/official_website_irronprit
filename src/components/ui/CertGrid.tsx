'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Cert {
  src: string
  title: string
  issuer: string
  width: number
  height: number
}

export default function CertGrid({ certs }: { certs: Cert[] }) {
  const [lightbox, setLightbox] = useState<Cert | null>(null)

  return (
    <>
      <div className="cert-grid">
        {certs.map((cert, i) => (
          <button key={i} className="cert-frame" onClick={() => setLightbox(cert)}>
            <span className="cert-mat">
              <Image src={cert.src} alt={cert.title} width={cert.width} height={cert.height} />
            </span>
            <span className="cert-caption">
              <strong>{cert.title}</strong>
              <small>{cert.issuer}</small>
            </span>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Close lightbox">
            &times;
          </button>
          <Image
            src={lightbox.src}
            alt={lightbox.title}
            width={920}
            height={640}
            style={{ maxWidth: 'min(920px,100%)', maxHeight: '78vh', width: 'auto', height: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox-caption">{lightbox.title}</p>
        </div>
      )}
    </>
  )
}
