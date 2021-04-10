import React, { ReactNode, ReactElement } from "react";
import "./App.css";

//conventional props

function Heading({ title }: { title: string }) {
	return <h1>{title}</h1>;
}

function HeadingWithContent({
	children,
}: {
	children: ReactNode;
}): ReactElement {
	return <h1>{children}</h1>;
}

// default props
const defaultContainerProps = {
	heading: <strong>my heading</strong>,
};
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Container({ heading, children }: ContainerProps): ReactElement {
	return (
		<div>
			<h1>{heading}</h1>
			{children}
		</div>
	);
}
Container.defaultProps = defaultContainerProps;

//functional props

function TextWithNumber({
	header,
	children,
}: {
	header?: (num: number) => ReactNode;
	children: (num: number) => ReactNode;
}) {
	const [button, setButton] = React.useState(1);
	return (
		<div>
			{header && <h2>{header?.(button)}</h2>}
			<div>{children(button)}</div>
			<div>
				<button onClick={() => setButton(button + 1)}>Add</button>
			</div>
		</div>
	);
}

function List<ListItem>({
	items,
	render,
}: {
	items: ListItem[];
	render: (item: ListItem) => ReactNode;
}) {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={index}>{render(item)}</li>
			))}
		</ul>
	);
}

export const App = () => {
	return (
		<div>
			<Heading title='Hello World'></Heading>
			<HeadingWithContent>hi</HeadingWithContent>
			<Container>foo</Container>
			<TextWithNumber>
				{(num: number) => <div>Todays number is {num}</div>}
			</TextWithNumber>
			<List
				items={["jack", "sadie", "oso"]}
				render={(item: string) => <div>{item.toLowerCase()}</div>}
			></List>
		</div>
	);
};

export default App;
