"use client";

import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";

type OnValidatedInputType = {
  EMAIL: string;
};
// use the render prop and your custom form
const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  if (!MAILCHIMP_URL) {
    return null;
  }

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <div>
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData: OnValidatedInputType) =>
              subscribe(formData)
            }
          />
        </div>
      )}
    />
  );
};

export default NewsletterSubscribe;
