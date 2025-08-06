function Footer() {
    return (
        <div>
            <div className="container mx-auto min-w-screen flex flex-col md:flex-row items-center px-5 mt-40 lg:px-10 justify-between font-serif font-light text-navy text-lg md:text-xl">
                <p>Xinning Lucy Liu © 2025</p>
                <p>☆.。.:・°☆.。.:・°</p>
                <p>Feel free to reach out + connect! </p>
            </div>
            <div className="container mx-auto min-w-screen px-5 pt-1 pb-5 lg:px-10 flex place-content-center md:place-content-end text-navy text-lg md:text-xl">
                <a href="https://www.linkedin.com/in/xinninglucyliu/"><i className="bi bi-linkedin"></i></a>
                <a href="mailto:liu.xinni@northeastern.edu"><i className="bi bi-envelope-fill ms-5"></i></a>
            </div>
        </div>
    );
}

export default Footer;