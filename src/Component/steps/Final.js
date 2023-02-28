export default function Final({ ...props }) {
  const { localization } = props;
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
    

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          {localization.congrats}
        </div>
        <div className="text-lg font-semibold text-gray-500">
        {localization.accountCreated}
        </div>
        <a className="mt-10" href="/user/dashboard">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
          {localization.close}
          </button>
        </a>
      </div>
    </div>
  );
}