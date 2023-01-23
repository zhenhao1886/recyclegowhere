 /* eslint-disable */
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Input, Select, Text, VStack } from "@chakra-ui/react";
import { ChangeEvent, MouseEventHandler, useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "theme";
import { TItems } from "../types";
import { methods } from "./fbdata/result";
import firebase from 'firebase/compat/app';
import { db } from "./fbdata/fb";

interface ItemProps {
	items: TItems[];
	handleUpdateItem: (
		type: keyof Pick<TItems, "name" | "method">,
		index: number,
		value: string,
	) => void;
	handleAddItem: () => void;
	handleRemoveItem: (index: number) => void;
}


export const Items = ({ items, handleUpdateItem, handleAddItem, handleRemoveItem }: ItemProps) => {
	//const { items: itemList } = {};

	const isLastItem = useCallback(
		(index: number) => {
			return index === items.length - 1;
		},	
		[items.length],
	);

	const [fbitems, setItems] = useState<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]>([])

	const getItemsFromDatabase = async () => {
	  const querySnapshot = await db.collection("itemsAccepted").get();
	  const result: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[] = [];
	  querySnapshot.forEach((snapshot)=>result.push(snapshot))
	  setItems(result)
	}

	useEffect(()=>{
		getItemsFromDatabase();
	  },[])



	return (
		<div>
			<Text fontWeight={500} fontSize="md" mb="8px">
				Items you wish to recycle:
			</Text>
			<VStack spacing="10px">
				{items.map((item, index) => (
					<HStack key={`item-${index}`} spacing="6px" width="100%">
						<StyledSelect
							placeholder="Item"
							color={item.name ? COLORS.Select.body : COLORS.Input.placeholder}
							iconColor={COLORS.Select.icon}
							value={item.name}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								e.target.value && handleUpdateItem("name", index, e.target.value);
							}}
						>
							{/* We can map Sheety data into this select box. */}

							{/* <option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option> */}

							{/* {getItems().then((e) => {
								return e.map(f=><option value={`option${f.index}`}>{f.name}</option>)
							}).map()} */}

							{fbitems.map(f=><option value={`option${f.data().itemID}`}>{f.data().name}</option>)}

						</StyledSelect>
						<StyledSelect
							flexShrink={1.5}
							placeholder="Method"
							color={item.method ? COLORS.Select.body : COLORS.Select.placeholder}
							iconColor={COLORS.Select.icon}
							value={item.method}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								e.target.value && handleUpdateItem("method", index, e.target.value);
							}}
						>
							{methods.map((name, index)=>{
								return <option value={`option${index}`}>{name}</option>
							})}
							
						</StyledSelect>
						{isLastItem(index) ? (
							<AddLineButton onClick={handleAddItem} />
						) : (
							<RemoveLineButton
								onClick={() => {
									handleRemoveItem(index);
								}}
							/>
						)}
					</HStack>
				))}
			</VStack>
		</div>
	);
};

const StyledSelect = styled(Select)`
	> option:first-child {
		color: var(--chakra-colors-select-placeholder);
	}
	> option:not(:first-child) {
		color: var(--chakra-colors-chakra-body-text);
	}
`;

interface ButtonProps {
	onClick: MouseEventHandler<HTMLButtonElement>;
}
const RemoveLineButton = ({ onClick }: ButtonProps) => (
	<IconButton
		variant="solid"
		color={COLORS.gray[700]}
		background={COLORS.gray[100]}
		aria-label="remove line"
		icon={<CloseIcon boxSize="3" />}
		onClick={onClick}
	/>
);
const AddLineButton = ({ onClick }: ButtonProps) => (
	<IconButton
		variant="solid"
		color={COLORS.gray[700]}
		background={COLORS.gray[100]}
		aria-label="add line"
		icon={<AddIcon />}
		onClick={onClick}
	/>
);
