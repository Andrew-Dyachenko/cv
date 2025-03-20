import { ReactNode } from "react";

// Эти теги доступны
type Tag = "strong" | "abbr";

// Пропсы для компонента
type Props = {
	children(
		tags: Record<
			Tag,
			(chunks: ReactNode, attrs?: Record<string, string>) => ReactNode
		>
	): ReactNode;
};

export default function RichText({ children }: Props) {
	return children({
		strong: (chunks: ReactNode) => <strong>{chunks}</strong>,
		abbr: (chunks: ReactNode, attrs?: Record<string, string>) => (
			<abbr title={attrs?.title}>{chunks}</abbr>
		),
	});
}
