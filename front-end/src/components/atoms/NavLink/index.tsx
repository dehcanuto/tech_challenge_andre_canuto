import Link from "next/link"
import { NavLinkPropType } from "./types";

const NavLink = ({ url, label }: NavLinkPropType) => {
    return (
        <Link href={{ pathname: url }} className="font-medium hover:text-primary">
            {label}
        </Link>
    )
}

export default NavLink;