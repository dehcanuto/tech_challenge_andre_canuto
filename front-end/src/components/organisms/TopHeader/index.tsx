"use client"
import ButtonLink from "@/components/atoms/Button";
import Image from "next/image";

const TopHeader = () => {
    return (
        <header className="w-full bg-gray-800 text-white">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
                    <a href="#_" className="mr-5 font-medium hover:text-primary" target="_blank">Home</a>
                    <a href="#_" className="mr-5 font-medium hover:text-primary" target="_blank">Simular crédito</a>
                    <a href="#_" className="font-medium hover:text-primary" target="_blank">Contato</a>
                </nav>
                <a className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0" target="_blank">
                    <Image
                        src="/images/oncar-logo-white.svg"
                        alt="OnCar Logo"
                        className="w-auto h-5 text-gray-900 fill-current"
                        width={100}
                        height={24}
                        priority
                    />
                </a>
                <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
                    <a href="#_" className="mr-5 font-medium hover:text-gray-900" target="_blank"></a>
                    <ButtonLink url="#">
                        Login
                    </ButtonLink>
                </div>
            </div>
        </header>
    )
}

export default TopHeader;