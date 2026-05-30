import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Sign Laban: Indian & Egyptian Fusion Desserts',
  description: 'Discover Sign Laban, the first to blend Indian and Egyptian dessert traditions. Experience unique fusion sweets, from rosewater baklava to saffron kheer. Order online for a delightful culinary journey.',
  keywords: ["indian desserts, egyptian desserts, fusion sweets, sign laban, baklava, kheer, mahalabia, gulab jamun, traditional desserts, unique sweets"],
  openGraph: {
    "title": "Sign Laban: First Indian-Egyptian Fusion Desserts",
    "description": "Savor the unique flavors of Indian-Egyptian fusion desserts by Sign Laban. Handcrafted sweets with a rich cultural blend.",
    "url": "https://www.signlaban.com",
    "siteName": "Sign Laban",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/chopped-multicolor-bell-peppers-glass-cup_114579-71980.jpg",
        "alt": "Platter of Indian and Egyptian fusion desserts"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Sign Laban: First Indian-Egyptian Fusion Desserts",
    "description": "Savor the unique flavors of Indian-Egyptian fusion desserts by Sign Laban. Handcrafted sweets with a rich cultural blend.",
    "images": [
      "http://img.b2bpic.net/free-photo/chopped-multicolor-bell-peppers-glass-cup_114579-71980.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
