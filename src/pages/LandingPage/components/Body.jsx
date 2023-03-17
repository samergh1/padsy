export function Body() {
    return (
        <section id="#" className="bg-[url('https://www.10wallpaper.com/wallpaper/1920x1080/1308/tranquility-Landscape_Pics_HD_Wallpaper_1920x1080.jpg')]  h-[750px]">
            <div className=" mx-auto max-w-2xl items-center py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-3xl hidden sm:mb-8 sm:flex sm:justify-center">
                    {/* Go to doctors */}
                    <div className="bg-white relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Get to know our specialists better. <a href="#doctors" className="font-semibold text-[#00786a]"><span className="absolute inset-0" aria-hidden="true"></span>Go to doctors</a>
                    </div>
                </div>
                <div className="mx-auto max-w-3xl text-center">
                    {/* Title */}
                    <h1 className="mt-[80px] text-4xl font-bold tracking-tight text-black sm:text-6xl">Specialists are waiting for you</h1>
                    {/* Subtitle */}
                    <p className="mt-[60px] text-lg leading-8 font-bold text-black">"Happiness doesn't come randomly, it's a choice"</p>
                    <p className="mt-6 text-lg leading-8 text-black font-bold text-right">Jim Rohn</p>
                    {/* Buttons */}
                    <div className="mt-[50px] flex items-center justify-center gap-x-6">
                        <a target = '_blank' href="https://www.talkspace.com/blog/benefits-of-therapy/" className="rounded-md bg-[#00786a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#197578] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00786a]">Learn more about the benefits of therapy</a>
                    </div>
                </div>
            </div>
        </section>
    )
}