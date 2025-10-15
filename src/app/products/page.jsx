import Container from "@/components/container/Container";
import { BiCategory } from "react-icons/bi";
import { GiFruitBowl, GiMeat, GiCakeSlice, GiFishCooked, GiSodaCan } from "react-icons/gi";
import { MdLocalDrink } from "react-icons/md";
import { FaCheese } from "react-icons/fa";
import { TbBread } from "react-icons/tb";

export default function Products() {
  return (
    <Container>
      <div className="my-6 flex gap-5">

        <div className="flex flex-col">
          <div className="border-2 border-info rounded-2xl p-3">
            <div className="flex flex-col gap-2 overflow-y-auto">
              <div className="collapse bg-base-200 border border-info/50 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title flex items-center gap-2 font-medium">
                  <BiCategory className="text-info text-lg" />
                  <span>Foods</span>
                </div>
                <div className="collapse-content text-sm text-base-content/80">
                  <p>🍣 Sushi</p>
                  <p>🍔 Burger</p>
                  <p>🍕 Pizza</p>
                </div>
              </div>

              <div className="collapse bg-base-200 border border-info/50 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title flex items-center gap-2 font-medium">
                  <GiFruitBowl className="text-info text-lg" />
                  <span>Fruits</span>
                </div>
                <div className="collapse-content text-sm text-base-content/80">
                  <p>🍎 Apple</p>
                  <p>🍊 Orange</p>
                  <p>🍇 Grapes</p>
                </div>
              </div>

              <div className="collapse bg-base-200 border border-info/50 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title flex items-center gap-2 font-medium">
                  <MdLocalDrink className="text-info text-lg" />
                  <span>Drinks</span>
                </div>
                <div className="collapse-content text-sm text-base-content/80">
                  <p>🥤 Cola</p>
                  <p>☕ Coffee</p>
                  <p>🧃 Juice</p>
                </div>
              </div>

              <div className="collapse bg-base-200 border border-info/50 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title flex items-center gap-2 font-medium">
                  <GiCakeSlice className="text-info text-lg" />
                  <span>Snacks</span>
                </div>
                <div className="collapse-content text-sm text-base-content/80">
                  <p>🍪 Cookies</p>
                  <p>🍩 Donuts</p>
                </div>
              </div>

              <div className="collapse bg-base-200 border border-info/50 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title flex items-center gap-2 font-medium">
                  <GiMeat className="text-info text-lg" />
                  <span>Meat</span>
                </div>
                <div className="collapse-content text-sm text-base-content/80">
                  <p>🥩 Beef</p>
                  <p>🍗 Chicken</p>
                  <p>🐑 Lamb</p>
                </div>
              </div>

              <div className="collapse bg-base-200 border border-info/50 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title flex items-center gap-2 font-medium">
                  <GiFishCooked className="text-info text-lg" />
                  <span>Fish</span>
                </div>
                <div className="collapse-content text-sm text-base-content/80">
                  <p>🐟 Salmon</p>
                  <p>🐠 Tuna</p>
                </div>
              </div>

              <div className="collapse bg-base-200 border border-info/50 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title flex items-center gap-2 font-medium">
                  <FaCheese className="text-info text-lg" />
                  <span>Dairy</span>
                </div>
                <div className="collapse-content text-sm text-base-content/80">
                  <p>🧈 Butter</p>
                  <p>🧀 Cheese</p>
                  <p>🥛 Milk</p>
                </div>
              </div>

              <div className="collapse bg-base-200 border border-info/50 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title flex items-center gap-2 font-medium">
                  <TbBread className="text-info text-lg" />
                  <span>Bakery</span>
                </div>
                <div className="collapse-content text-sm text-base-content/80">
                  <p>🥖 Bread</p>
                  <p>🥐 Croissant</p>
                  <p>🍞 Toast</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-info animate-pulse  w-[100%] flex gap-4  p-2 rounded-2xl ">
          {/* top */}
          <div className="flex flex-col ">
            <div className="gap-2">
              <div className="card card-xs h-[38vh] bg-base-200 max-w-60  p-2 border border-info shadow">
                <figure className="hover-gallery border-2 rounded-xl border-b-2">
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" className="w-10 h-10" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                </figure>
                <div className="card-body ">
                  <p className="card-title flex justify-between text-warning">
                    Sunglasses
                    <span className=" text-success animate-bounce font-bold">$25</span>
                  </p>
                  <p >High Quality classic cap hat with stitch logo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" gap-2">
              <div className="card card-xs h-[38vh] bg-base-200 max-w-60  p-2 border border-info shadow">
                <figure className="hover-gallery  rounded-xl">
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" className="w-10 h-10" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                </figure>
                <div className="card-body border-2 ">
                  <p className="card-title flex justify-between text-warning">
                    Sunglasses
                    <span className=" text-success animate-bounce font-bold">$25</span>
                  </p>
                  <p >High Quality classic cap hat with stitch logo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" gap-2">
              <div className="card card-xs h-[38vh] bg-base-200 max-w-60  p-2 border border-info shadow">
                <figure className="hover-gallery border-2 rounded-xl border-b-2">
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" className="w-10 h-10" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                </figure>
                <div className="card-body border-2 ">
                  <p className="card-title flex justify-between text-warning">
                    Sunglasses
                    <span className=" text-success animate-bounce font-bold">$25</span>
                  </p>
                  <p >High Quality classic cap hat with stitch logo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" gap-2">
              <div className="card card-xs h-[38vh] bg-base-200 max-w-60  p-2 border border-info shadow">
                <figure className="hover-gallery border-2 rounded-xl border-b-2">
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" className="w-10 h-10" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                </figure>
                <div className="card-body border-2 ">
                  <p className="card-title flex justify-between text-warning">
                    Sunglasses
                    <span className=" text-success animate-bounce font-bold">$25</span>
                  </p>
                  <p >High Quality classic cap hat with stitch logo</p>
                </div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div>
          <div>
            <div className="gap-2">
            <div className="card card-xs h-[38vh] bg-base-200 max-w-60  p-2 border border-info shadow">
                <figure className="hover-gallery border-2 rounded-xl border-b-2">
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" className="w-10 h-10" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                  <img src="https://m.media-amazon.com/images/I/61JZV6C0DYL._UY1000_.jpg" />
                </figure>
                <div className="card-body border-2 ">
                  <p className="card-title flex justify-between text-warning">
                    Sunglasses
                    <span className=" text-success animate-bounce font-bold">$25</span>
                  </p>
                  <p >High Quality classic cap hat with stitch logo</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
