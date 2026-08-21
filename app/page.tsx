"use client"

import { useMemo, useState, useEffect } from "react"
import { MessageCircle, MapPin, Sparkles, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { buildWaLink, getStoreStatus, StoreStatus } from "@/lib/constants"
import { products } from "@/lib/kismawa-data"
import { ProductCard } from "@/components/product-card"

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const formatPrice = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
})

const heroBanners = [
  { id: 1, src: "/gambar 1.jpg", alt: "Promo Kismawa 1" },
  { id: 2, src: "/gambar 2.jpeg", alt: "Promo Kismawa 2" },
  { id: 3, src: "/gambar 3.jpg", alt: "Promo Kismawa 3" },
]

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [storeStatus, setStoreStatus] = useState<StoreStatus>(getStoreStatus())

  useEffect(() => {
    setStoreStatus(getStoreStatus())
    const interval = setInterval(() => {
      setStoreStatus(getStoreStatus())
    }, 30000)

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length)
    }, 4500)

    return () => {
      clearInterval(interval)
      clearInterval(timer)
    }
  }, [])

  const categories = useMemo(() => ["Semua", ...new Set(products.map((product) => product.category))], [])
  const filteredProducts = activeCategory === "Semua"
    ? products
    : products.filter((product) => product.category === activeCategory)


  return (
    <main className="min-h-screen px-2 py-4 sm:px-6 sm:py-8 flex items-center justify-center">
      <div className="w-full max-w-[500px] min-h-[calc(100vh-2rem)] flex flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-[#44668e]/30 ring-1 ring-white/60">
        
        {/* Header Top Section with Hero Banner & Mascots */}
        <header className="relative bg-gradient-to-br from-[#44668e] via-[#3d5d83] to-[#2d496a] text-white pt-8 pb-7 px-6 text-center overflow-hidden rounded-b-[2rem]">
          {/* Subtle Decorative Background Bubbles */}
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#00ced0]/20 blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-[#6482a4]/30 blur-xl pointer-events-none" />

          {/* Mascots: Mawa (Left) & Miwa (Right) */}
          <img 
            src="/maskot 1 mawa.png" 
            alt="Maskot Mawa Kismawa" 
            className="absolute -bottom-4 -left-4 w-25 sm:w-36 md:w-40 h-auto drop-shadow-lg z-10 pointer-events-none transform -rotate-6 transition-transform duration-300 hover:scale-105" 
          />
          <img 
            src="/maskot 2 miwa.png" 
            alt="Maskot Miwa Kismawa" 
            className="absolute -bottom-4 -right-4 w-25 sm:w-36 md:w-40 h-auto drop-shadow-lg z-10 pointer-events-none transform rotate-6 transition-transform duration-300 hover:scale-105" 
          />

          {/* Logo with Ring & Glow */}
          <div className="relative z-10 mx-auto mb-3.5 flex h-24 w-24 items-center justify-center rounded-full bg-white p-1 shadow-xl shadow-black/15 ring-4 ring-[#00ced0]/60 transition-transform duration-300 hover:scale-105">
            <img 
              src="/logo kismawa.jpeg" 
              alt="KISMAWA Logo" 
              className="h-full w-full rounded-full object-cover" 
            />
          </div>

          <h1 className="relative z-10 text-3xl font-black tracking-tight text-white drop-shadow-sm font-sans">
            KISMAWA
          </h1>
          <p className="relative z-10 mt-1 text-xs sm:text-sm font-medium tracking-wide text-sky-100/90">
            Belanja Dekat, Harga Bersahabat
          </p>

          {/* Operational Hours Pill */}
          <div
            className={`relative z-10 mt-3.5 inline-flex items-center gap-2 rounded-full backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white shadow-inner ring-1 ${
              storeStatus.isOpen
                ? "bg-emerald-500/20 ring-emerald-400/40"
                : "bg-rose-500/20 ring-rose-400/40"
            }`}
          >
            <span className="relative flex h-2 w-2">
              {storeStatus.isOpen ? (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </>
              ) : (
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400"></span>
              )}
            </span>
            <span>{storeStatus.text}</span>
          </div>
        </header>

        {/* Open Daily Section */}
        <section aria-label="Jam Operasional" className="mx-4 sm:mx-5 mt-4">
          <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 text-center relative overflow-hidden">
            <div className="flex items-center justify-center gap-1.5 font-black text-[#44668e] text-sm mb-2.5">
              <Clock className="w-4 h-4 text-[#00ced0]" />
              <span className="tracking-wide uppercase text-lg font-black">Open Daily</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs text-[#44668e] bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 font-medium">
              <div className="flex flex-col items-center">
                <span className="font-bold text-[#44668e]">Senin - Jumat</span>
                <span className="text-[#00ced0] font-extrabold mt-0.5">08.00 - 20.00 WIB</span>
              </div>
              <div className="flex flex-col items-center border-l border-slate-200 pl-2">
                <span className="font-bold text-[#44668e]">Sabtu</span>
                <span className="text-[#00ced0] font-extrabold mt-0.5">08.00 - 12.00 WIB</span>
              </div>
            </div>

            <p className="mt-2.5 text-[11px] font-bold text-[#6482a4] tracking-wide">
              Bidang Usaha KOPMA UNSIL
            </p>
          </div>
        </section>

        {/* Hero Banner Carousel Section */}
        <section aria-label="Banner Promo" className="mx-4 sm:mx-5 mt-4">
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 shadow-md aspect-[16/9] bg-slate-100 group">
            {/* Slides container */}
            <div 
              className="flex h-full w-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroBanners.map((banner) => (
                <div key={banner.id} className="h-full w-full shrink-0 relative">
                  <img 
                    src={banner.src} 
                    alt={banner.alt} 
                    className="h-full w-full object-cover" 
                  />
                  {/* Subtle overlay gradient for better visual depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Visible on hover or touch) */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroBanners.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-[#44668e] shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-110 focus-visible:outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroBanners.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-[#44668e] shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-110 focus-visible:outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/25 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              {heroBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-5 bg-[#00ced0]" : "w-2 bg-white/70 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Announcement Section */}
        <section aria-label="Pengumuman" className="mx-4 sm:mx-5 mt-3">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#00ced0]/15 via-sky-50 to-[#44668e]/10 px-4 py-3 border border-[#00ced0]/30 shadow-xs flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 shrink-0 text-[#00ced0] animate-bounce" />
            <p className="text-center text-xs sm:text-sm font-bold text-[#44668e]">
              🎉 Open Pre-Order Hampers &amp; Buket Wisuda!
            </p>
          </div>
        </section>

        {/* Sticky Filter Bar */}
        <nav aria-label="Kategori produk" className="sticky top-0 z-20 mt-4 border-b border-slate-100 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-5">
          <div className="flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ced0] ${
                    isActive
                      ? "bg-[#00ced0] text-white shadow-md shadow-[#00ced0]/35 scale-[1.03]"
                      : "bg-slate-100 text-[#44668e] hover:bg-[#6482a4]/15 hover:text-[#44668e]"
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </nav>

        {/* Product Cards Grid */}
        <section aria-label="Daftar produk" className="flex-1 bg-product-pattern px-4 py-5 sm:px-5">
          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl bg-slate-50 border border-dashed border-slate-200 px-5 py-12 text-center text-sm font-medium text-slate-400">
              Belum ada produk di kategori ini.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  formatPrice={formatPrice}
                />
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-auto border-t border-slate-100 bg-slate-50/70 px-5 py-6 text-center text-xs leading-5 text-[#44668e]/80 flex flex-col gap-3.5 items-center">
          {/* Instagram Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a 
              href="https://www.instagram.com/kismawa.unsil/" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 border border-slate-200 text-[#44668e] font-bold shadow-2xs hover:bg-[#00ced0]/10 hover:text-[#00ced0] hover:border-[#00ced0]/40 transition-all duration-200"
            >
              <InstagramIcon className="h-3.5 w-3.5 text-[#e1306c]" />
              <span>@kismawa.unsil</span>
            </a>
            <a 
              href="https://www.instagram.com/kopmaunsil/" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 border border-slate-200 text-[#44668e] font-bold shadow-2xs hover:bg-[#00ced0]/10 hover:text-[#00ced0] hover:border-[#00ced0]/40 transition-all duration-200"
            >
              <InstagramIcon className="h-3.5 w-3.5 text-[#e1306c]" />
              <span>@kopmaunsil</span>
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center gap-1 max-w-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5 font-bold text-[#44668e]">
              <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-[#00ced0]" />
              <span>KOPMA UNSIL</span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#44668e]/75">
              Jl. Siliwangi no. 24 Kelurahan Kahuripan Kecamatan Tawang Kota Tasikmalaya
            </p>
          </div>

          <p className="text-[10px] text-slate-400 font-medium">© 2026 KISMAWA. All rights reserved.</p>
        </footer>

      </div>
    </main>
  )
}

