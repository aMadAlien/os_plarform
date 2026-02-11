import CoursesBlock from "./CoursesBlock";
import ReviewsSection from "./ReviewsSection";
import Accordion from "~/components/Accordion";
import { faq } from "./data";
import Form from "./Form";
import TeamBlock from "./TeamBlock";
import StudyWays from "./StudyWays";
import HeroBlock from "./HeroBlock";
import Header from "~/components/Header";

export function Welcome() {

  return (
    <>
      <Header />

      <main className="">
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
    </>
  );
}
