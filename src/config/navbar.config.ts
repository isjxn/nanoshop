interface NavbarLink {
  url: string;
  text: string;
}

const navbarConfig: Array<NavbarLink> = [
  {
    url: '/',
    text: 'Home'
  },
  {
    url: '/shop',
    text: 'Shop'
  },
  {
    url: '/about',
    text: 'About'
  },
]

export default navbarConfig;