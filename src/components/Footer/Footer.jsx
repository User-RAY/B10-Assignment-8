

const Footer = () => {
    return (
        <div className="mt-40 bg-white">


            <div className="flex flex-col justify-center items-center ">
                <h1 className="font-bold text-3xl mt-24">Ray Gadget</h1>
                <p className="font-medium mb-8 mt-4 text-black/[.6] w-3/4 text-center">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="border-t-2 border-black/[.1] w-4/5 mx-auto"></div>
            <footer className="footer p-10  w-4/5 mx-auto text-center justify-items-center mb-20">

                <nav className="place-items-center">
                    <h6 className="footer-title font-bold text-black opacity-100">Services</h6>
                    <a className="link link-hover opacity-80">Product Support</a>
                    <a className="link link-hover opacity-80">Order Tracking</a>
                    <a className="link link-hover opacity-80">Shipping & Delivery</a>
                    <a className="link link-hover opacity-80">Returns</a>
                </nav>
                <nav className="place-items-center">
                    <h6 className="footer-title font-bold text-black opacity-100">Company</h6>
                    <a className="link link-hover opacity-80">About us</a>
                    <a className="link link-hover opacity-80">Careers</a>
                    <a className="link link-hover opacity-80">Contact</a>
                </nav>
                <nav className="place-items-center">
                    <h6 className="footer-title font-bold text-black opacity-100">Legal</h6>
                    <a className="link link-hover opacity-80">Terms of Service</a>
                    <a className="link link-hover opacity-80">Privacy policy</a>
                    <a className="link link-hover opacity-80">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;