import { loadStripe } from "@stripe/stripe-js";
export async function checkout({ lineItems }) {
  let stripePromise = null;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };
  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    // successUrl: `http://localhost:3000/dashboard/ordersuccessful`,
    // cancelUrl: `http://localhost:3000/dashboard/ordersuccessful`,
    successUrl: `https://ordercustomfood.netlify.app/dashboard/ordersuccessful`,
    cancelUrl: `https://ordercustomfood.netlify.app/dashboard/ordersuccessful`,
  });
}
