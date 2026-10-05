// Images are require()-ed so CRA bundles them
const CRM = require('../assets/images/Protfolio-images/CRM.jpg');
const Ecom = require('../assets/images/Protfolio-images/Ecom.jpg');
const HR = require('../assets/images/Protfolio-images/HR.jpg');
const Realestate = require('../assets/images/Protfolio-images/Realestate.jpg');
const RestaurantApp = require('../assets/images/Protfolio-images/restaurantapp.jpg');
const Business = require('../assets/images/Protfolio-images/Corp.jpg');

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Modern online shopping website with payment gateway, order management and responsive design.',
    image: Ecom,
    tags: ['React', 'Node.js', 'MySQL'],
  },
  {
    id: 2,
    title: 'Property Dealer Website',
    description:
      'Lead generation focused real-estate website with inquiry forms and SEO optimization.',
    image: Realestate,
    tags: ['WordPress', 'PHP'],
  },
  {
    id: 3,
    title: 'Restaurant Mobile App',
    description:
      'Food ordering and delivery application with real-time tracking.',
    image: RestaurantApp,
    tags: ['Flutter', 'Firebase'],
  },
  {
    id: 4,
    title: 'CRM Management Software',
    description:
      'Custom software for managing customers, sales and reports.',
    image: CRM,
    tags: ['Laravel', 'MySQL'],
  },
  {
    id: 5,
    title: 'Corporate Business Website',
    description:
      'Professional business website with modern UI and performance optimization.',
    image: Business,
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    title: 'HR Management System',
    description:
      'Employee attendance, payroll and performance management software.',
    image: HR,
    tags: ['React', 'Node.js'],
  },
];

export default projects;
