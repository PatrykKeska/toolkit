import { NavCart } from "./NavCart";

export const Navi = () => {
  return (
    <nav className='flex justify-center items-center mx-auto gap-7 max-w-[1500px] flex-wrap my-10 '>
      <NavCart href='/' icon='🏠' title='Home Page' />
      <NavCart href='/mobile-view' icon='📱' title='Full mobile view' />
      <NavCart href='/carousels' icon='🎡' title='Carousels' />
      <NavCart href='/buttons' icon='👆' title='Buttons' />
      <NavCart href='/headings' icon='💀' title='Headings' />
      <NavCart href='/modals' icon='🏴‍☠️' title='Modals' />
      <NavCart href='/box-img' icon='🕋' title='Box with img' />
      <NavCart href='/blog-cards' icon='⛰️' title='Blog Cards' />
      <NavCart href='/hero-section' icon='🎖️' title='Hero Section' />
      <NavCart href='/services' icon='🛎️' title='Services' />
      <NavCart href='/accordions' icon='🪗' title='Accordions' />
      <NavCart href='/counters' icon='⏱️' title='Counters' />
      <NavCart href='/tabs' icon='📑' title='Tabs' />
    </nav>
  );
};
