
import softwareDeveloperImage from './images/softwareDeveloperImage.jpg';
import AboutLogo from './images/AboutLogo.jpg'
import cssAbout from '../../styles/About.module.scss';
import 'leaflet/dist/leaflet.css';
import { PageContainer } from '../../Components/Shared/Hoc/PageContainer';
import { Content } from '../../Components/Shared/Hoc/Content';
import { Container } from '../../Components/Shared/Hoc/Container';
import { ContentTitle } from '../../Components/Shared/Hoc/ContentTitle';


export const About = () => {

  return (
    <PageContainer>
      <div
        className={cssAbout.container}
      >
        <section
          className={cssAbout.section1}
        >
          <div
            className={cssAbout.sectionContent}
          >

            <img
              src={AboutLogo}
              alt="AboutLogo"
              className="mb-11 m-auto max-width-[30vw] h-[30vh] rounded-full "
            />

            <h1
              className="mb-11 m-auto text-[1em] md:text-[2em] lg:text-[3em] "
            >
              "CardSolution brings all your tasks, teammates, and tools together
              Keep everything in the same place even if your team isn’t.”
            </h1>

            <img
              src={softwareDeveloperImage}
              alt="software Developer Image"
              className=" mb-11 m-auto max-width-[7vw] h-[7vh] rounded-full"
            />
            <p className="text-lg">Chen Tsumai | Full stack developer</p>
          </div>
        </section>

        <Container>
          <ContentTitle>
            Explore a World of Businesses
          </ContentTitle>

          <Content>
            Our website is designed to connect users with businesses effortlessly. By registering as a regular user, you’ll gain access to a vast array of business cards with comprehensive details, from phone numbers to website links and even visual representations. This allows you to explore and save the businesses that stand out to you directly to your "Favorites" page, making it easy to revisit them whenever you need.
          </Content>

          <ContentTitle>
            Create and Manage Your Own Business Profile
          </ContentTitle>

          <Content>
            For business users, our platform offers additional powerful tools. Not only can you create detailed business cards with essential contact information, a website link, and an image, but you can also edit them at any time, ensuring your business always has the most up-to-date information available. Moreover, business users can save other business profiles to their favorites, creating a network of connections in the business community.
          </Content>

          <ContentTitle>
            A Simple and Effective Solution for All Users
          </ContentTitle>

          <Content>
            Our platform is crafted with a user-friendly interface and versatile features, catering to the needs of both regular users and business owners. Whether you’re looking to explore new businesses or showcase your own, our site provides an efficient, convenient, and organized way to connect, network, and grow your visibility online.
          </Content>

        </Container>
      </div>
    </PageContainer>
  );
};