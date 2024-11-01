import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TCard } from "../../Types/TCard";
import { Container } from "../../Components/Shared/Hoc/Container";
import { PageContainer } from "../../Components/Shared/Hoc/PageContainer";
import { PageTitle } from "../../Components/Shared/Hoc/PageTitle";
import { PageSubTitle } from "../../Components/Shared/Hoc/PageSubTitle";
import { ContentTitle } from "../../Components/Shared/Hoc/ContentTitle";
import { Content } from "../../Components/Shared/Hoc/Content";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const CardDetails = () => {
  const [card, setCard] = useState<TCard>();
  const { id } = useParams<{ id: string }>();

  const getData = async () => {
    const res = await axios.get(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + id,
    );
    setCard(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer>
      <Container>
        <PageTitle>
          {card?.title}
        </PageTitle>

        <PageSubTitle>
          {card?.subtitle}
        </PageSubTitle>

        <img
          className="w-[60%] m-auto my-7 "
          src={card?.image.url}
          alt={card?.image.alt}
        />

        <PageSubTitle>
          {card?.description}
        </PageSubTitle>


        <div
          className="flex flex-col justify-center m-auto mb-5"
        >
          <div
            className="flex flex-row"
          >
            <FaMapMarkerAlt
              className="mx-4 mt-2 lg:mt-3 lg:size-6 size-3"
            />

            <ContentTitle>
              Address:
            </ContentTitle>

            <Content>
              {card?.address.state + " " + card?.address.country + " " + card?.address.city + " " + card?.address.street}
            </Content>

          </div>


          <div
            className="flex flex-row"
          >
            <FaPhone
              className="mx-4 mt-2 lg:mt-3 lg:size-6 size-3"
            />
            <ContentTitle>
              Phone:
            </ContentTitle>

            <Content>
              {card?.phone}
            </Content>

          </div>

          <div
            className="flex flex-row"
          >
            <FaEnvelope
              className="mx-4 mt-2 lg:mt-3 lg:size-6 size-3"
            />

            <ContentTitle>
              Email:
            </ContentTitle>

            <Content>
              {card?.email}
            </Content>

          </div>
        </div>

      </Container>

    </PageContainer>
  );
};

export default CardDetails;
