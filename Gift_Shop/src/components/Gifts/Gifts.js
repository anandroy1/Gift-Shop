import GiftsSummary from "./GiftsSummary";
import AvailableGifts from "./AvailableGifts";
import { Fragment } from "react";

const Gifts = () => {
  return (
    <Fragment>
      <GiftsSummary />
      <AvailableGifts />
    </Fragment>
  );
};

export default Gifts;
