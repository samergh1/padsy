export function Body() {
    return (
        <section id="#" className="bg-white">
            <div class="mx-auto max-w-2xl items-center py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div class="mx-auto max-w-3xl hidden sm:mb-8 sm:flex sm:justify-center">
                    {/* Go to doctors */}
                    <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Get to know our specialists better. <a href="#doctors" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Go to doctors</a>
                    </div>
                </div>
                <div class="mx-auto max-w-3xl text-center">
                    {/* Title */}
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Specialists are waiting for you</h1>
                    {/* Subtitle */}
                    <p class="mt-6 text-lg leading-8 text-gray-600">"La felicidad no ocurre por casualidad, sino por elección."</p>
                    <p class="mt-6 text-lg leading-8 text-black font-bold text-right">Jim Rohn</p>
                    {/* Buttons */}
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                        <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:ring-gray-900/20">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}