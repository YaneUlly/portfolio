import '../App.css';
import SocialIcons from '../components/SocialIcons';
import { motion } from 'framer-motion';
// import { TypeAnimation } from 'react-type-animation';

function LandingPage() {
  return (
    <div>
      <div className='home-container'>
        <section>
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
            <h1 className='name-title'>Yane Ully,</h1>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h3 className='subtitle'>ui developer.</h3>
          </motion.div>
          {/* <TypeAnimation
            sequence={[
              'ui developer',
              3000,
              'coffee lover',
              3000,
              'party hard',
              3000,
              'family person',
              3000,
              'travel enthusiast',
              3000,
            ]}
            wrapper='span'
            speed={25}
            cursor={false}
            repeat={Infinity}
          /> */}
          <SocialIcons />
        </section>
        <section className='home-buttons'>
          <button className='ux-button'>Ux/Ui Design Work</button>
          <button>Web Development Work</button>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
