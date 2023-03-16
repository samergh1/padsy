

export function Mission() {
    return (
        <section id="mission" className="bg-gray-100 h-[900px]">
            <div className="mx-auto max-w-2xl items-center py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div class="pb-11 mx-auto max-w-3xl text-center">
                    <h2 className="pb-5 text-xl  font-bold leading-7 text-[#00786a]">Our Mission</h2>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is our goal?</h2>
                    <p className="mt-5 text-xl text-gray-500">
                    Padsy was born from the need to obtain therapeutic services in an increasingly dynamic reality, where not everyone can afford to travel to get a quality service. We take proud in letting our costumers, let them be patients or doctors, get the service they need: where they want, when they want, as they want. 
                    </p>
                </div>
                <div className="pt-12 grid grid-cols-2 grid-rows-2 border-t border-gray-400 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://psicotep.com/wp-content/uploads/2017/12/terapia-online-e1519906137416.jpg"
                        alt=""
                        className="rounded-lg border-gray-600 bg-gray-100"
                    />
                    <img
                        src="https://www.centroeleia.edu.mx/blog/wp-content/uploads/2020/10/psicoterapia_enlinea_slider.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="h-full rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </section>
    )
}