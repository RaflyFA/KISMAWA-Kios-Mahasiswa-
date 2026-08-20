export type ProductCategory = "Buket" | "Hampers"

export interface Product {
  id: string
  slug: string
  name: string
  price: number
  category: ProductCategory
  image: string
  images?: string[]
  isCustom?: boolean
  description?: string | string[]
}

const customBuketDescription = [
  "10 s.d 14 lembar : 35k",
  "15 s.d 19 lembar : 40k",
  "20 s.d 24 lembar : 45k",
  "Jika ingin memakai bunga, tambah 5k per tangkai bunga",
]

const standardDescription = "Bisa request warna dan kombinasi produk"

export const products: Product[] = [
  // Buket Category - Buket Kawat Bulu (35k -> 50k)
  {
    id: "3",
    slug: "buket-kawat-bulu-35k",
    name: "Buket Kawat Bulu 35k",
    price: 35000,
    category: "Buket",
    image: "/buket kawat bulu 35k.png",
    images: [
      "/buket kawat bulu 35k.png",
      "/buket kawat bulu 35k 1.png",
      "/buket kawat bulu 35k 2.png",
      "/buket kawat bulu 35k 3.png",
    ],
    description: standardDescription,
  },
  {
    id: "2",
    slug: "buket-kawat-bulu-40k",
    name: "Buket Kawat Bulu 40k",
    price: 40000,
    category: "Buket",
    image: "/buket kawat bulu 40k.png",
    images: [
      "/buket kawat bulu 40k.png",
      "/buket kawat bulu 40k 1.png",
      "/buket kawat bulu 40k 2.png",
      "/buket kawat bulu 40k 3.png",
      "/buket kawat bulu 40k 4.png",
      "/buket kawat bulu 40k 5.png",
      "/buket kawat bulu 40k 6.png",
    ],
    description: standardDescription,
  },
  {
    id: "11",
    slug: "buket-kawat-bulu-45k",
    name: "Buket Kawat Bulu 45k",
    price: 45000,
    category: "Buket",
    image: "/buket kawat bulu 45k.png",
    images: ["/buket kawat bulu 45k.png"],
    description: standardDescription,
  },
  {
    id: "1",
    slug: "buket-kawat-bulu-50k",
    name: "Buket Kawat Bulu 50k",
    price: 50000,
    category: "Buket",
    image: "/buket kawat bulu 50k.png",
    images: [
      "/buket kawat bulu 50k.png",
      "/buket kawat bulu 50k 1.png",
    ],
    description: standardDescription,
  },

  // Buket Category - Buket Snack (35k -> 40k)
  {
    id: "4",
    slug: "buket-snack-35k",
    name: "Buket Snack 35k",
    price: 35000,
    category: "Buket",
    image: "/buket snack 35k.png",
    images: [
      "/buket snack 35k.png",
      "/buket snack 35k 1.png",
      "/buket snack 35k 2.png",
      "/buket snack 35k 3.png",
    ],
    description: standardDescription,
  },
  {
    id: "5",
    slug: "buket-snack-40k",
    name: "Buket Snack 40k",
    price: 40000,
    category: "Buket",
    image: "/buket snack 40k.png",
    images: [
      "/buket snack 40k.png",
      "/buket snack 40k 1.png",
      "/buket snack 40k 2.png",
      "/buket snack 40k 3.png",
      "/buket snack 40k 4.png",
      "/buket snack 40k 5.png",
    ],
    description: standardDescription,
  },

  // Buket Category - Buket Combine (40k -> 50k)
  {
    id: "12",
    slug: "buket-combine-40k",
    name: "Buket Combine 40k",
    price: 40000,
    category: "Buket",
    image: "/buket combine 40k.png",
    images: ["/buket combine 40k.png"],
    description: standardDescription,
  },
  {
    id: "13",
    slug: "buket-combine-45k",
    name: "Buket Combine 45k",
    price: 45000,
    category: "Buket",
    image: "/buket combine 45k.png",
    images: ["/buket combine 45k.png"],
    description: standardDescription,
  },
  {
    id: "14",
    slug: "buket-combine-50k",
    name: "Buket Combine 50k",
    price: 50000,
    category: "Buket",
    image: "/buket combine 50k.png",
    images: ["/buket combine 50k.png"],
    description: standardDescription,
  },

  // Buket Category - Buket Artificial (35k -> 90k)
  {
    id: "15",
    slug: "buket-artificial-35k",
    name: "Buket Artificial 35k",
    price: 35000,
    category: "Buket",
    image: "/buket artificial 35k.png",
    images: ["/buket artificial 35k.png"],
    description: standardDescription,
  },
  {
    id: "16",
    slug: "buket-artificial-40k",
    name: "Buket Artificial 40k",
    price: 40000,
    category: "Buket",
    image: "/buket artificial 40k.png",
    images: [
      "/buket artificial 40k.png",
      "/buket artificial 40k 1.png",
    ],
    description: standardDescription,
  },
  {
    id: "17",
    slug: "buket-artificial-60k",
    name: "Buket Artificial 60k",
    price: 60000,
    category: "Buket",
    image: "/buket artificial 60k.png",
    images: [
      "/buket artificial 60k.png",
      "/buket artificial 60k 1.png",
    ],
    description: standardDescription,
  },
  {
    id: "18",
    slug: "buket-artificial-65k",
    name: "Buket Artificial 65k",
    price: 65000,
    category: "Buket",
    image: "/buket artificial 65k.png",
    images: [
      "/buket artificial 65k.png",
      "/buket artificial 65k 1.png",
      "/buket artificial 65k 2.png",
    ],
    description: standardDescription,
  },
  {
    id: "19",
    slug: "buket-artificial-70k",
    name: "Buket Artificial 70k",
    price: 70000,
    category: "Buket",
    image: "/buket artificial 70k.png",
    images: ["/buket artificial 70k.png"],
    description: standardDescription,
  },
  {
    id: "20",
    slug: "buket-artificial-80k",
    name: "Buket Artificial 80k",
    price: 80000,
    category: "Buket",
    image: "/buket artificial 80k.png",
    images: ["/buket artificial 80k.png"],
    description: standardDescription,
  },
  {
    id: "21",
    slug: "buket-artificial-90k",
    name: "Buket Artificial 90k",
    price: 90000,
    category: "Buket",
    image: "/buket artificial 90k.png",
    images: ["/buket artificial 90k.png"],
    description: standardDescription,
  },

  // Buket Category - Buket Custom
  {
    id: "6",
    slug: "buket-custom-buku",
    name: "Buket Custom Buku",
    price: 0,
    category: "Buket",
    image: "/buket custome buku.png",
    images: ["/buket custome buku.png"],
    isCustom: true,
    description: customBuketDescription,
  },
  {
    id: "7",
    slug: "buket-custom-uang",
    name: "Buket Custom Uang",
    price: 0,
    category: "Buket",
    image: "/buket custome uang.png",
    images: ["/buket custome uang.png"],
    isCustom: true,
    description: customBuketDescription,
  },
  {
    id: "8",
    slug: "buket-custom-coklat",
    name: "Buket Custom Coklat",
    price: 0,
    category: "Buket",
    image: "/buket custome coklat.png",
    images: ["/buket custome coklat.png"],
    isCustom: true,
    description: customBuketDescription,
  },

  // Hampers Category (25k -> 30k)
  {
    id: "9",
    slug: "hampers-25k",
    name: "Hampers 25k",
    price: 25000,
    category: "Hampers",
    image: "/hampers 25k.png",
    images: [
      "/hampers 25k.png",
      "/hampers 25k 1.png",
      "/hampers 25k 2.png",
    ],
    description: standardDescription,
  },
  {
    id: "10",
    slug: "hampers-30k",
    name: "Hampers 30k",
    price: 30000,
    category: "Hampers",
    image: "/hampers 30k.png",
    images: [
      "/hampers 30k.png",
      "/hampers 30k 1.png",
      "/hampers 30k 2.png",
    ],
    description: standardDescription,
  },
]

export const getProductImage = (product: Product) => product.image

export const getProductImages = (product: Product): string[] => {
  if (product.images && product.images.length > 0) {
    return product.images
  }
  return [product.image]
}



