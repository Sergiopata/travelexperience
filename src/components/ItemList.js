/* eslint-disable no-unused-vars */

import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className='w-full mx-auto flex flex-wrap justify-center gap-10'>
      {items.map((p) => {
        return <Item key={p.id} province={p} />;
      })}
    </div>
  );
};
export default ItemList;

