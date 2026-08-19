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


