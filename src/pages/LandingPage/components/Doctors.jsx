const posts = [
    {
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export function Doctors() {
    return (
        <div className="bg-white py-12 sm:py-16 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Doctors</h2>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Look from the inside</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Learn more about our specialists.
                </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                                    <p className="text-gray-600">{post.author.role}</p>
                                </a>
                            </div>
                        </div>
                        <a href={post.href}>
                            <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
                        </a>
                    </article>
                ))}
            </div>
        </div>
    )
}