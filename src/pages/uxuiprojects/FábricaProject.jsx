import Fabrica from '../../assets/uxuiprojects/Fabrica.png';
import ReasonOne from '../../assets/uxuiprojects/ReasonOne.png';
import ReasonTwo from '../../assets/uxuiprojects/ReasonTwo.png';
import ReasonThree from '../../assets/uxuiprojects/ReasonThree.png';
import PersonaOne from '../../assets/uxuiprojects/PersonaOne.png';
import PersonaTwo from '../../assets/uxuiprojects/PersonaTwo.png';
import UserJourney from '../../assets/uxuiprojects/UserJourney.jpg';
import { Flex, Text, Box, Image, Button } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';

function FábricaProject() {
  return (
    <div>
      <Breadcrumb
        fontWeight='medium'
        fontSize='sm'
        color='#CCCCCC'
        m='2rem 0 0 2rem'
      >
        <BreadcrumbItem>
          <BreadcrumbLink href='/portfolio'>Portfolio</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/portfolio/uxuidesign'>
            UxUi Design Work
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='/portfolio/uxuidesign/fabricaproject'>
            Fábrica Project
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text fontSize={{ base: '3rem', md: '3.8rem' }} m='3rem 0 0 2rem'>
        Coffee Quiz
      </Text>

      <Text m='0 0 4rem 2rem'>
        A Quiz feature for Fábrica Coffee Roasters Ecommerce Landing Page
      </Text>

      <Image src={Fabrica} alt='fabrica-logo' width='80%' ml='8rem' />

      <Flex flexDirection='row'>
        <Box m='2rem 0 0 8rem' flex='1' maxWidth='300px'>
          <UnorderedList
            styleType='none'
            spacing='3'
            fontWeight='600'
            fontSize='1.2rem'
          >
            <ListItem>Overview</ListItem>
            <ListItem>Problem</ListItem>
            <ListItem>Ojective</ListItem>
            <ListItem>Research</ListItem>
            <ListItem>Design</ListItem>
            <ListItem>Results</ListItem>
          </UnorderedList>
        </Box>

        <Box m='2rem 12rem 1.5rem 0' flex='2'>
          <Text fontSize='2rem' fontWeight='600' mb='1rem'>
            Overview
          </Text>
          <Text mb='0.8rem'>
            During my work in Fábrica Coffee Roasters, as a{' '}
            <strong>Junior Product Designer</strong>. My primary responsibility
            was to conceptualize and design a feature for their e-commerce
            platform{' '}
            <strong>
              aimed at assisting users in selecting the perfect coffee tailored
              to their taste preferences.
            </strong>{' '}
            Within a span of <strong>less then a month</strong>, I successfully
            delivered a fully functional feature, collaborating closely with the{' '}
            <strong>CEO</strong> and the{' '}
            <strong>head of e-commerce operations</strong>.
          </Text>
          <Text mb='0.8rem'>
            Fábrica Coffee Roasters holds a distinguished position as a{' '}
            <strong>pioneer in the Specialty Coffee sector</strong> in Portugal,
            with a seven-year experience in the market. Throughout this period,
            the Specialty Coffee industry in Portugal has witnessed significant
            expansion, and Fábrica continues to serve as a benchmark within the
            field.
          </Text>

          <TableContainer m='1.5rem 0 1rem 0'>
            <Table variant='simple' size='sm'>
              <Tbody>
                <Tr>
                  <Td>Client</Td>
                  <Td>Fábrica Coffee Roasters</Td>
                </Tr>
                <Tr>
                  <Td>Year</Td>
                  <Td>2023</Td>
                </Tr>
                <Tr>
                  <Td>Scope of Work</Td>
                  <Td>Ux Research, Ui Design, WordPress Development</Td>
                </Tr>
                <Tr>
                  <Td>Tools</Td>
                  <Td>Figma, Excel, Miro, Notion, WordPress, MailChimp</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Button>Visit website</Button>
        </Box>
      </Flex>

      <Box p='2rem 10rem 1.5rem 8rem'>
        <Text fontSize='2rem' fontWeight='600' mb='1rem'>
          Problem
        </Text>
        <Text mb='0.8rem'>
          Fábrica Coffee consistently welcomes new customers, many of whom may
          be <strong>new to specialty coffee</strong>. These customers might not
          be familiar with the distinct characteristics of each coffee, how the
          origin influences taste, and other sensory aspects.{' '}
        </Text>
        <Text mb='0.8rem'>
          Despite Fábrica having numerous physical stores across Portugal, many
          of these new customers rely on knowledgeable baristas to guide them
          and{' '}
          <strong>
            assist in choosing a product that aligns with their taste
            preferences
          </strong>
          . However,{' '}
          <strong>
            this assistance is notably absent in the e-commerce platform
          </strong>
          .
        </Text>
        <Box bg='tomato' w='100%' p={4} color='white'>
          <Text>
            <strong>
              Lack of guidance and assistance for customers making purchases on
              the E-commerce platform, in contrast to the in-person experience
              in physical stores.
            </strong>
          </Text>
        </Box>
      </Box>

      <Box p='2rem 10rem 1.5rem 8rem'>
        <Text fontSize='2rem' fontWeight='600' mb='1rem'>
          Objective
        </Text>
        <Text mb='0.8rem'>
          To provide enhanced support to users during their purchase journey, in
          collaboration with the CEO and the head of e-commerce operations, we
          have decided to introduce a new feature on the website in the form of
          a dynamic Quiz.
        </Text>
        <Text mb='0.8rem'>
          As users answer each question in the quiz,{' '}
          <strong>personalized coffee recommendations</strong> will be generated
          based on their taste preferences. This will guide them in choosing the
          best coffee according to their preferences, ultimately{' '}
          <strong>enhancing user satisfaction</strong> and{' '}
          <strong>experience</strong> with their purchase.
        </Text>

        <Box
          maxWidth='80%'
          display='flex'
          flexDirection='column'
          gap='10px'
          justifyContent='center'
          alignItems='center'
          marginLeft='5rem'
          marginTop='2rem'
        >
          <img src={ReasonOne} alt='four-questions-app' />
          <img src={ReasonTwo} alt='accessible-illustrations-app' />
          <img src={ReasonThree} alt='taste-recommendations-app' />
        </Box>
      </Box>

      <Box p='2rem 10rem 1.5rem 8rem'>
        <Text fontSize='2rem' fontWeight='600' mb='1rem'>
          Research
        </Text>
        <Text fontSize='1.5rem' mb='0.8rem'>
          Intro
        </Text>
        <Text mb='0.8rem'>
          We faced a tight deadline of less than a month for project delivery.
          Our initial step involved planning our approach to ensure success
          within this timeframe. We opted for a <strong>Lean process</strong>{' '}
          and broke down the construction of the feature into manageable steps.
        </Text>
        <Text mb='0.8rem'>
          We tried to clearly define our objectives for the product by
          visualizing what we wanted to build and the desired outcome. Through a
          structured activity, we articulated our vision for the product,
          establishing both our aspirations and the features we wanted to avoid.
        </Text>
        <Text mb='0.8rem'>
          Summarizing the product in three business objectives:
        </Text>
        <UnorderedList mb='1.2rem'>
          <ListItem>
            Assist and streamline the shopping experience for novice users;
          </ListItem>
          <ListItem>
            Increase the visibility of sales items on the website;
          </ListItem>
          <ListItem>
            Enhance satisfaction and reduce returns/complaints.
          </ListItem>
        </UnorderedList>

        <Text fontSize='1.5rem' mb='0.8rem'>
          Primary Guillotine Survey
        </Text>
        <Text mb='0.8rem'>
          To understand more what our users are looking for at the moment of the
          purchased and their pain points, I chose to conduct a Primary
          Guillotine Survey with the baristas in the physical stores and the
          online store staff, creating Personas, and then assembling the User
          Journey to ensure that we were encompassing all user needs and pain
          points.
        </Text>
        <Text mb='0.8rem'>The insights that I had from the research were:</Text>
        <UnorderedList mb='1.2rem'>
          <ListItem>
            Those who are knowledgeable{' '}
            <strong>primarily seek brewing methods</strong> but are unsure about
            the specific preparation method they use.
          </ListItem>
          <ListItem>
            They have{' '}
            <strong>limited understanding of technical issues and terms</strong>{' '}
            commonly used.
          </ListItem>
          <ListItem>
            People have a <strong>preference for the coffee origin</strong>.
          </ListItem>
          <ListItem>
            Individuals <strong>struggle to comprehend coffee profiles</strong>{' '}
            and often <strong>confuse them with flavorings</strong>.
          </ListItem>
          <ListItem>
            <strong>Labels cause confusion</strong> when it comes to tasting the
            coffee.
          </ListItem>
          <ListItem>
            Often, the <strong>justification for the price is not clear</strong>{' '}
            to them.
          </ListItem>
          <ListItem>
            <strong>
              New customers are the ones who most frequently request assistance.
            </strong>
          </ListItem>
        </UnorderedList>

        <div>
          <Text mb='0.8rem'>
            We <strong>could validate the product creation</strong>, as there is
            indeed a need for some form of assistance on the online platform to
            help customers successfully make their coffee purchases and be
            satisfied with their choices in the end.
          </Text>
          <Box bg='blue' w='100%' p={4} color='white'>
            <Text mb='0.8rem'>
              We found that{' '}
              <strong>
                the major pain point for users is the lack of knowledge
                regarding technical terms
              </strong>{' '}
              such as grinding, roasting, and coffee profile.
            </Text>
            <Text mb='0.8rem'>
              A significant number of people initiate their coffee search by
              exploring extraction methods and flavor profiles.
            </Text>
            <Text mb='0.8rem'>
              <strong>
                Our target audience is not specifically limited to beginners
              </strong>{' '}
              but rather individuals seeking assistance when buying coffee.
            </Text>
          </Box>
        </div>

        <Text fontSize='1.5rem' mb='0.8rem' mt='2rem'>
          Personas
        </Text>
        <Text mb='0.8rem'>
          We created two different user profiles, which we validated to be the
          audience that needs the most assistance, and towards whom we will
          direct the creation of the quiz featured on the landing page of
          Fábrica Coffee Roasters.
        </Text>
        <Box
          maxWidth='80%'
          display='flex'
          flexDirection='column'
          gap='10px'
          justifyContent='center'
          alignItems='center'
          marginLeft='5rem'
          marginTop='2rem'
        >
          <img src={PersonaOne} />
          <img src={PersonaTwo} />
        </Box>

        <Text fontSize='1.5rem' mb='0.8rem' mt='2rem'>
          User Journey
        </Text>
        <Text mb='0.8rem'>
          We chose to create a user journey to ensure that{' '}
          <strong>all pain points and user needs are addressed</strong> in the
          development of our product features.
        </Text>

        <Box
          marginBottom='2rem'
          marginTop='2rem'
          display='flex'
          justifyContent='center'
        >
          <img src={UserJourney} />
        </Box>

        <Text mb='0.8rem'>Pain points:</Text>

        <Flex flexDirection='row' gap='12' margin='2rem 5rem'>
          <Box border='1px' borderColor='black' borderRadius='5px'>
            <Box margin='4rem 2rem 2rem 2rem'>
              <box-icon name='confused'></box-icon>
              <Text>
                Uncertainty in finding and understanding flavor profiles.
              </Text>
            </Box>
          </Box>

          <Box border='1px' borderColor='black' borderRadius='5px'>
            <Box margin='4rem 2rem 2rem 2rem'>
              <box-icon name='confused'></box-icon>
              <Text>
                Knowing if a particular coffee pairs well with the home brewing
                method.
              </Text>
            </Box>
          </Box>

          <Box border='1px' borderColor='black' borderRadius='5px'>
            <Box margin='4rem 2rem 2rem 2rem'>
              <box-icon name='confused'></box-icon>
              <Text>
                Selecting the correct grind for the coffee and the home brewing
                method.
              </Text>
            </Box>
          </Box>

          <Box border='1px' borderColor='black' borderRadius='5px'>
            <Box margin='4rem 2rem 2rem 2rem'>
              <box-icon name='confused'></box-icon>
              <Text>Understanding how to properly prepare coffee at home.</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <section>
        <h1>Desing</h1>
        <h3>MVP</h3>
        <p>
          To identify the features to include in our product, I initiated{' '}
          <strong>Benchmarking</strong> by studying three companies that have a
          Coffee Quiz feature. The objective was to{' '}
          <strong>comprehend the features covered</strong> in their quizzes,
          determine which ones would be most beneficial for enhancing our
          customers experience, and <strong>identify aspects to avoid</strong>{' '}
          that may not align with our target audience.
        </p>
        <p>
          With the creation of Personas, User Journeys, and the conducted
          Benchmarking, we can now explore which features our quiz should
          include, addressing the necessary subjects in a more playful,
          familiar, and intuitive manner for our users.
        </p>
        <p>
          With a pull of questions based on what we had learned, we were able to{' '}
          <strong>validate</strong> the extremely necessary functionalities that
          we need to know from the customer and that must be included in our
          quiz:
        </p>
        <ul>
          <li>Brewing method;</li>
          <li>Flavors they identify with the most;</li>
          <li>How they like to consume their coffee at home.</li>
        </ul>

        <h3>Canvas MVP</h3>
        <p>
          To align our product with business expectations, we opted to create an
          MVP Canvas before commencing the actual MVP development process.
        </p>
        <img />

        <h3>MVP</h3>
        <p>
          After identifying all the coffees based on their origins, flavors, and
          methods, we began planning the questions, steps, and options for our
          quiz. Several changes were made in the MVP construction, such as
          arranging the preparation method order according to grind level and
          adding another method Cold Brew. We categorized the espresso sub-step
          as a general option to include the Decaf choice for filter methods. We
          chose to omit the third step from the filter method, as the -hot-
          option could be confusing for users. After conducting cupping, we
          realized that the coffees from Fábrica exhibit specific flavors:
          Floral, Sweet, Nutty, and Fruity, so we removed the Caramel and
          Chocolate flavors.
        </p>
        <img />
        <p>
          <strong>
            We utilized the Quiz application available on WordPress to build the
            MVP
          </strong>
          , and the platform employs a points-based methodology in the Quiz
          system. As users choose their preferences, points are tallied, leading
          to a specific product recommendation based on the accumulated score.
        </p>

        <h3>UI</h3>
        <img />
      </section>

      <section>
        <h1>Results</h1>
        <p>
          Following the deployment of the Quiz Feature, we conducted an analysis
          using the built-in metrics system provided by the application. Our
          observations revealed that:
        </p>
        <ul>
          <li>The Quiz had a completion rate of 90%;</li>
          <li>3% abandonment rate on the first page of the quiz;</li>
          <li>
            30% of users interact in the final page, meaning that they click on
            the product or add the product to their cart;
          </li>
          <li>40 euros the average cart value.</li>
        </ul>
      </section>
    </div>
  );
}

export default FábricaProject;
