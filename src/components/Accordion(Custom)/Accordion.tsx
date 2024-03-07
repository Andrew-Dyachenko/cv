import React, {
	useEffect,
	useRef,
	useState,
	ReactNode,
	ReactElement,
} from "react";
import "./accordion.module.scss";

interface AccordionProps {
	className?: string;
	duration?: string;
	children?: ReactNode;
}

interface AccordionComponentProps {
	Item: React.FC<AccordionItemProps>;
	Header: React.FC<AccordionHeaderProps>;
	Body: React.FC<AccordionBodyProps>;
}

const isAllowedElement = (
	child: ReactNode,
): child is ReactElement<
	AccordionItemProps | AccordionHeaderProps | AccordionBodyProps
> => {
	return (
		React.isValidElement(child) &&
		(child.type === Accordion.Item ||
			child.type === Accordion.Header ||
			child.type === Accordion.Body ||
			false)
	);
};

const Accordion: React.FC<AccordionProps> & AccordionComponentProps = ({
	className = "accordion",
	duration,
	children,
}) => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className={className}>
			{React.Children.map(children, (child, index) => {
				if (isAllowedElement(child)) {
					return React.cloneElement(child, {
						key: index,
						duration: duration,
						isExpanded: index === expandedIndex,
						onToggle: () => handleToggle(index),
					});
				}
				return null;
			})}
		</div>
	);
};

interface AccordionItemProps {
	children: React.ReactNode;
	className: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
	children,
	className,
}) => {
	return <div className={`${className}__item`}>{children}</div>;
};

interface AccordionHeaderProps {
	className: string;
	onToggle: () => void;
	isExpanded: boolean;
	children?: ReactNode;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
	className,
	onToggle,
	isExpanded,
	children,
}) => {
	const handleClick = () => {
		onToggle();
	};

	return (
		<div className={`${className}__header`} onClick={handleClick}>
			{children}
		</div>
	);
};

interface AccordionBodyProps {
	expanded: boolean;
	className: string;
	duration?: string;
	children?: ReactNode;
}

const AccordionBody: React.FC<AccordionBodyProps> = ({
	className,
	duration,
	expanded,
	children,
}) => {
	const [height, setHeight] = useState<string | null>(null);
	const bodyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (expanded && bodyRef.current) {
			setHeight(`${bodyRef.current.scrollHeight}px`);
		} else {
			setHeight("0");
		}
	}, [expanded]);

	return (
		<div
			className={`${className}__body`}
			style={{ height: expanded ? height : "0", transitionDuration: duration }}
			ref={bodyRef}
		>
			{children}
		</div>
	);
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;

/*
 * Accordion usage Example
 */

{
	/* <Accordion className={styles.experience__accordion} duration="1s">
	<Accordion.Item>
		<Accordion.Header className={styles["experience__accordion-header"]}>
			Header #1 (Click to expand body)
		</Accordion.Header>
		<Accordion.Body className={styles["experience__accordion-body"]}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident illum
			vel quos optio expedita tempore corporis. Voluptatem numquam omnis est
			tempore dolore unde porro aperiam soluta, et eum! Error, doloribus.
		</Accordion.Body>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Header className={styles["experience__accordion-header"]}>
			Header #2 (Click to expand body)
		</Accordion.Header>
		<Accordion.Body className={styles["experience__accordion-body"]}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident illum
			vel quos optio expedita tempore corporis. Voluptatem numquam omnis est
			tempore dolore unde porro aperiam soluta, et eum! Error, doloribus.
		</Accordion.Body>
	</Accordion.Item>
</Accordion>; */
}
