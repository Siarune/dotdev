import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type Props = {
	source: string
}

export default function Markdown( { source }: Props) {
	return (
		<ReactMarkdown remarkPlugins={[remarkGfm]}>
			{source}
		</ReactMarkdown>
	)
}
