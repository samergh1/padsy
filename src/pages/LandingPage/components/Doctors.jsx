// import { getUsersDoctors } from "../../../firebase/users"


// ESTO LO QUE HACE ES CONSEGUIR UN ARREGLO DE DOCTORES, Y LUEGO SELECCIONAR 3 AL AZAR ENTRE ELLOS PARA MOSTRARLOS EN LA PAGINA
// const getDoctors = async () => {
//     const data = await getUsersDoctors();
//     setList(data);
//     setIsLoading(false);
//     setFilterList(data);
//   };
// var shuffled = getDoctors.sort(function(){return .5 - Math.random()});
// var selected=shuffled.slice(0,3);

const posts = [
    {
        href: '#',
        description:
            'Graduado de la UCV con 10 años de experiencia.',
        author: {
            name: 'Daniel',
            country: 'Caracas, Venezuela',
            imageUrl:
                'https://touchtaiwan.com/images/default.jpg',
            correo: 'daniel@gmail.com'
        },
    },
    {
        href: '#',
        description:
            'Graduado de University of Miammi',
        author: {
            name: 'Fernando',
            country: 'Miami, USA',
            imageUrl:
                'https://touchtaiwan.com/images/default.jpg',
            correo: 'fernando@mail.com'
        },
    },
    {
        href: '#',
        description:
            'Graduado de Universidad cooperativa de Colombia',
        author: {
            name: 'Luis',
            country: 'Cali, Colombia',
            imageUrl:
                'https://touchtaiwan.com/images/default.jpg',
            correo: 'luis@email.com'
        },
    },
]

export function Doctors() {
    return (
        <section id="doctors" className="bg-white">
            <div className="mx-auto max-w-2xl items-center py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-[#00483f]">Doctors</h2>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Look from the inside</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn more about our specialists.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    
                    {/* {selected.map((doctor) => (
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="relative mt-8 flex items-center gap-x-4">
                                
                                    <img src={doctor.name} alt="https://touchtaiwan.com/images/default.jpg" className="h-10 w-10 rounded-full bg-gray-50" />
                                
                                <div className="text-sm leading-6">
                                    
                                        <p className="font-semibold text-gray-900">
                                            {doctor.name}
                                        </p>
                                    
                                    
                                        <p className="text-gray-600">{doctor.speciality}</p>
                                    
                                </div>
                            </div>
                            
                                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{doctor.email}</p>
                            
                        </article>
                    ))} */}
                    {posts.map((post) => (
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <a href={post.href}>
                                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                </a>
                                <div className="text-sm leading-6">
                                    <a href={post.href}>
                                        <p className="font-semibold text-gray-900">
                                            {post.author.name}
                                        </p>
                                    </a>
                                    <a href={post.href}>
                                        <p className="text-gray-600">{post.author.country}</p>
                                    </a>
                                </div>
                            </div>
                            <a href={post.href}>
                                <p className="mt-5 text-lg leading-6 text-gray-600 line-clamp-3">{post.description}<br/><strong>Correo:</strong> {post.author.correo}</p>
                            </a>
                        </article>
                    ))}
                 </div>
            </div>
        </section>
    )
}