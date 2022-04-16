import classes from "./AvailableGifts.module.css";
import Card from "../UI/Card";
import GiftItem from "./GiftItem/GiftItem";

const DUMMY_GIFTS = [
  {
    id: "g1",
    name: "Canvas Painting",
    description: "It is Borderless Canvas Digital Painting",
    price: 25.99,
  },
  {
    id: "g2",
    name: "Calendar Frame",
    description: "Mr. & Miss couple Frame",
    price: 19.5,
  },
  {
    id: "g3",
    name: "Frame with Heart",
    description: "Name Frame with Heart Photos",
    price: 15.99,
  },
  {
    id: "g4",
    name: "Coffee Mug",
    description: "Customized Printed Coffee Mug",
    price: 18.99,
  },
  {
    id: "g5",
    name: "Digital oil Painting",
    description: "Customized Digital oil Painting Frame",
    price: 28.99,
  },
  {
    id: "g6",
    name: "Couple Frame",
    description: "Valentine Frame with 2 photo",
    price: 21.99,
  },
  {
    id: "g7",
    name: "Handmade Painting",
    description: "Customized Handmade Painting Frame",
    price: 28.99,
  },
  {
    id: "g8",
    name: "Moacic Frame",
    description: "Combination of more than 50 photos Frame",
    price: 21.99,
  },
];

const AvailableGifts = () => {
  const giftsList = DUMMY_GIFTS.map((gift) => (
    <GiftItem
      id={gift.id}
      key={gift.id}
      name={gift.name}
      description={gift.description}
      price={gift.price}
    />
  ));
  return (
    <section className={classes.gifts}>
      <Card>
        <ul>{giftsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableGifts;
