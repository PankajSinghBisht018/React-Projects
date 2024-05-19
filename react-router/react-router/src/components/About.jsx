import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-gray-500 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <div className="bg-white p-6 rounded-lg shadow-lg my-5">
          <h2 className="text-2xl font-bold my-4">Goal Our</h2>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, rerum! Sapiente nesciunt quidem nisi optio tenetur hic impedit voluptatem sed pariatur? Eveniet neque ex fugiat accusamus quas dignissimos fugit enim, iure corporis nostrum placeat!
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg ">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-700 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus vel, aspernatur velit fuga illo quis dolor officiis blanditiis quidem dolore architecto eius eos, quaerat accusantium facilis cumque ex, quas iusto est! Vero, autem, veritatis reiciendis magnam hic ducimus asperiores, dolore provident soluta repellat eveniet.
          </p>
          <div className="grid gap-1 lg:grid-cols-3">
            <div className="text-center">
              <img src="https://img.freepik.com/premium-photo/illustration-man-abstract-art-ai-generated_57312-1379.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold">Rafel</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center">
              <img src="https://images.getimg.ai/resize?url=https%3A%2F%2Fimg.getimg.ai%2Fgenerated%2Fimg-aXkWRt4GTQ0JgMQBbC7cJ.jpeg&type=auto&width=2048&speed=5" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold">Abhishek</h3>
              <p className="text-gray-600">Hr</p>
            </div>
            <div className="text-center">
              <img src="https://tse1.mm.bing.net/th?q=ai%20generated%20man" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold">Hitesh</h3>
              <p className="text-gray-600">Sales</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default About;
