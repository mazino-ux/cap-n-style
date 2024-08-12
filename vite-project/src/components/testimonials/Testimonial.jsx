/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;

  const testimonials = [
    {
      name: 'Bamidele William',
      title: 'Founder & CEO',
      image: 'https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/382426858_1264980260884465_3347476378139752645_n.jpg?ccb=11-4&oh=01_Q5AaIFwsQHGaVMTgQ0KtLEpR46lrgGNnK_LQrIBMMD1NdIDt&oe=66BF7AF7&_nc_sid=5e03e0&_nc_cat=103',
      text: "Cap'n'style offers the best products! I highly recommend them. Their collection of caps and glasses is top-notch, and their customer service is exceptional. Every purchase I've made has exceeded my expectations, and I will definitely be a returning customer.",
    },
    {
      name: 'Trinity Ogwezi',
      title: 'Web Developer',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3DokzPRr8e-9jzu_Sb-xTLWC3XdTOTbc4lewWmoFNcOOKCoS5_tFwL3H5KoNzn7Sv-gSjnUKrFqNvxVyVCtimATrQ0TiTXao-KoOZVRdxWl-_rByZVB4Irbogh4eF4XQgDG8DOtTvOl9aJ1qqAe7G66tHY6mo-X8cwY4prAULM74dxJwY6pftEGh-L_4/s320/img1.jpg',
      text: "The variety and quality of products at Cap'n'style are unmatched. From stylish caps to trendy glasses, they have everything you need to enhance your look. Their website is user-friendly, making the shopping experience enjoyable and hassle-free.",
    },
    {
      name: 'Charles Richard',
      title: 'CEO Angela',
      image: 'https://img.freepik.com/premium-photo/back-school_895118-17024.jpg?w=740',
      text: "Cap'n'style has revolutionized my shopping experience. Their product range is extensive, and the quality is superb. I've recommended them to friends and family, and they all love their purchases. This is definitely the go-to place for the latest fashion accessories.",
    },
  ];

  return (
    <section
      className="section-divider text-center py-12"
      style={{
        backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : 'white',
        color: mode === 'dark' ? 'white' : 'black',
      }}
    >
      <div className="container mx-auto px-4">
        <p className="text-gray-500">Testimonials</p>
        <h2 className="text-2xl font-bold mb-4">
          Our Customers <span className="text-gray-600">Reviews</span>
        </h2>
        <p className="max-w-lg mx-auto mb-8">
          Cap'n'style is an online platform for selling caps, glasses, and more. We provide the best fashion accessories to enhance your style and make you stand out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 text-left rounded-lg"
              style={{
                backgroundColor: mode === 'dark' ? 'rgb(55 58 64)' : 'white',
                color: mode === 'dark' ? 'white' : 'black',
                boxShadow: mode === 'dark' ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <figure className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4" style={{
                color: mode === 'dark' ? 'rgb(255, 251, 250)' : 'black',
              }}>
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    fill={i < 5 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
