"use client";
import { Navbar } from "flowbite-react";
import logo from "/logo.png";

const Header = () => {
    return (
        <Navbar fluid rounded className="px-4 fixed w-full top-0 z-20">
            <Navbar.Brand href="/">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-10" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">PolaFit</span>
                </a>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#" className="hover:text-white md:text-gray-900 hover:bg-primary md:hover:text-primary">
                    Beranda
                </Navbar.Link>
                <Navbar.Link href="#" className="hover:text-white md:text-gray-900 hover:bg-primary md:hover:text-primary">
                    Tentang
                </Navbar.Link>
                <Navbar.Link href="#" className="hover:text-white md:text-gray-900 hover:bg-primary md:hover:text-primary">
                    Algoritma
                </Navbar.Link>
                <Navbar.Link href="#" className="hover:text-white md:text-gray-900 hover:bg-primary md:hover:text-primary">
                    FAQ
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;