import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full backdrop-blur-lg shadow-lg translate-y-0  bg-surface/70 z-50">
            <div className="flex flex-row main-padding py-8">
                <div className="flex-1">

                </div>
                <div className="flex-1">
                    <p className="font-bold">Product</p>
                    <p className="text-[12px]">Platform</p>
                    <p className="text-[12px]">Integrations</p>
                    <p className="text-[12px]">Solutions</p>
                    <p className="text-[12px]">Pricing</p>
                </div>
                <div className="flex-1">
                    <p className="font-bold">Company</p>
                    <p className="text-[12px]">About Us</p>
                    <p className="text-[12px]">Careers</p>
                    <p className="text-[12px]">Blog</p>
                    <p className="text-[12px]">Contact</p>
                </div>
                <div className="flex-1">
                    <p className="font-bold">Legal</p>
                    <p className="text-[12px]">Privacy Policy</p>
                    <p className="text-[12px]">Term Of Services</p>
                    <p className="text-[12px]">Cookies</p>

                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <p className="text-[12px]">Kyo Kongga</p>
                    <p className="text-[12px]">@kikensbatara</p>


                </div>
            </div>
        </footer>
    )
}

export default Footer;