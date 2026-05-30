"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Sign Laban"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static",
      }}
      title="Sign Laban: Where Ancient Flavors Meet Modern Delights"
      description="Experience the enchanting fusion of India's aromatic spices and Egypt's rich, historical sweets. Sign Laban proudly presents the first authentic Indian-Egyptian dessert collection, crafted to captivate your senses."
      buttons={[
        {
          text: "Explore Our Menu",
          href: "#menu",
        },
        {
          text: "Learn Our Story",
          href: "#about",
        },
      ]}
      buttonAnimation="slide-up"
      carouselItems={[
        {
          id: "hero-carousel-1",
          imageSrc: "http://img.b2bpic.net/free-photo/chopped-multicolor-bell-peppers-glass-cup_114579-71980.jpg",
          imageAlt: "A vibrant platter of Indian-Egyptian fusion desserts",
        },
        {
          id: "hero-carousel-2",
          imageSrc: "http://img.b2bpic.net/free-photo/honey-cake-black-tea_140725-4040.jpg",
          imageAlt: "Luxurious Egyptian sweets adorned with pistachios",
        },
        {
          id: "hero-carousel-3",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-cookies-board-marble-background_114579-51511.jpg",
          imageAlt: "Colorful assortment of traditional Indian mithai",
        },
        {
          id: "hero-carousel-4",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-hand-holding-dessert-with-powdered-cocoa_23-2148689823.jpg",
          imageAlt: "Hands gracefully presenting an exquisite dessert",
        },
        {
          id: "hero-carousel-5",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-muffin-ingredients-top-view_23-2148718980.jpg",
          imageAlt: "Close-up of fresh, aromatic ingredients for dessert making",
        },
        {
          id: "hero-carousel-6",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-dessert-plate_23-2151971375.jpg",
          imageAlt: "Inviting interior of a cozy, elegant dessert boutique",
        },
      ]}
      autoPlay={true}
      autoPlayInterval={5000}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="left"
      title="Our Journey: Crafting Culinary Bridges"
      description="Sign Laban began with a dream to blend the rich culinary heritages of India and Egypt. Our founders, passionate about sweets and heritage, meticulously developed recipes that honor traditional methods while introducing delightful new flavor profiles. Each dessert tells a story of cultural unity and sweet innovation."
      bulletPoints={[
        {
          title: "Authentic Recipes",
          description: "We uphold time-honored recipes from both cultures, ensuring genuine flavors in every bite.",
        },
        {
          title: "Premium Ingredients",
          description: "Sourced from the finest local and international suppliers for unparalleled quality and taste.",
        },
        {
          title: "Artisan Craftsmanship",
          description: "Every dessert is handmade with passion and precision by our skilled chefs.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/colorful-baskets-fresh-spices-sale-generated-by-ai_188544-9016.jpg"
      imageAlt="Spices and ingredients from India and Egypt on a table"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Rosewater Baklava",
          description: "A delightful twist on Egyptian Baklava, infused with fragrant Indian rosewater and crunchy pistachios. Layers of delicate phyllo pastry soaked in sweet syrup.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-turkish-pakhlava-with-pistachio-served-with-black-tea_140725-8711.jpg",
          imageAlt: "Rosewater Baklava",
          titleImageSrc: "http://img.b2bpic.net/free-photo/caucasian-traditional-cookies-with-sugar-powder-top-white-ceramic-plate_114579-61790.jpg",
          buttonText: "View Details",
        },
        {
          title: "Saffron Kheer with Cardamom",
          description: "Creamy Indian rice pudding enriched with saffron threads and a hint of Egyptian cardamom, creating a truly aromatic dessert that melts in your mouth.",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-healthy-oatmeal-with-grapes-yogurt-cottage-cheese-healthy-breakfast-fitness-food-proper-nutrition-flat-lay-top-view_2829-6327.jpg",
          imageAlt: "Saffron Kheer with Cardamom",
          titleImageSrc: "http://img.b2bpic.net/free-photo/saffron-spice-still-life-arrangement_23-2149130053.jpg",
          buttonText: "View Details",
        },
        {
          title: "Coconut Basbousa with Jaggery",
          description: "A moist Egyptian semolina cake, reimagined with the earthy sweetness of Indian jaggery and a generous topping of toasted coconut flakes. Pure bliss!",
          imageSrc: "http://img.b2bpic.net/free-photo/orange-aroma-jellies-black-platter_114579-9917.jpg",
          imageAlt: "Coconut Basbousa with Jaggery",
          titleImageSrc: "http://img.b2bpic.net/free-photo/delicious-cake-with-coconut-top-view_23-2148875226.jpg",
          buttonText: "View Details",
        },
      ]}
      title="Signature Delights: A Taste of Two Worlds"
      description="Discover our exquisite selection of desserts, where classic Indian sweets meet the timeless elegance of Egyptian pastries. Each creation is a harmonious blend of tradition and innovation, designed to offer a unique culinary experience."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Cardamom Kunafa",
          price: "$12.00",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-tangerine-powder-bowl-table-surrounded-by-dry-mandarines-leaves_181624-10142.jpg",
          imageAlt: "Cardamom Kunafa",
        },
        {
          id: "p2",
          name: "Rose Mahalabia",
          price: "$9.50",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-sweet-dessert-panna-cotta-composition-tasty-dessert-concept_185193-110758.jpg",
          imageAlt: "Rose Mahalabia",
        },
        {
          id: "p3",
          name: "Mango Laban Lassi",
          price: "$7.00",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-thai-food-still-life_23-2149508917.jpg",
          imageAlt: "Mango Laban Lassi",
        },
        {
          id: "p4",
          name: "Pistachio Luqaimat",
          price: "$11.00",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-cookies-wooden-platter-bowl-herb-fruits-flowers-marble-ground_140725-52808.jpg",
          imageAlt: "Pistachio Luqaimat",
        },
        {
          id: "p5",
          name: "Saffron Gulab Jamun",
          price: "$8.50",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-appetizing-tangyuan-bowl_23-2149247241.jpg",
          imageAlt: "Saffron Gulab Jamun",
        },
        {
          id: "p6",
          name: "Date Kahk Cookies",
          price: "$10.00",
          imageSrc: "http://img.b2bpic.net/free-photo/stack-oatmeal-cookies-cup-cinnamon-white-table_114579-75915.jpg",
          imageAlt: "Date Kahk Cookies",
        },
      ]}
      title="Our Full Dessert Collection"
      description="Browse through our complete range of exquisite Indian-Egyptian desserts. Perfect for any occasion, from intimate gatherings to grand celebrations."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Priya Sharma",
          role: "Food Blogger",
          company: "TasteTrail",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/funny-girl-posing-with-donuts-summer-outside_169016-10681.jpg",
          imageAlt: "Priya Sharma",
        },
        {
          id: "t2",
          name: "Ahmed Hassan",
          role: "Chef",
          company: "Spice Route Cuisine",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/sutlach-turkish-milk-pudding-desserts_140725-10767.jpg",
          imageAlt: "Ahmed Hassan",
        },
        {
          id: "t3",
          name: "Leila Khan",
          role: "Pastry Enthusiast",
          company: "Sweet Discoveries",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-pin-up-woman-eating-cake_176420-3344.jpg",
          imageAlt: "Leila Khan",
        },
        {
          id: "t4",
          name: "Rohan Patel",
          role: "Entrepreneur",
          company: "Global Flavors Inc.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-friends-traveling-through-japan_23-2149287948.jpg",
          imageAlt: "Rohan Patel",
        },
        {
          id: "t5",
          name: "Sara Ali",
          role: "Cultural Ambassador",
          company: "Bridge of Flavors",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-grandchild-christmas-day-making-dough-shapes_482257-21705.jpg",
          imageAlt: "Sara Ali",
        },
      ]}
      kpiItems={[
        {
          value: "4.9/5",
          label: "Customer Rating",
        },
        {
          value: "2000+",
          label: "Orders Delivered",
        },
        {
          value: "150+",
          label: "Unique Recipes",
        },
      ]}
      title="What Our Sweet Fans Say"
      description="Our customers can't get enough of Sign Laban's unique Indian-Egyptian desserts. Read their delightful experiences and discover why our fusion sweets are a must-try!"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",
          title: "What makes Sign Laban desserts unique?",
          content: "Sign Laban is the first to perfectly blend traditional Indian and Egyptian dessert recipes, using authentic ingredients and unique flavor combinations to create a truly one-of-a-kind sweet experience.",
        },
        {
          id: "faq2",
          title: "Do you offer vegan or gluten-free options?",
          content: "We are currently exploring options to introduce vegan and gluten-free desserts. Please check our menu regularly or contact us for the latest updates.",
        },
        {
          id: "faq3",
          title: "Can I place custom orders for events?",
          content: "Yes, we gladly accept custom orders for special events, weddings, and parties. Please contact our team with your requirements, and we'll help create a memorable dessert experience.",
        },
        {
          id: "faq4",
          title: "What are your delivery options?",
          content: "We offer local delivery within [City/Region] and are working on expanding our reach. You can also pick up your order directly from our store.",
        },
      ]}
      sideTitle="Sweet Questions? We Have Answers!"
      sideDescription="Find answers to the most common questions about our desserts, ingredients, ordering, and more."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get in Touch"
      title="Your Sweet Journey Starts Here"
      description="Have a question, a custom order request, or just want to share your feedback? We'd love to hear from you. Reach out to the Sign Laban team today!"
      inputPlaceholder="Enter your email for updates"
      buttonText="Subscribe"
      termsText="By clicking Subscribe you're confirming that you agree with our Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#menu",
            },
          ],
        },
        {
          items: [
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Sign Laban"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
