import { useState } from "react";
import Slogan from "./Slogan";
import CoursesBlock from "./CoursesBlock";
import Explaner from "./Explaner";
import Warranty from "./Warranty";


export function Welcome() {

  return (
    <main className="">

      <Slogan />

      <CoursesBlock />

      <Explaner />

      <Warranty />

    </main>
  );
}
