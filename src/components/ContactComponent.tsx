import Button from "./Button";

const ContactComponent = () => {
  function refreshPage(event: any) {
    alert("Your message has been sent. Thank you!");
    // window.location.reload(false);
    // event.preventDefault();
    // window.location.replace("/");
  }
  return (
    <section
      id="contact"
      className="bg-[#ffffff] px-10 md:px-28 flex flex-col pt-60"
    >
      <div className="container">
        <div className="flex text-black headingLarge mb-4">
          Get Started with SaasKaro
        </div>
        <div className="flex md:flex-row gap-8 flex-col">
          <div className="flex md:w-1/2 flex-col">
            <div className="flex font-medium text-base text-[#808080] mb-8">
              Submit your information and get a free consultation from us,
              limited time offer. Hurry!
            </div>
            <div className="flex text-black">
              <h4>Email:</h4>
              <p>saaskaro@gmail.com</p>
            </div>
            <div className="flex text-black">
              <h4>Call:</h4>
              <p>+91 74092 28771 & </p>
              <p>+91 73501 20800</p>
            </div>
          </div>
          <div className="flex md:w-1/2 flex-col text-black">
            <form
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIDzMeC1YEwnZUOp72Dixcz6TllwbPYl1Jx3HlBrtPmpGEoQ/formResponse"
              method="post"
              role="form"
              className="php-email-form"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="entry.1120641196"
                    className="border rounded h-9"
                    id="name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="border rounded h-9"
                    name="entry.1416197705"
                    id="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="border rounded h-9"
                    name="entry.2116426183"
                    id="subject"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="border rounded"
                    name="entry.1974263531"
                    rows={5}
                    required
                  ></textarea>
                </div>
              </div>
              {/* <div className="my-3">
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div> */}
              <div className="text-center mt-4">
                <Button
                  customClassName="blue_btn max-w-48"
                  onClick={refreshPage}
                  text="Send Message"
                />
                {/* <button type="submit" onClick={refreshPage}>
                  Send Message
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactComponent;
