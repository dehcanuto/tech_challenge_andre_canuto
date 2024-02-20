"use client"
import Image from "next/image";
import Link from "next/link"

import ButtonLink from "@/components/atoms/ButtonLink";
import NavLink from "@/components/atoms/NavLink";

const TopHeader = () => {
    return (
        <header className="w-full bg-gray-800 text-white">
            <div className="container flex flex-col flex-wrap items-center p-3 mx-auto md:flex-row md:justify-between">
                <nav className="flex flex-wrap items-center text-base md:w-2/5 gap-5">
                    <NavLink url="" label="Comprar Carro" />
                    <NavLink url="" label="Vender Carro" />
                </nav>
                <Link href="" className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
                    <Image
                        src="/images/oncar-logo-white.svg"
                        alt="OnCar Logo"
                        className="w-auto h-5 text-gray-900 fill-current"
                        width={100}
                        height={24}
                        priority
                    />
                </Link>
                <div className="inline-flex items-center h-full md:w-2/5 md:justify-end">
                    <ButtonLink url="#">
                        Simular crédito
                    </ButtonLink>
                </div>
            </div>
        </header>
    )
}

export default TopHeader;