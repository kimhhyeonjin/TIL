"use client";

import { useState } from "react";

export default function List() {
  const products = ["Tomatoes", "Pasta", "Coconut"];
  const [cnt, setCnt] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{product}</h4>
            {/* cnt 값이 0이면 - 버튼 비활성화 */}
            <button
              onClick={() => {
                const temp = [...cnt];
                temp[idx] -= 1;
                setCnt(temp);
              }}
              disabled={cnt[idx] > 0 ? false : true}
            >
              -
            </button>
            <span> {cnt[idx]} </span>
            <button
              onClick={() => {
                const temp = [...cnt];
                temp[idx] += 1;
                setCnt(temp);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
