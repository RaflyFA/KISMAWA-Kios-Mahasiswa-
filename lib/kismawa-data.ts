export type ProductCategory = "Buket" | "Hampers"

export interface Product {
  id: string
  slug: string
  name: string
  price: number
  category: ProductCategory
  image: string
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
  // Buket Category
  {
    id: "1",
    slug: "buket-kawat-bulu-50k",
    name: "Buket Kawat Bulu 50k",
    price: 50000,
    category: "Buket",
    image: "/buket kawat bulu 50k.png",
    description: standardDescription,
  },
  {
    id: "2",
    slug: "buket-kawat-bulu-40k",
    name: "Buket Kawat Bulu 40k",
    price: 40000,
    category: "Buket",
    image: "/buket kawat bulu 40k.png",
    description: standardDescription,
  },
  {
    id: "3",
    slug: "buket-kawat-bulu-35k",
    name: "Buket Kawat Bulu 35k",
    price: 35000,
    category: "Buket",
    image: "/buket kawat bulu 35k.png",
    description: standardDescription,
  },
  {
    id: "4",
    slug: "buket-snack-35k",
    name: "Buket Snack 35k",
    price: 35000,
    category: "Buket",
    image: "/buket snack 35k.png",
    description: standardDescription,
  },
  {
    id: "5",
    slug: "buket-snack-40k",
    name: "Buket Snack 40k",
    price: 40000,
    category: "Buket",
    image: "/buket snack 40k.png",
    description: standardDescription,
  },
  {
    id: "6",
    slug: "buket-custom-buku",
    name: "Buket Custom Buku",
    price: 0,
    category: "Buket",
    image: "/buket custome buku.png",
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
    isCustom: true,
    description: customBuketDescription,
  },

  // Hampers Category
  {
    id: "9",
    slug: "hampers-25k",
    name: "Hampers 25k",
    price: 25000,
    category: "Hampers",
    image: "/hampers 25k.png",
    description: standardDescription,
  },
  {
    id: "10",
    slug: "hampers-30k",
    name: "Hampers 30k",
    price: 30000,
    category: "Hampers",
    image: "/hampers 30k.png",
    description: standardDescription,
  },
]

export const getProductImage = (product: Product) => product.image


