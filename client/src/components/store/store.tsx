import { createStore, useTreble } from "treble-gsm";

const shipments  = {
	piece: "",
	state: "unconfirmed",
};
const pieces  = {
	piece: "",
	images: [],
	selected: false,
};

const useAppStore = () => useTreble(); //as TAppStoreHook;

//App Store
const Store = createStore([
	// {
	// 	action: "updatelabels",
	// 	state: {
	// 		Scannedshipments: [shipments],
	// 	},
	// },
	{
		action: "updateshipment",
		state: {
			shipment: "",
		},
	},
	{
		action: "updatepiece",
		state: {
			piece: "",
		},
	},
	{
		action: "updateloadid",
		state: {
			loadid: "",
		},
	},
	{
		action: "updatepartialpiecestate",
		state: {
			ispartialpiecestate: false,
		},
	},
	// {
	// 	action: "updateallpieces",
	// 	state: {
	// 		allpieces: [pieces],
	// 	},
	// },
	// {
	// 	action: "updatepiece",
	// 	state: {
	// 		selectedpiece: "",
	// 	},
	// },
	 
]);

export { useAppStore };
export default Store;
