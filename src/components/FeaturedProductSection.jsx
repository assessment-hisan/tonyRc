import { Link } from 'react-router-dom';

const featured = {
  id: 'featured-1',
  name: 'RC Thunder Maxx',
  image: '/images/thunderMaxx.png',
  price: 399.99,
  description:
    'Dominate any terrain with the RC Thunder Maxx – built for speed, control, and extreme durability. Featuring high-torque motors, pro suspension, and long-range remote capabilities.'
};

const FeaturedProductSection = () => {
  return (
    <section className="w-full px-4">
     <div>
        <img src={featured.image} alt=""   className='h-auto mx-auto h-[32rem] content-'/>
     </div>
    </section>
  );
};

export default FeaturedProductSection;
