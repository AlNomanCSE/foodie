import HeroSection from "@/components/app components/HeroSection";
import styles from "./page.module.css";
import ImageGallery from "@/components/app components/ImageGallery";
import PopularItems from "@/components/app components/PopularItems";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ImageGallery />
      <PopularItems />
    </main>
  );
}
