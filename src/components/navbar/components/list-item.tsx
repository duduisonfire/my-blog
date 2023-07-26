import React from 'react';

interface IItemList {
	children: React.JSX.Element;
}

export default function ListItem(props: IItemList) {
	return <li className="m-4 hover:text-purple-600">{props.children}</li>;
}
