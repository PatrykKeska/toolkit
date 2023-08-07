import { NavCart } from "./NavCart";
import accordion from "../../assets/icons/png/accordion.png";
import counter from "../../assets/icons/png/counter.png";
import services from "../../assets/icons/png/services.png";
import blogCard from "../../assets/icons/png/blogcard.png";
import boximg from "../../assets/icons/png/boximg.png";
import buttons from "../../assets/icons/png/buttons.png";
import carousel from "../../assets/icons/png/carousel.png";
import heading from "../../assets/icons/png/heading.png";
import hero from "../../assets/icons/png/hero.png";
import mobile from "../../assets/icons/png/mobile.png";
import modals from "../../assets/icons/png/modals.png";
import tabs from "../../assets/icons/png/tabs.png";
import home from "../../assets/icons/png/home.png";
import pdf from "../../assets/icons/png/pdf.png";
import news from "../../assets/icons/png/news.png";
export const Navi = () => {
  return (
    <nav className='flex justify-center items-center mx-auto gap-7 max-w-[1500px] flex-wrap my-10 '>
      <NavCart href='/' icon={home} title='Getting Started' />
      <NavCart href='/mobile-view' icon={mobile} title='Full mobile view' />
      <NavCart href='/carousels' icon={carousel} title='Carousels' />
      <NavCart href='/buttons' icon={buttons} title='Buttons' />
      <NavCart href='/headings' icon={heading} title='Headings' />
      <NavCart href='/modals' icon={modals} title='Modals' />
      <NavCart href='/box-img' icon={boximg} title='Box with img' />
      <NavCart href='/blog-cards' icon={blogCard} title='Blog Cards' />
      <NavCart href='/hero-section' icon={hero} title='Hero Section' />
      <NavCart href='/services' icon={services} title='Services' />
      <NavCart href='/accordions' icon={accordion} title='Accordions' />
      <NavCart href='/counters' icon={counter} title='Counters' />
      <NavCart href='/tabs' icon={tabs} title='Tabs' />
      <NavCart href='/pdf' icon={pdf} title='Pdf Preview' />
      <NavCart href='/news' icon={news} title='News' />
    </nav>
  );
};
