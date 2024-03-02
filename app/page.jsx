import About from "./components/about/about";
import Faqs from "./components/faqs/faqs";
import Portfolio from "./components/portfolio/portfolio";
import Showcase from "./components/showcase/showcase";
import Testimonials from "./components/testimonials/testimonials";

export default function Index() {
  return (
    <>
        <Showcase />
        <About />
        <Portfolio />
        <Faqs />
        <Testimonials />
    </>
  );
}
