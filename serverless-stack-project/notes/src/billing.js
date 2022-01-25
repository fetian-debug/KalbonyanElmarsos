import Stripe from "stripe";
import handler from "./util/handler";
import { calculateCost } from "./util/cost";

export const main = handler(async (event) => {
  const { storage, source } = JSON.parse(event.body);
  const amount = calculateCost(storage);
  const description = "Scratch charge";

  // Load our secret key from the  environment variables
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  await stripe.charges.create({
    source,
    amount,
    description,
    currency: "usd",
  });

  return { status: true };
});



// npx aws-api-gateway-cli-test \
// --username='admin@example.com' \
// --password='Passw0rd!' \
// --user-pool-id='us-east-1_0XHbnHSdC' \
// --app-client-id='11m9np8nlg38pbt5jb0ovb0iv6' \
// --cognito-region='us-east-1' \
// --identity-pool-id='us-east-1:74130c19-6648-4b39-8210-f600da491ce8' \
// --invoke-url='https://j3guoc4ro9.execute-api.us-east-1.amazonaws.com' \
// --api-gateway-region='us-east-1' \
// --path-template='/billing' \
// --method='POST' \
// --body='{"source":"tok_visa","storage":21}'
