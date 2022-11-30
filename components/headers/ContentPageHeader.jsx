function ContentPageHeader({title, tagline, type}) {
    return (
      <>
        <header className="text-center mr-2 mt-14">
          <h1 className="text-lg text-orange-500 font-bold">
            {type}
          </h1>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            {tagline}
          </p>
        </header>
      </>
    );
  }
  
  export default ContentPageHeader;