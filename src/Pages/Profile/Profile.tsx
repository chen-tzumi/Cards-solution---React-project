import { useSelector } from "react-redux";
import { TRootState } from "../../Store/BigPie";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import profileCss from '../../styles/Profile.module.scss';
import { PageTitle } from "../../Components/Shared/Hoc/PageTitle";
import { PageSubTitle } from "../../Components/Shared/Hoc/PageSubTitle";
import { ContentTitle } from "../../Components/Shared/Hoc/ContentTitle";
import { Content } from "../../Components/Shared/Hoc/Content";
import { Container } from "../../Components/Shared/Hoc/Container";
import { PageContainer } from "../../Components/Shared/Hoc/PageContainer";

const Profile = () => {
  const user = useSelector((state: TRootState) => state.UserSlice.user);

  return (
    <PageContainer>
      <Container>
        <PageTitle >Profile Page</PageTitle>
        <PageSubTitle >
          Welcome  {user?.name.first + " " + user?.name.last}
        </PageSubTitle>


        <p
          className={profileCss.infoText}
        >
          <ContentTitle>
            Full name:
          </ContentTitle>
          <Content>
            {user?.name.first + " " + user?.name.middle + " " + user?.name.last}
          </Content>
        </p>

        <p
          className={profileCss.infoText}
        >
          <FaPhone
            className={profileCss.icon}
          />
          <ContentTitle>
            Phone:
          </ContentTitle>
          <Content>
            {user?.phone}
          </Content>
        </p>

        <p
          className={profileCss.infoText}
        >
          <FaEnvelope
            className={profileCss.icon} />
          <ContentTitle>
            Email:
          </ContentTitle>
          <Content>
            {user?.email}
          </Content>
        </p>

        <p
          className={profileCss.infoText}
        >
          <FaMapMarkerAlt
            className={profileCss.icon}
          />
          <ContentTitle>
            Address:
          </ContentTitle>
          <Content>
            {user?.address.state + " " + user?.address.country + " " + user?.address.city + " " + user?.address.street}
          </Content>
        </p>

        <p
          className={profileCss.infoText}
        >
          <FaUser
            className={profileCss.icon}
          />
          <ContentTitle>
            Account:
          </ContentTitle>
          <Content>
            {user?.isBusiness ? "Business" : "Regular"}
          </Content>
        </p>
      </Container>
    </PageContainer>
  );
};

export default Profile;
