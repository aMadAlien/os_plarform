import Slogan from "./Slogan";
import CoursesBlock from "./CoursesBlock";
import Explaner from "./Explaner";
import Warranty from "./Warranty";
import ReviewsSection from "./ReviewsSection";
import Accordion from "~/components/Accordion";
import { faq } from "./data";
import Form from "./Form";
import TeamBlock from "./TeamBlock";



export function Welcome() {

  return (
    <main className="">

      <Slogan />

      <div className="container">
        <CoursesBlock />
      </div>

      <div className="container">
        <Explaner />
      </div>

      <Warranty />

      <TeamBlock />

      <ReviewsSection />

      <Form />

      <section className="max-w-[1216px] w-full mx-auto px-4 mb-16">
        <Accordion data={faq} />
      </section>

    </main>
  );
}
