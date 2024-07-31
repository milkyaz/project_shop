import { GoodsItem } from "./GoodsItem";
function GoodsLits(props) {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export { GoodsLits };

// (
//     <div className="cart-modal">
//         <i className="material-icons cart-modal-close" onClick={props.toggleShow}>
//             close
//         </i>
//         <h5 className="red-text text-lighten-1">Ваша корзина</h5>
//         {props.goods.length ? (
//             <table className="striped">
//                 <thead>
//                     <tr>
//                         <th>Наименование</th>
//                         <th>Количество</th>
//                         <th>Цена</th>
//                         <th>Сумма</th>
//                         <th>Удалить</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {props.goods.map(item => <GoodsItem key={item.id} {...item} />)}
//                     <tr>
//                         <th colSpan="3">Итого</th>
//                         <th>{cost}</th>
//                         <th>руб.</th>
//                     </tr>
//                 </tbody>
//             </table>
//         ) : (
//             <p>Ваша корзина пуста</p>
//         )}
//     </div>
// );
