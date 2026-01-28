import Link from "next/link";

const programs = [
  {
    name: 'Beginner Fundamentals',
    description: 'Learn proper technique and build confidence in the water.',
    duration: '8 weeks',
    level: 'Beginner',
    price: '$199',
  },
  {
    name: 'Intermediate Development',
    description: 'Refine your strokes and improve endurance.',
    duration: '12 weeks',
    level: 'Intermediate',
    price: '$299',
  },
  {
    name: 'Competitive Training',
    description: 'Race-focused training for serious competitors.',
    duration: '16 weeks',
    level: 'Advanced',
    price: '$499',
  },
  {
    name: 'Private Coaching',
    description: 'One-on-one sessions tailored to your specific goals.',
    duration: 'Flexible',
    level: 'All Levels',
    price: '$75/session',
  },
];

export default function TrainingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">SwimForce Training School</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transform your swimming with our expert-led training programs. 
            From beginners to competitive athletes, we have a program for you.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{program.name}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {program.level}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-sm text-gray-500">
                      Duration: {program.duration}
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {program.price}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Train With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Certified Coaches</h3>
              <p className="text-gray-600">
                All our coaches are certified professionals with years of competitive and teaching experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Proven Methods</h3>
              <p className="text-gray-600">
                Our training methodology is built on proven techniques used by Olympic athletes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Train on your schedule with morning, evening, and weekend sessions available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dive In?</h2>
          <p className="text-xl mb-8">
            Start your swimming journey today. Contact us for a free consultation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:training@swimforce.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
            <Link
              href="/shop"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Shop Gear
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
