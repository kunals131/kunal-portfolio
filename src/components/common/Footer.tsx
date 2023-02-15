import SocialIcons from './SocialIcons'
// import Link from './NoScrollLink'

const Footer = () => (
    <footer className="w-full mt-16 pb-12 flex flex-col items-center">
        <SocialIcons />
        <a
            className="text-sm mb-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            href="mailto:ksangtiani13@gmail.com?Subject=Hello"
        >
            ksangtiani13@gmail.com
        </a>

    </footer>
)

export default Footer