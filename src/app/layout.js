import './globals.css'

export const metadata = {
  title: 'DentOne | Centru de Reabilitare Orală Avansată - Dantură Fixă în 24 Ore București',
  description: 'Clinică stomatologică premium în București, Sector 2. Specialiști în reabilitări orale complexe, implanturi dentare, dantură fixă All-on-4/All-on-6 în 24 ore. Consult gratuit.',
  keywords: 'clinică stomatologică București, implanturi dentare, dinți ficși 24 ore, reabilitare orală, All-on-4, fațete dentare',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}