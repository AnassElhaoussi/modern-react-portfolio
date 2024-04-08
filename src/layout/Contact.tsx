import React from "react";

const Contact = () => {
  return (
    <section className="space-y-10 px-10">
      <h4 className="text-blue-600 text-2xl">Contact</h4>

      <div className="flex items-center gap-5 justify-center">
        <img
          src="https://ouch-cdn2.icons8.com/MAi-yJJfr23AgANjf6xkg3qTZYgyhMvUiGYv6ysjYjM/rs:fit:368:349/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTkz/LzUwOWUyNDY0LWM3/NmMtNDY1MS04YmNj/LWQ1NzNmNTlkZmQw/NS5wbmc.png"
          alt=""
          className="w-20"
        />
        <div >
            <h2 className="text-3xl font-bold text-gray-700">Get in touch with me : </h2>
            <p className="text-gray-500">anassbusiness12@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
