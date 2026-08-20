"use client"

import { useState } from "react"
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Product, getProductImages } from "@/lib/kismawa-data"
import { buildWaLink } from "@/lib/constants"

interface ProductCardProps {
  product: Product
  formatPrice: Intl.NumberFormat
}

export function ProductCard({ product, formatPrice }: ProductCardProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const images = getProductImages(product)
  const hasMultipleImages = images.length > 1

  const priceDisplay =
    product.isCustom || product.price === 0
      ? "Custom"
      : formatPrice.format(product.price)

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const minSwipeDistance = 30

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !hasMultipleImages) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    } else if (isRightSwipe) {
      setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#44668e]/10">
      {/* Product Image Container / Slider */}
      <div
        className="relative aspect-square w-full overflow-hidden bg-slate-100 select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images Track */}
        <div
          className="flex h-full w-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
        >
          {images.map((imgSrc, idx) => (
            <div key={idx} className="h-full w-full shrink-0 relative">
              <img
                src={imgSrc}
                alt={`${product.name} - ${idx + 1}`}
                width={400}
                height={400}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Category Tag */}
        <span className="absolute top-2 left-2 rounded-lg bg-white/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-[#44668e] shadow-xs z-10">
          {product.category}
        </span>

        {/* Left & Right Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto Sebelumnya"
              className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/40 text-white shadow-md backdrop-blur-xs transition-all hover:bg-slate-900/70 hover:scale-110 active:scale-95 focus:outline-none"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Foto Selanjutnya"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/40 text-white shadow-md backdrop-blur-xs transition-all hover:bg-slate-900/70 hover:scale-110 active:scale-95 focus:outline-none"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Slide Index Badge */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center z-10 bg-slate-900/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
              <span className="text-[10px] font-bold text-white tracking-wider">
                {currentImgIndex + 1}/{images.length}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Card Details */}
      <div className="flex flex-1 flex-col justify-between p-3 gap-2.5">
        <div>
          <h2 className="line-clamp-2 text-xs sm:text-sm font-bold leading-snug text-[#44668e] group-hover:text-[#00ced0] transition-colors">
            {product.name}
          </h2>

          {Array.isArray(product.description) ? (
            <ul className="mt-2 space-y-1 text-[10px] sm:text-[11px] text-[#44668e]/90 bg-slate-50 p-2 rounded-xl border border-slate-100 font-medium">
              {product.description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1 leading-tight">
                  <span className="text-[#00ced0] font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-[11px] font-medium text-slate-500 leading-snug">
              {product.description}
            </p>
          )}

          <p className="mt-2 text-sm font-black text-[#00ced0]">{priceDisplay}</p>
        </div>

        <a
          href={buildWaLink(product.name, priceDisplay)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] px-2.5 py-2 text-center text-xs font-extrabold text-white shadow-md shadow-[#25D366]/25 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
        >
          <MessageCircle
            aria-hidden="true"
            className="h-4 w-4 shrink-0 fill-current text-white"
          />
          <span>Pesan via WA</span>
        </a>
      </div>
    </article>
  )
}
