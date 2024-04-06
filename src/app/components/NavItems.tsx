import Link from 'next/link'

interface NavitemsProps {
    href: string;
    title: string;
}

const Navitems = ({ href, title }: NavitemsProps) => {
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-[#ABABAB] sm:text-xl rounded md:p-0 hover:text-white'>{title}</Link>
    )
}

export default Navitems
