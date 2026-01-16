'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeService, setActiveService] = useState(null)

  const testimonials = [
    {
      name: 'Ana M.',
      text: 'Un centru de reabilitare de nota 10... Recomand cu drag',
      rating: 5,
      img: 'close-up-shot-of-glad-satisfied-woman-being-happy-2026-01-08-05-22-29-utc.jpg',
      before: 'close-up-of-young-woman-s-mouth-2026-01-11-09-42-06-utc.jpg',
      after: 'a-closeup-shot-of-a-smiling-woman-showing-her-clea-2026-01-11-08-37-43-utc.jpg',
      service: 'All-on-4 Platinum',
    },
    {
      name: 'Ion P.',
      text: 'Personalul de nota 10, curățenie de nota 10',
      rating: 5,
      img: 'exuding-radiance-captivating-close-up-of-a-woman-2026-01-06-11-00-32-utc.jpg',
      before: 'with-the-help-of-high-tech-equipment-and-expert-sk-2026-01-05-04-52-49-utc.jpg',
      after: 'a-sexy-hot-redhead-dentist-woman-taking-care-of-h-2026-01-07-01-18-20-utc.jpg',
      service: 'Implanturi Premium',
    },
    {
      name: 'Maria L.',
      text: 'Rezultate excelente, durere minimă',
      rating: 5,
      img: 'young-female-dentist-in-dental-office-dentist-at-2026-01-09-06-51-47-utc.jpg',
      before: 'a-woman-at-an-appointment-with-a-professional-dent-2026-01-05-05-08-43-utc.jpg',
      after: 'exuding-radiance-captivating-close-up-of-a-woman-2026-01-06-11-00-32-utc.jpg',
      service: 'Fațete Ceramice',
    },
  ]

  const testimonialsCount = testimonials.length

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsCount)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonialsCount])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const services = [
    { 
      title: 'All-on-4 Platinum', 
      price: '26.000 RON', 
      desc: 'Dantură fixă în 24 ore cu sedare IV și PRGF', 
      img: 'dental-tools-medical-equipment-2026-01-07-01-00-49-utc.jpg', 
      features: ['Sedare IV', 'PRGF', 'CT inclus', 'Garanție 10 ani', 'Consult gratuit'], 
      video: 'Beautiful-Smile-And-Perfect-Teeth-In-Dental-Clinic-4K-2025-12-17-21-47-45-Utc.mp4'
    },
    { 
      title: 'Implanturi Premium', 
      price: '2350-4500 RON', 
      desc: 'Implanturi Nobel Biocare cu garanție lifetime', 
      img: 'detail-of-a-dental-tools-attached-to-a-dental-chai-2026-01-09-11-06-26-utc.jpg', 
      features: ['Implant Nobel', 'Oase artificial', 'Sedare locală', 'Garanție lifetime', 'CBCT 3D'], 
      video: 'Dental-Care-Extreme-Close-Up-Macro-Video-Dentist-T-4K-2025-12-17-23-26-33-Utc.mp4'
    },
    { 
      title: 'Fațete Ceramice', 
      price: '1950-2400 RON', 
      desc: 'Zâmbet perfect cu fațete de porcelan premium', 
      img: 'woman-s-lips-and-teeth-smile-close-up-2026-01-06-10-56-09-utc.jpg', 
      features: ['Porțelan premium', 'Culoare naturală', 'Durabilitate 15+', 'Consult gratuit', 'Finanțare în rate'], 
      video: 'Young-Beautiful-Woman-Smile-After-Dental-Whitening-4K-2025-12-17-09-15-56-Utc.mp4'
    },
    { 
      title: 'Endodonție Avansată', 
      price: '800-1300 RON', 
      desc: 'Tratament sub microscop Zeiss', 
      img: 'in-a-modern-medical-center-dentistry-checks-the-r-2026-01-05-05-35-48-utc.jpg', 
      features: ['Microscop Zeiss', 'Anestezie locală', 'Tratament în 1 ședință', 'Garanție 5 ani', 'Urgente acceptate'], 
      video: 'Perfect-White-Teeth-Close-Up-With-Shade-Guide-Blea-4K-2025-12-17-13-28-09-Utc.mp4'
    },
    { 
      title: 'Parodontologie', 
      price: 'Consult 200 RON', 
      desc: 'Tratamente avansate cu laser', 
      img: 'female-dentist-with-assistant-working-in-dental-cl-2026-01-07-07-00-33-utc.jpg', 
      features: ['Laser terapie', 'Regenerare os', 'Igienizare profesională', 'Prevenție', 'Tratament gingivită'], 
      video: 'Closeup-Woman-Flossing-Perfect-White-Teeth-With-Fl-4K-2025-12-17-23-18-55-Utc.mp4'
    },
    { 
      title: 'Ortodonție Invisalign', 
      price: '3300-18000 RON', 
      desc: 'Alignere invizibile pentru zâmbet perfect', 
      img: 'woman-holds-aligners-in-dentistry-while-sitting-in-2026-01-08-07-50-11-utc.jpg', 
      features: ['Alignere invizibile', 'Aparate fixe', 'Tratament rapid', 'Rezultate permanente', 'Finanțare flexibilă'], 
      video: 'Young-Handsome-Woman-After-Dental-Whitening-Proces-4K-2025-12-17-04-13-54-Utc.mp4'
    },
  ]

  const gallery = [
    'a-closeup-shot-of-a-smiling-woman-showing-her-clea-2026-01-11-08-37-43-utc.jpg',
    'a-sexy-hot-redhead-dentist-woman-taking-care-of-h-2026-01-07-01-18-20-utc.jpg',
    'a-woman-at-an-appointment-with-a-professional-dent-2026-01-05-05-08-43-utc.jpg',
    'close-up-of-young-woman-s-mouth-2026-01-11-09-42-06-utc.jpg',
    'with-the-help-of-high-tech-equipment-and-expert-sk-2026-01-05-04-52-49-utc.jpg',
    'female-dentist-with-assistant-working-in-dental-cl-2026-01-07-07-00-33-utc.jpg',
    'in-a-modern-medical-center-dentistry-checks-the-r-2026-01-05-05-35-48-utc.jpg',
    'woman-holds-aligners-in-dentistry-while-sitting-in-2026-01-08-07-50-11-utc.jpg',
    'exuding-radiance-captivating-close-up-of-a-woman-2026-01-06-11-00-32-utc.jpg',
    'young-female-dentist-in-dental-office-dentist-at-2026-01-09-06-51-47-utc.jpg',
    'woman-s-lips-and-teeth-smile-close-up-2026-01-06-10-56-09-utc.jpg',
    'dental-tools-medical-equipment-2026-01-07-01-00-49-utc.jpg',
    'detail-of-a-dental-tools-attached-to-a-dental-chai-2026-01-09-11-06-26-utc.jpg',
  ]

  const bentoItems = [
    { title: 'Tehnologie de Vârf', desc: 'Microscop Zeiss, Laser, PRGF', img: 'dental-tools-medical-equipment-2026-01-07-01-00-49-utc.jpg', span: 'col-span-2 row-span-1' },
    { title: 'Echipă Experți', desc: 'Dr. Carl Moussa și echipa', img: 'a-sexy-hot-redhead-dentist-woman-taking-care-of-h-2026-01-07-01-18-20-utc.jpg', span: 'col-span-1 row-span-2' },
    { title: 'Rezultate Rapide', desc: 'Dantură fixă în 24 ore', img: 'close-up-shot-of-glad-satisfied-woman-being-happy-2026-01-08-05-22-29-utc.jpg', span: 'col-span-1 row-span-1' },
    { title: 'Satisfacție 100%', desc: 'Peste 1000 pacienți fericiți', img: 'exuding-radiance-captivating-close-up-of-a-woman-2026-01-06-11-00-32-utc.jpg', span: 'col-span-1 row-span-1' },
    { title: 'Finanțare', desc: 'Plată în rate, carduri acceptate', img: 'young-female-dentist-in-dental-office-dentist-at-2026-01-09-06-51-47-utc.jpg', span: 'col-span-2 row-span-1' },
  ]

  const team = [
    { name: 'Dr. Carl Moussa', title: 'Chirurg Oral', img: 'a-sexy-hot-redhead-dentist-woman-taking-care-of-h-2026-01-07-01-18-20-utc.jpg', desc: 'Specialist în implantologie și chirurgie orală cu 20+ ani experiență' },
    { name: 'Dr. Ana Popescu', title: 'Ortodont', img: 'young-female-dentist-in-dental-office-dentist-at-2026-01-09-06-51-47-utc.jpg', desc: 'Expert în ortodonție și aliniere dentară' },
    { name: 'Dr. Ion Georgescu', title: 'Endodont', img: 'in-a-modern-medical-center-dentistry-checks-the-r-2026-01-05-05-35-48-utc.jpg', desc: 'Specialist în tratamente de canal sub microscop' },
  ]

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
      {/* Professional Header */}
      <header className="fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between rounded-b-[28px] surface">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-2xl bg-gradient-to-br from-cyan-400/35 to-indigo-500/30 border border-slate-200/70 dark:border-slate-700/70 grid place-items-center">
              <span className="font-black tracking-tight text-slate-900 dark:text-slate-100">D</span>
            </div>
            <div>
              <div className="text-xl font-black text-slate-900 dark:text-white leading-none">DentOne</div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Reabilitare orală avansată</div>
            </div>
          </div>
          <nav className="hidden lg:flex gap-7 text-[15px] font-semibold">
            <a href="#hero" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors">Acasă</a>
            <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors">Servicii</a>
            <a href="#bento" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors">De Ce Noi</a>
            <a href="#testimonials" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors">Testimoniale</a>
            <a href="#team" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors">Echipa</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="size-11 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/40 dark:bg-slate-900/30 text-slate-700 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-900/50 transition"
              aria-label="Toggle theme"
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="relative overflow-hidden rounded-2xl px-6 py-3 font-black text-white bg-slate-950 hover:bg-slate-900 transition"
            >
              Programează
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="relative h-[100svh] min-h-[740px]">
          {/* Video background */}
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/Beautiful-Smile-And-Perfect-Teeth-In-Dental-Clinic-4K-2025-12-17-21-47-45-Utc.mp4" type="video/mp4" />
            </video>
            {/* Contrast layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/65 to-white/10 dark:from-slate-950/85 dark:via-slate-950/45 dark:to-slate-950/10" />
            <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_12%_80%,rgba(0,180,216,0.22),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_55%_20%,rgba(99,102,241,0.10),transparent_65%)]" />
          </div>

          {/* Everything in hero: bottom-left */}
          <div className="absolute inset-x-0 bottom-0 z-20">
            <div className="mx-auto max-w-7xl px-6 pb-8 sm:pb-10">
              <div className="max-w-2xl rounded-[32px] surface p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 w-fit rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/35 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <span className="inline-block size-2 rounded-full bg-cyan-500" />
                  Consult gratuit • CBCT 3D • Sedare IV
                </div>

                <h1 className="mt-5 text-5xl md:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.02]">
                  Dantură fixă în 24 ore,
                  <span className="block bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">cu look natural</span>
                </h1>

                <p className="mt-5 text-lg md:text-xl text-slate-700 dark:text-slate-300">
                  București, Sector 2 — reabilitări orale complexe, implanturi premium și estetică dentară.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { k: '1.000+', v: 'pacienți tratați' },
                    { k: '24h', v: 'dantură fixă' },
                    { k: '10 ani', v: 'garanție' },
                  ].map((it) => (
                    <div key={it.k} className="rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/55 dark:bg-slate-900/30 px-4 py-3">
                      <div className="text-lg font-black text-slate-950 dark:text-white leading-none">{it.k}</div>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{it.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="rounded-2xl px-6 py-4 font-black bg-slate-950 text-white hover:bg-slate-900 transition"
                  >
                    Programează consult
                  </button>
                  <a
                    href="#services"
                    className="rounded-2xl px-6 py-4 font-black border border-slate-200/80 text-slate-950 bg-white/50 hover:bg-white/75 transition"
                  >
                    Vezi servicii
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-40 py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Servicii premium</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">Pachete clare, tehnologie modernă și o experiență clinică care se simte premium de la primul pas.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200/70 dark:border-slate-700/70 bg-white/40 dark:bg-slate-900/25">Sedare IV</span>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200/70 dark:border-slate-700/70 bg-white/40 dark:bg-slate-900/25">CBCT 3D</span>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200/70 dark:border-slate-700/70 bg-white/40 dark:bg-slate-900/25">PRGF</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              className="text-left group rounded-[28px] surface-solid overflow-hidden hover:-translate-y-0.5 hover:shadow-2xl transition-all"
              onClick={() => setActiveService(service)}
            >
              <div className="relative h-48">
                <Image src={`/${service.img}`} alt={service.title} fill sizes="(min-width:1024px) 360px, (min-width:768px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-white/80">de la</div>
                    <div className="text-lg font-black text-white">{service.price}</div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                    Detalii <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{service.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-xs font-semibold rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-slate-50/60 dark:bg-slate-900/25">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Bento Box Section */}
      <section id="bento" className="scroll-mt-40 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[36px] surface p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">De ce DentOne</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">O clinică gândită ca un produs premium: confort, claritate, tehnologie, rezultate.</p>
              </div>
              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">Tehnologie + confort + rezultate</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[210px]">
          {bentoItems.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[28px] border border-slate-200/70 dark:border-slate-700/70 bg-white/55 dark:bg-slate-900/30 p-6 hover:-translate-y-0.5 hover:shadow-2xl transition-all ${item.span}`}
            >
              <div className="absolute inset-0">
                <Image src={`/${item.img}`} alt={item.title} fill sizes="(min-width:768px) 25vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/55 to-white/10 dark:from-slate-950/70 dark:via-slate-950/40 dark:to-slate-950/10" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{item.desc}</p>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="scroll-mt-40 py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Galerie</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">Un mix foto + video într-un grid curat, fără suprapuneri și fără crop-uri ciudate.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {gallery.slice(0, 10).map((img, index) => {
            const spans = [
              'md:col-span-3 md:row-span-2',
              'md:col-span-3 md:row-span-1',
              'md:col-span-2 md:row-span-1',
              'md:col-span-2 md:row-span-1',
              'md:col-span-2 md:row-span-1',
            ]
            return (
              <div
                key={img}
                className={`relative overflow-hidden rounded-[28px] border border-slate-200/70 dark:border-slate-700/70 bg-white/40 dark:bg-slate-900/25 aspect-square md:aspect-auto ${spans[index % spans.length]}`}
              >
                <Image src={`/${img}`} alt={`Galerie ${index + 1}`} fill sizes="(min-width:768px) 30vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
              </div>
            )
          })}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-[28px] overflow-hidden border border-slate-200/70 dark:border-slate-700/70 surface-solid">
            <video controls className="w-full h-full">
              <source src="/Beautiful-Smile-And-Perfect-Teeth-In-Dental-Clinic-4K-2025-12-17-21-47-45-Utc.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="rounded-[28px] overflow-hidden border border-slate-200/70 dark:border-slate-700/70 surface-solid">
            <video controls className="w-full h-full">
              <source src="/Young-Beautiful-Woman-Smile-After-Dental-Whitening-4K-2025-12-17-09-15-56-Utc.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-40 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[36px] surface p-8 md:p-10 overflow-hidden relative">
            <div className="absolute inset-0 -z-10 opacity-80">
              <div className="absolute -top-28 -left-28 size-[520px] rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -bottom-28 -right-28 size-[520px] rounded-full bg-indigo-500/15 blur-3xl" />
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Testimoniale</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">Rezultate reale, povestite simplu. Selectează un caz și vezi înainte/după.</p>
              </div>
              <div className="flex items-center gap-3">
                {testimonials.map((t, index) => (
                  <button
                    key={t.name}
                    onClick={() => setActiveTestimonial(index)}
                    className={`relative size-12 rounded-2xl overflow-hidden border transition ${
                      index === activeTestimonial
                        ? 'border-slate-900/20 dark:border-white/25 shadow-lg'
                        : 'border-slate-200/70 dark:border-slate-700/70 opacity-80 hover:opacity-100'
                    }`}
                    aria-label={`Testimonial ${t.name}`}
                  >
                    <Image src={`/${t.img}`} alt={t.name} fill sizes="48px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Before / After */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="rounded-[28px] overflow-hidden border border-slate-200/70 dark:border-slate-700/70 bg-white/40 dark:bg-slate-900/25">
                  <div className="px-5 py-4 flex items-center justify-between">
                    <div className="text-sm font-black text-slate-900 dark:text-white">ÎNAINTE</div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{testimonials[activeTestimonial].service}</div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image src={`/${testimonials[activeTestimonial].before}`} alt="Înainte" fill sizes="(min-width:1024px) 420px, 50vw" className="object-cover" />
                  </div>
                </div>
                <div className="rounded-[28px] overflow-hidden border border-slate-200/70 dark:border-slate-700/70 bg-white/40 dark:bg-slate-900/25">
                  <div className="px-5 py-4 flex items-center justify-between">
                    <div className="text-sm font-black text-slate-900 dark:text-white">DUPĂ</div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{testimonials[activeTestimonial].rating}/5</div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image src={`/${testimonials[activeTestimonial].after}`} alt="După" fill sizes="(min-width:1024px) 420px, 50vw" className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div className="lg:col-span-5 rounded-[28px] surface-solid p-7 md:p-8 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 size-56 rounded-full bg-cyan-400/10 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="relative size-14 rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-700/70">
                      <Image src={`/${testimonials[activeTestimonial].img}`} alt={testimonials[activeTestimonial].name} fill sizes="56px" className="object-cover" />
                    </div>
                    <div>
                      <div className="text-lg font-black text-slate-900 dark:text-white">{testimonials[activeTestimonial].name}</div>
                      <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">{testimonials[activeTestimonial].service}</div>
                    </div>
                  </div>

                  <div className="mt-6 text-xl md:text-2xl font-semibold leading-snug text-slate-900 dark:text-white">
                    “{testimonials[activeTestimonial].text}”
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-slate-900 dark:text-white">
                    <div className="text-lg">{'★'.repeat(testimonials[activeTestimonial].rating)}</div>
                    <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">experiență pacient</div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button onClick={() => setModalOpen(true)} className="rounded-2xl px-5 py-3 font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition">
                      Vreau o evaluare
                    </button>
                    <a href="#contact" className="rounded-2xl px-5 py-3 font-bold border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white bg-white/40 dark:bg-slate-900/25 hover:bg-white/70 dark:hover:bg-slate-900/45 transition">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-40 py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Echipă</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">Specialiști cu experiență și o comunicare clară — fără vibe medical rece.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="rounded-[28px] overflow-hidden border border-slate-200/70 dark:border-slate-700/70 surface-solid hover:-translate-y-0.5 hover:shadow-2xl transition-all">
              <div className="relative h-56">
                <Image src={`/${member.img}`} alt={member.name} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-lg font-black text-white">{member.name}</div>
                  <div className="text-sm font-semibold text-white/80">{member.title}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-40 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Contact</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">Alege varianta rapidă: programare, telefon sau mesaj. Îți răspundem clar și fără presiune.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-4">
              <div className="rounded-[28px] surface-solid p-7">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">Informații</h3>
                <div className="mt-6 space-y-4 text-[15px] text-slate-700 dark:text-slate-200">
                  <div className="flex gap-3">
                    <div className="size-10 rounded-2xl bg-slate-100 dark:bg-slate-900/40 grid place-items-center text-slate-900 dark:text-white">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div>
                      <div className="font-bold">Adresă</div>
                      <div className="text-slate-600 dark:text-slate-300">Barbu Văcărescu 164E, One Verdi Park, Parter, București, Sector 2</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="size-10 rounded-2xl bg-slate-100 dark:bg-slate-900/40 grid place-items-center text-slate-900 dark:text-white">
                      <i className="fas fa-phone" />
                    </div>
                    <div>
                      <div className="font-bold">Telefon</div>
                      <a href="tel:+40770202200" className="text-slate-600 dark:text-slate-300 hover:underline">+40 770 202 200</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="size-10 rounded-2xl bg-slate-100 dark:bg-slate-900/40 grid place-items-center text-slate-900 dark:text-white">
                      <i className="fas fa-envelope" />
                    </div>
                    <div>
                      <div className="font-bold">Email</div>
                      <a href="mailto:contact@dentone.ro" className="text-slate-600 dark:text-slate-300 hover:underline">contact@dentone.ro</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="size-10 rounded-2xl bg-slate-100 dark:bg-slate-900/40 grid place-items-center text-slate-900 dark:text-white">
                      <i className="fas fa-clock" />
                    </div>
                    <div>
                      <div className="font-bold">Program</div>
                      <div className="text-slate-600 dark:text-slate-300">Luni–Vineri: 09:00 – 21:00</div>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex gap-3">
                  <a href="https://facebook.com/dentone.ro" className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 border border-slate-200/70 dark:border-slate-700/70 bg-white/40 dark:bg-slate-900/25 text-slate-900 dark:text-white hover:bg-white/70 dark:hover:bg-slate-900/45 transition">
                    <i className="fab fa-facebook" /> Facebook
                  </a>
                  <a href="https://instagram.com/dentone.ro" className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 border border-slate-200/70 dark:border-slate-700/70 bg-white/40 dark:bg-slate-900/25 text-slate-900 dark:text-white hover:bg-white/70 dark:hover:bg-slate-900/45 transition">
                    <i className="fab fa-instagram" /> Instagram
                  </a>
                </div>

                <button onClick={() => setModalOpen(true)} className="mt-6 w-full rounded-2xl px-5 py-4 font-black bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition">
                  Programează consult
                </button>
              </div>
            </div>

            <div className="xl:col-span-4">
              <div className="rounded-[28px] overflow-hidden border border-slate-200/70 dark:border-slate-700/70 surface-solid h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.5!2d26.1!3d44.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDQuNDIwNiwgMjYuMTAwOA!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="420"
                  className="border-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="xl:col-span-4">
              <div className="rounded-[28px] surface-solid p-7">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">Trimite-ne un mesaj</h3>
                <form className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Nume complet"
                    className="w-full rounded-2xl px-4 py-4 border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/30 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-300 dark:focus:border-cyan-400 outline-none transition"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Număr de telefon"
                    className="w-full rounded-2xl px-4 py-4 border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/30 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-300 dark:focus:border-cyan-400 outline-none transition"
                    required
                  />
                  <textarea
                    placeholder="Mesajul tău"
                    rows="6"
                    className="w-full rounded-2xl px-4 py-4 border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/30 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-300 dark:focus:border-cyan-400 outline-none transition resize-none"
                  ></textarea>
                  <button type="submit" className="w-full rounded-2xl px-5 py-4 font-black bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition">
                    Trimite
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {activeService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6" onClick={() => setActiveService(null)}>
          <div className="relative bg-white dark:bg-gray-800 p-10 max-w-2xl w-full rounded-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveService(null)} className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">×</button>
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">{activeService.title}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Image src={`/${activeService.img}`} alt={activeService.title} width={300} height={200} className="rounded-xl mb-6" />
                <video controls className="w-full rounded-xl">
                  <source src={`/${activeService.video}`} type="video/mp4" />
                </video>
              </div>
              <div>
                <p className="text-xl mb-4 text-gray-600 dark:text-gray-300">{activeService.desc}</p>
                <p className="text-gray-800 dark:text-white font-black text-2xl mb-6">{activeService.price}</p>
                <h4 className="font-bold mb-4 text-gray-800 dark:text-white">Beneficii:</h4>
                <ul className="space-y-2">
                  {activeService.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300"><i className="fas fa-check mr-3"></i>{feature}</li>
                  ))}
                </ul>
                <button onClick={() => setModalOpen(true)} className="w-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 py-4 rounded-xl font-bold text-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors mt-6">Programează Acum</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6" onClick={() => setModalOpen(false)}>
          <div className="bg-white dark:bg-gray-800 p-10 max-w-lg w-full rounded-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Programează Consultul Gratuit</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Nume complet" className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-gray-800 dark:focus:border-white transition-colors" required />
              <input type="tel" placeholder="Număr de telefon" className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-gray-800 dark:focus:border-white transition-colors" required />
              <textarea placeholder="Spune-ne despre problema ta" rows="4" className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-gray-800 dark:focus:border-white transition-colors resize-none"></textarea>
              <button type="submit" className="w-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 py-4 rounded-xl font-bold text-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">Programează Acum</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
