export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About SwimForce</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-blue-100 rounded-lg p-8 mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            SwimForce is dedicated to empowering swimmers of all levels with 
            professional-grade training equipment and expert coaching. Our mission 
            is to help you achieve your swimming goals, whether you&apos;re just starting 
            out or training for competition.
          </p>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded by passionate swimmers and coaches, SwimForce was born from the 
            belief that everyone deserves access to quality swimming training and 
            equipment. We understand the dedication it takes to improve in the water, 
            and we&apos;re here to support your journey every stroke of the way.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Based in California, we work with athletes, coaches, and swimming 
            enthusiasts across the country to provide the tools and training needed 
            to reach new levels of performance.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Quality Equipment</h3>
              <p className="text-gray-600">
                Carefully selected training accessories that meet the demands of 
                serious swimmers at every level.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Expert Training</h3>
              <p className="text-gray-600">
                Professional coaching programs designed to improve technique, 
                endurance, and competitive performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Community</h3>
              <p className="text-gray-600">
                A supportive network of swimmers and coaches who share your 
                passion for the sport.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Guidance</h3>
              <p className="text-gray-600">
                Personalized advice on equipment selection and training approaches 
                that fit your goals.
              </p>
            </div>
          </div>
        </section>
        
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:info@swimforce.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}
