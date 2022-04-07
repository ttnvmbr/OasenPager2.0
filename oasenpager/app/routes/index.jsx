// import { useInView } from "react-intersection-observer";
import { DotNav } from "~/components/DotNav/Component";
import { SectionContainer } from "~/components/SectionContainer/Component";
import { SectionWater } from "~/components/SectionWater/Component";
import { Footer } from "~/components/Footer/Component";
import { Navbar } from "~/components/Navbar/Component";
import { Landing } from "~/components/Landing/Component";
import { Proces } from "~/components/Proces/Component";
import { Research } from "~/components/Research/Component";
import { TweeDruppels } from "~/components/Concept/TweeDruppels";
import { OasenForKids } from "~/components/Concept/OasenForKids";
import { Accessibility } from "~/components/Concept/Accessibility";

export default function Index() {
  const [indexActive, setIndexActive] = React.useState(0);

  const sections = [0, 1, 2, 3, 4, 5, 6];

  const Section = (props) => {
    // const [ref, inView] = useInView({ threshold: 0.5 });

    // React.useEffect(() => {
    //   if (inView) {
    //     props.inViewHandler();
    //   }
    // }, [inView]);

    return (
      <section
        ref={ref}
        id={props.id}
        className={`h-screen w-screen bg-blue-oasen flex justify-center items-center relative`}
      >
        {props.children}
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <DotNav sections={sections} activeState={indexActive} />

      <Section inViewHandler={() => setIndexActive(0)} id={sections[0]}>
        <SectionContainer></SectionContainer>
        <Landing />
      </Section>

      <Section inViewHandler={() => setIndexActive(1)} id={sections[1]}>
        <div className="absolute w-full h-full top-1/2 z-30 -translate-x-1/2 left-1/2 -translate-y-1/2 flex justify-center items-center">
          <SectionContainer></SectionContainer>
        </div>
        <SectionWater></SectionWater>
        <Research />
      </Section>

      <Section inViewHandler={() => setIndexActive(2)} id={sections[2]}>
        <SectionContainer></SectionContainer>
        <Proces />
      </Section>

      <Section inViewHandler={() => setIndexActive(4)} id={sections[4]}>
        <SectionContainer></SectionContainer>
        <Accessibility />
      </Section>

      <Section inViewHandler={() => setIndexActive(5)} id={sections[5]}>
        <SectionContainer></SectionContainer>
        <OasenForKids />
      </Section>

      <Section inViewHandler={() => setIndexActive(6)} id={sections[6]}>
        <SectionContainer></SectionContainer>
        <TweeDruppels />
      </Section>

      <Footer />
    </>
  );
}
