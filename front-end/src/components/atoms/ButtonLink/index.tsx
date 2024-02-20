import Link from "next/link"
import { ButtonLinkPropType } from "./types";

const ButtonLink = ({ url, children }: ButtonLinkPropType) => {
    return (
        <Link href={{ pathname: url }} className="py-3 px-8 bg-primary text-white text-sm font-semibold text-center uppercase tracking-wide outline-none rounded-lg">
            {children}
        </Link>
    )
}

export default ButtonLink;