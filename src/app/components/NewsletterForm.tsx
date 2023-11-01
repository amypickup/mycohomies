import { useState } from "react";
import { sanitize } from "../utils";

type OnValidatedInputType = {
  EMAIL: string;
};

type Props = {
  status: string | null;
  message: string | Error | null;
  onValidated: (opts: OnValidatedInputType) => void;
};
const NewsletterForm = ({ status, message, onValidated }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getErrorMessage = (message: string | Error | null) => {
    if (!message) {
      return null;
    }
    /*
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
    */
    return message;
  };

  return (
    <div className="flex flex-col md:flex-row text-left items-left md:items-center max-w-7xl mx-auto py-4">
      <div className="grow p-3">
        Subscribe to our newsletter to receive special offers and a first look
        at new products 😍
      </div>
      <div className="px-3">
        <input
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          type="email"
          placeholder="Your email"
          className="appearance-none border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) =>
            handleInputKeyEvent(event)
          }
        />
      </div>
      <div className="button-wrap wp-block-button p-3">
        <button
          className="cursor-pointer text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
      <div className="min-h-42px px-3">
        {"sending" === status ? <div>Myceliating... </div> : null}
        {"error" === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{
              __html: error || sanitize(message),
            }}
          />
        ) : null}
        {"success" === status && !error && (
          <div
            className="text-green-200 pt-1"
            dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
