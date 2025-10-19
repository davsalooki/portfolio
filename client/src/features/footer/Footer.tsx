const Footer = () => {
    return (
        <footer>
            <div className="flex justify-center space-x-2 my-6">
            <a href="http://github.com/davsalooki">
                <img src="github-logo.svg" alt="GitHub Logo" className="w-10 h-10"/>
            </a>
            <a href="http://linkedin.com/in/daviddkle">
                <img src="linkedin-logo.png" alt="LinkedIn Logo" className="w-10 h-auto"/>
            </a>
            </div>
            <div className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} David Le. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
