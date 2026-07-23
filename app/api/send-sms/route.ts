export async function POST(request) {
  try {
    const { to, message } = await request.json();

    const body = new URLSearchParams({
      username: 'Khalido',
      to,
      message,
    });

    const response = await fetch(
      "https://api.africastalking.com/version1/messaging",
      {
        method: "POST",
        headers: {
          apiKey: 'atsk_32e89ec38e75de52ee6d47e0f392d7ec822b7145b6bceec9262d70928c70dd45a269250--d',
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body,
      }
    );

    const data = await response.json();

    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
