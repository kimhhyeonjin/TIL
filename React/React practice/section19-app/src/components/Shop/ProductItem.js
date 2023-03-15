import { useDispatch } from "react-redux";

// 리덕스로 작업할 때 비동기 코드를 넣는 방법 1
// import { useSelector } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  // 리덕스로 작업할 때 비동기 코드를 넣는 방법 1
  // const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    // 리덕스로 작업할 때 비동기 코드를 넣는 방법 1
    // 자체 action creator 함수를 생성하여 리덕스 툴킷을 이용하지 않고 작성
    // // 리덕스 툴킷이 아니므로 cart.totalQuantity 자체를 수정해서는 안됨
    // const newTotalQuantity = cart.totalQuantity + 1;

    // // cart.items 자체를 수정할 수 없으므로 updatedItems로 복사
    // const updatedItems = cart.items.slice();
    // // 복사한 항목 중 id가 일치하는 것만을 existingItem에 저장
    // const existingItem = updatedItems.find((item) => item.id === id);
    // if (existingItem) {
    //   // existingItem 또한 리덕스 스토어의 일부인 메모리 객체이므로
    //   // updatedItem이라는 새 객체에 복사하여 사용
    //   const updatedItem = { ...existingItem };
    //   updatedItem.quantity++;
    //   updatedItem.price = updatedItem.price + price;
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   updatedItems[existingItemIndex] = updatedItem;
    // } else {
    //   updatedItems.push({
    //     id: id,
    //     price: price,
    //     quantity: 1,
    //     totalPrice: price,
    //     name: title,
    //   });
    // }

    // const newCart = {
    //   totalQuantity: newTotalQuantity,
    //   items: updatedItems,
    // };

    // dispatch(cartActions.replaceCart(newCart));

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
