import Instamojo from 'instamojo-nodejs';

export async function POST(request) {
  try {
    const { amount, purpose, buyer_name, email } = await request.json();

    // Set up Instamojo credentials
    Instamojo.setKeys(process.env.INSTAMOJO_API_KEY, process.env.INSTAMOJO_AUTH_TOKEN);

    const paymentDetails = {
      amount: amount,
      purpose: purpose,
      buyer_name: buyer_name,
      email: email,
      redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`, // Correct full URL
    };

    const response = await new Promise((resolve, reject) => {
      Instamojo.createPayment(paymentDetails, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });

    // Log the response to debug
    console.log("Instamojo response:", response);

    // Ensure response contains the payment request with 'longurl'
    if (response && response.payment_request && response.payment_request.longurl) {
      const paymentUrl = response.payment_request.longurl;
      return new Response(JSON.stringify({ paymentUrl }), { status: 200 });
    } else {
      throw new Error("Payment URL not found in the response");
    }
  } catch (error) {
    console.error("Payment creation failed:", error.message);
    return new Response(JSON.stringify({ error: 'Payment creation failed', message: error.message }), { status: 500 });
  }
}