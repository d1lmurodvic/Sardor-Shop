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
        <div>
            <p>Categories</p>
        </div>
       <div className="border-2 border-info rounded-2xl p-3">
          <div className="flex flex-col gap-2">
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

        <div>
            Jonka
        </div>
      </div>
    </Container>
  );
}
