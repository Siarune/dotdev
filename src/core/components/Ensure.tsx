import { ReactNode } from "react"

export const If = ({
	            content,
	            children
            }: {
	content: boolean;
	children: ReactNode;
}) => {
	if (content) return <>{children}</>
	return <></>
}

export function hasLoadedFrom(data: any) {
	return !!{ data }
}
