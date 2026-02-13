import CoursesBlock from "@/sections/home/CoursesBlock";
import ReviewsSection from "@/sections/home/ReviewsSection";
import Accordion from "@/components/Accordion";
import { faq } from "@/sections/home/data";
import Form from "@/sections/home/Form";
import TeamBlock from "@/sections/home/TeamBlock";
import StudyWays from "@/sections/home/StudyWays";
import HeroBlock from "@/sections/home/HeroBlock";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroBlock />

        <div className="container">
          <CoursesBlock />
        </div>

        <div className="container">
          <StudyWays />
        </div>

        <TeamBlock />
        <ReviewsSection />
        <Form />

        <section className="max-w-[1216px] w-full mx-auto px-4 mb-16">
          <Accordion data={faq} />
        </section>
      </main>

      <Footer />
    </>
  );
}
