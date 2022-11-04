import HightlightNews from '../component/HightLightPost';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import Activ from './Activity';
import Cauro from './Carousel';
import Testimonial from './Testimonial';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Cauro />
    {/* <Hero /> */}
    <HightlightNews />
    <Activ />
    {/* <Event/> */}
    <VerticalFeatures />
    {/* <Team/> */}
    <Testimonial />
    {/* <Banner /> */}
  </div>
);

export { Base };
