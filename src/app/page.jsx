import HeroSection from "@/components/app components/HeroSection";
import styles from "./page.module.css";
import ImageGallery from "@/components/app components/ImageGallery";
import PopularItems from "@/components/app components/PopularItems";
import AboutSection from "@/components/app components/AboutSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ImageGallery />
      <PopularItems />
      <AboutSection />
    </main>
  );
}
