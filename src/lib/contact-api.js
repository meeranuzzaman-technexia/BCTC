// Frontend integration only. SMTP credentials must stay on the server.
// Optional public URL override: VITE_CONTACT_API_URL=/api/contact
const endpoint = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

export async function sendContactEnquiry(fields) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: fields.name.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        topic: fields.topic,
        message: fields.message.trim(),
      }),
      signal: controller.signal,
    });
    const data = await response.json().catch(() => null);
    // A dev-server HTML fallback or bare HTTP 200 is not a delivery confirmation.
    if (!response.ok || data?.success !== true) {
      throw new Error("We could not send your enquiry. Please try again or contact us by phone or email.");
    }
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("The request timed out. Delivery could not be confirmed. Please contact us by phone or email before trying again.");
    }
    throw new Error("We could not confirm that your enquiry was sent. Please contact us by phone or email.");
  } finally {
    clearTimeout(timeout);
  }
}
