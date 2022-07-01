import Button from "../../atoms/button";

export default function Subscribe() {
  return (
    <div className="w-full">
      <div className="relative py-10 bg-gradient-to-r from-green-900 to-indigo-900 overflow-hidden shadow-xl sm:px-12 sm:py-12 px-8 text-center">
        <div className="relative">
          <div className="sm:text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl text-center">
              Subscribe to Hatome newsletter
            </h2>
            <p className="mt-2 mx-auto max-w-2xl text-lg text-[#C4D3EA] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dinissim sit .
            </p>
          </div>
          <form action="#" className="mt-6 sm:mx-auto sm:max-w-lg sm:flex mb-6">
            <div className="relative w-full">
              <input
                type="email"
                className="block p-4 pl-4 w-full text-sm text-white bg-[#315B82] rounded-lg border border-[#315B82] focus:ring-[#315B82] focus:border-[#315B82]"
                placeholder="Enter your email"
                required
              />
              <Button
                btnName="Subscribe"
                className="px-5 md:absolute md:right-2.5 md:bottom-1.5 hidden md:block"
              />
            </div>
            <Button btnName="Subscribe" className="px-5 md:hidden m-auto mt-4" />
          </form>
        </div>
      </div>
    </div>
  );
}
