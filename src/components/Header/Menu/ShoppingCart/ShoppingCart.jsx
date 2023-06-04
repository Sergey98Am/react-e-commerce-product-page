import { Popover, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import iconCart from "@/assets/icon-cart.svg";
import CartItem from "./CartItem";
import CartContext from "@/Context/Cart/CartContext";

export default function ShoppingCart() {
  // Extract itemscount from CartContext
  const { cartItems, itemCount } = useContext(CartContext);

  return (
    <div className="">
      <Popover className="md:relative">
        <Popover.Button className="relative icon pt-0 mr-[22px] md:pt-3.5 md:mr-[46px]">
          {/* If the number of cartItems is greater than 0, display the number of items in the cart */}
          {itemCount > 0 && (
            <div className="bg-tertiary rounded-lg px-2 cart-items-count absolute top-[-6px] right-[-10px] text-[10px] text-white font-[600] md:top-[6px]">
              {itemCount}
            </div>
          )}
          <img src={iconCart} className="w-[20px] h-[20px]" alt="icon-cart" />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-full -translate-x-full p-2 pt-4 z-10 mt-3 w-screen transform md:max-w-[360px] md:p-0 2xl:left-1/2 2xl:-translate-x-1/2">
            <div className="overflow-hidden rounded-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
              <div className="bg-white">
                <h5 className="p-5 border-b border-lightBlue">
                  <b>Cart</b>
                </h5>
                <div className="cart-content p-6 pb-8">
                  {itemCount > 0 ? (
                    <div className="cart-items min-h-[134px]">
                      {cartItems.map((product) => (
                        <CartItem key={product.id} product={product} />
                      ))}
                      <div className="checkout mt-6">
                        <button className="btn btn-orange w-full shadow-none">
                          Checkout
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="empty min-h-[134px] flex justify-center items-center">
                      <h5 className="text-secondary">Your cart is empty.</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
