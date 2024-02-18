import Link from "next/link"
import { ButtonLinkPropType } from "./types";

const ButtonLink = ({ url, children }: ButtonLinkPropType) => {
    return (
        <Link href={{ pathname: url }} className="px-6 py-2 bg-primary text-white text-sm font-semibold uppercase tracking-wide rounded-3xl">
            {children}
        </Link>
    )
}

export default ButtonLink;