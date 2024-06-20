import React, { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(productContext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
      ${(Math.random() * 255).toFixed()},
      ${(Math.random() * 255).toFixed()},0.4)`;
  };
  //  console.log(color());

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="py-3 px-5 border rounded border-blue-200 text-blue-600"
        href="/create"
      >
        Add new Product
      </a>
      <hr className="my-3 w-[90%] border-2" />

      <h1 className="text-2xl w-[80%] ">Category filter</h1>
      <div className=" mt-3  w-[80%] ">
        {distinct_category.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className="mb-3 flex items-center  "
          >
            <span
              style={{ backgroundColor: color() }}
              className="rounded-full mr-2 block w-[15px] h-[15px] bg-blue-300 "
            ></span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
