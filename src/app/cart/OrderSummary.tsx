import TitleWrap from "./TitleWrap";
import { useSelector } from "react-redux";
import { selectTotalQuantity, selectTotalPrice } from "../store/cartSlice";

export default function OrderSummary() {
  const totalQuantity = useSelector(selectTotalQuantity);
  const finalPrice = useSelector(selectTotalPrice);

  return (
    <section className="laptop:w-[30%] bg-lightGray px-[20px] py-[30px] tablet:pt-[70px] text-[16px] font-[500]">
      <div className="mobile:max-w-[480px] mx-auto laptop:w-[100%]">
        <TitleWrap>
          <h2 className="largeBoldText py-[3px]">Order Summary</h2>
        </TitleWrap>
        <div className="borderBottom">
          <div className="flex justify-between my-[25px]">
            {totalQuantity === 1 ? (
              <p className="">ITEM {totalQuantity}</p>
            ) : (
              <p className="">ITEMS {totalQuantity}</p>
            )}
            <p>${finalPrice.toFixed(2)}</p>
          </div>
          <p className="mb-[20px]">SHIPPING</p>
          <select className="bg-white outline-none p-[10px] font-[400] w-[200px] mobile:w-[300px] laptop:w-[100%] mb-[25px]">
            <option value="">--Choose--</option>
            <option className="" value="standard delivery">
              Standard Delivery
            </option>
            <option value="express delivery">Express Delivery</option>
          </select>
          <p className="mb-[20px]">PROMO CODE</p>
          <input
            className="outline-none p-[10px] font-[400] w-[200px] mobile:w-[300px] laptop:w-[100%] mb-[25px]"
            type="text"
            placeholder="Enter your code"
          />
          <button className="outline-none p-[10px] text-white bg-orange transitionProp hover:bg-darkOrange w-[110px] laptop:mb-[10px]">
            APPLY
          </button>
        </div>
        <div className="flex justify-between mt-[30px]">
          <p className="">TOTAL COST</p>
          <p>${finalPrice.toFixed(2)}</p>
        </div>
        <button className="outline-none p-[10px] text-white bg-violet transitionProp hover:bg-darkViolet w-[100%] mt-[30px]">
          CHECKOUT
        </button>
      </div>
    </section>
  );
}
