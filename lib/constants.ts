export const WA_NUMBER = "6281220662230"

export const buildWaLink = (productName: string, priceDisplay: string) => {
  const wave = "\u{1F44B}"
  const pin = "\u{1F4CD}"
  const money = "\u{1F4B0}"
  const memo = "\u{1F4DD}"

  const message = `Halo kak!!
Saya mau pesan produk berikut:
Produk: ${productName}
Harga: ${priceDisplay}
----------------------------------
FORMAT PEMESANAN
• Nama Pemesan: 
• Jumlah Pesanan: 
• Tanggal Pengambilan: 
• Catatan Tambahan: 
Mohon info selengkapnya ya Kak, terima kasih!`

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export interface StoreStatus {
  isOpen: boolean
  text: string
}

export function getStoreStatus(date = new Date()): StoreStatus {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    })

    const parts = formatter.formatToParts(date)
    let weekdayStr = ""
    let hour = 0
    let minute = 0

    for (const part of parts) {
      if (part.type === "weekday") weekdayStr = part.value
      if (part.type === "hour") hour = parseInt(part.value, 10)
      if (part.type === "minute") minute = parseInt(part.value, 10)
    }

    if (hour === 24) hour = 0

    const currentMinutes = hour * 60 + minute
    const openMinutes = 8 * 60 // 08:00
    const closeMinutesWeekdays = 16 * 60 // 16:00
    const closeMinutesSaturday = 12 * 60 // 12:00

    if (weekdayStr === "Sun") {
      return { isOpen: false, text: "Sudah Tutup, Kembali Lagi Senin" }
    }

    if (weekdayStr === "Sat") {
      if (currentMinutes >= openMinutes && currentMinutes < closeMinutesSaturday) {
        return { isOpen: true, text: "Buka Hari Ini" }
      } else if (currentMinutes >= closeMinutesSaturday) {
        return { isOpen: false, text: "Sudah Tutup, Kembali Lagi Senin" }
      } else {
        return { isOpen: false, text: "Sudah Tutup, Buka Jam 08.00 WIB" }
      }
    }

    // Mon - Fri
    if (currentMinutes >= openMinutes && currentMinutes < closeMinutesWeekdays) {
      return { isOpen: true, text: "Buka Hari Ini" }
    } else if (currentMinutes >= closeMinutesWeekdays) {
      return { isOpen: false, text: "Sudah Tutup, Kembali Lagi Besok" }
    } else {
      return { isOpen: false, text: "Sudah Tutup, Buka Jam 08.00 WIB" }
    }
  } catch {
    return { isOpen: true, text: "Buka Hari Ini" }
  }
}



