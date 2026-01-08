import Header from "@/components/ui/custom-component/header";
import Section2 from "@/components/ui/custom-component/section2";
import Section3 from "@/components/ui/custom-component/Section3";
import Section4 from "@/components/ui/custom-component/section5";
import Section6 from "@/components/ui/custom-component/Section6";
import Section7 from "@/components/ui/custom-component/Section7";
import Section8 from "@/components/ui/custom-component/Section8";
import New from "@/components/ui/custom-component/New";
import Products from "@/components/ui/custom-component/Products";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Section2 />
      <Section3 />
      <Products />
      <Section4 />
      <Section6 />
      <Section7 />
      <Section8 />
      <New />
    </div>
  );
}
