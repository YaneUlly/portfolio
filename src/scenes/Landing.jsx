import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../App.css';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
    >
      {/* IMAGE SECTION  */}
      <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
        {isAboveMediumScreens ? (
          <div className='profile__img'></div>
        ) : (
          <div className='profile__img'></div>
        )}
      </div>
      {/* MAIN SECTION  */}
      <div className='z-30 basis-2/5 mt-12 md:mt-32'>
        {/* SOCIAL MEDIA ICONS  */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>

        {/* HEADINGS */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='text-6xl font-poppins z-10 text-center md:text-start'>
            Yane Ully
          </p>
          <p className='mt-10 mb-7 text-sm text-center md:text-start'>
            UI Developer & Product Designer
          </p>
          <p className='mt-10 mb-7 text-sm text-center md:text-start'>
            Im creative UI developer based in Lisbon, and Im very passionate and
            dedicated to my work
          </p>
        </motion.div>

        {/* CALL TO ACTION  */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 '
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            Say hello
          </AnchorLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
