import { useSelector } from "react-redux";
import { TRootState } from "../../Store/BigPie";
import { useEffect, useState } from "react";
import axios from "axios";
import { TCard } from "../../Types/TCard";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaPencil } from "react-icons/fa6";
import { PiPlus } from "react-icons/pi";
import { PageContainer } from "../../Components/Shared/Hoc/PageContainer";
import { PageTitle } from "../../Components/Shared/Hoc/PageTitle";
import { PageSubTitle } from "../../Components/Shared/Hoc/PageSubTitle";

const MyCards = () => {
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
    axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
    const res = await axios.get(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards",
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

  const deleteCard = async (card: TCard) => {
    try {
      const res = await axios.delete(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" +
        card._id,
      );
      const index = cards.indexOf(card);
      const newCards = [...cards];
      newCards.splice(index, 1);
      setCards(newCards);
      if (res) {
        toast.success("card deleted");
      }
    } catch (err) {
      toast.error("card delete failed");
    }
  };

  const navToCreate = () => {
    nav("/createCard");
  };

  useEffect(() => {
    getData();
  }, [cards]);

  const user = useSelector((state: TRootState) => state.UserSlice);

  const navigate = useNavigate();

  const handleEditClick = (id: string) => {
    navigate(`/editCard/${id}`);
  };


  return (
    <PageContainer >
      <PageTitle>My Cards</PageTitle>
      <PageSubTitle >this cards was made by the user</PageSubTitle>

      <div
        className="flex flex-wrap w-4/5 gap-6 m-auto mt-16"
      >
        {searchCards()!.map((item: TCard) => {
          return (
            <Card
              key={item._id}
              className="xl:w-[24%] lg:w-[32%] md:w-[40%] sm:w-[60%] w-[80%] m-auto mb-10 "            >
              <img
                onClick={() => navToCard(item._id)}
                src={item.image.url}
                alt={item.image.alt}
                className="h-[200px] object-fill"
              />
              <h1>{item.title}</h1>
              <h3>{item.subtitle}</h3>
              <p>{item.description}</p>
              <hr />
              {user && user.user && (
                <div className="flex flex-row justify-around">
                  <FaHeart
                    size={20}
                    className="cursor-pointer "
                    color={isLikedCard(item) ? "red" : "black"}
                    onClick={() => likeUnlikeCard(item)}
                  />
                  <FaPencil
                    size={20}
                    onClick={() => handleEditClick(item._id)}
                    style={{ cursor: 'pointer' }}
                  />
                  <FaTrash size={20} onClick={() => deleteCard(item)} />
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <div
        className="fixed flex p-3 rounded-full cursor-pointer right-10 top-20 bg-cyan-300"
      >
        <PiPlus
          size={20}
          onClick={navToCreate}
        />
      </div>
    </PageContainer>
  );
};

export default MyCards;
