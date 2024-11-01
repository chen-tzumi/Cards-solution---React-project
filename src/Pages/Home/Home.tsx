import { useSelector } from "react-redux";
import { TRootState } from "../../Store/BigPie";
import { useEffect, useState } from "react";
import axios from "axios";
import { TCard } from "../../Types/TCard";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CardTitle } from "../../Components/Shared/Hoc/CardTitle";
import { CardSubTitle } from "../../Components/Shared/Hoc/CardSubTitle";
import { PageContainer } from "../../Components/Shared/Hoc/PageContainer";
import { PageTitle } from "../../Components/Shared/Hoc/PageTitle";
import { PageSubTitle } from "../../Components/Shared/Hoc/PageSubTitle";

const Home = () => {
  const [cards, setCards] = useState<TCard[]>([]);
  const nav = useNavigate();
  const searchWord = useSelector(
    (state: TRootState) => state.SearchSlice.search,
  );

  const searchCards = () => {
    return cards.filter((item: TCard) => item.title.includes(searchWord));
  };

  const isLikedCard = (card: TCard) => {
    if (user && user.user) {
      return card.likes.includes(user.user._id);
    } else return false;
  };

  const navToCard = (id: string) => {
    nav("/card/" + id);
  };

  const getData = async () => {
    const res = await axios.get(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
    );
    setCards(res.data);
  };

  const likeUnlikeCard = async (card: TCard) => {
    const res = await axios.patch(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + card._id,
    );
    if (res.status === 200) {
      toast.success("card liked/unliked");
      const index = cards.indexOf(card);
      const ifLiked = cards[index].likes.includes(user.user!._id);
      const newCards = [...cards];
      if (ifLiked) {
        newCards[index].likes.splice(index);
      } else {
        newCards[index].likes.push(user.user!._id);
      }
      setCards(newCards);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const user = useSelector((state: TRootState) => state.UserSlice);

  return (
    <PageContainer >
      <PageTitle >CardSolution</PageTitle>
      <PageSubTitle >Promote your business</PageSubTitle>

      <div
        className="flex flex-wrap w-4/5 gap-6 m-auto mt-16"
      >
        {searchCards()!.map((item: TCard) => {
          return (
            <Card
              key={item._id}
              className="xl:w-[24%] lg:w-[32%] md:w-[40%] sm:w-[60%] w-[80%] m-auto mb-10 "
            >
              <img
                onClick={() => navToCard(item._id)}
                src={item.image.url}
                alt={item.image.alt}
                className="h-[200px] object-fill"
              />
              <CardTitle>{item.title}</CardTitle>
              <hr />
              <CardSubTitle>{item.subtitle}</CardSubTitle>
              <CardSubTitle>{item.description}</CardSubTitle>

              <div
                className="flex flex-row justify-around my-3"
              >
                <BsFillTelephoneFill
                  size={20}
                  className="m-auto cursor-pointer"
                />

                {user && user.user && (
                  <FaHeart
                    size={20}
                    className="m-auto cursor-pointer"
                    color={isLikedCard(item) ? "red" : "black"}
                    onClick={() => likeUnlikeCard(item)}
                  />
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </PageContainer>
  );
};

export default Home;
