export function TailwindTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 gradient-text">Tailwind CSS v4 Test</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Card 1</h3>
            <p className="text-gray-600">This card should have proper styling with hover effects.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl font-bold text-purple-600 mb-2">Card 2</h3>
            <p className="text-gray-600">Grid layout should work properly on different screen sizes.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl font-bold text-cyan-600 mb-2">Card 3</h3>
            <p className="text-gray-600">Colors and spacing should be consistent.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            If you can see this properly styled with responsive grid and buttons, Tailwind CSS v4 is working correctly!
          </p>
        </div>
      </div>
    </div>
  )
}
