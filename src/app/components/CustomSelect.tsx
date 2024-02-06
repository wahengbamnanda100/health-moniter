import { useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import SelectIcon from "../../assets/icons/select-icon.svg";
import Image from "next/image";

function CustomSelect({ placeholder }: { placeholder: string }) {
	const [selectedOption, setSelectedOption] = useState("");

	const handleChange = (event: any) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className="relative">
			<select
				value={selectedOption}
				onChange={handleChange}
				className="w-full rounded-full border border-gray-300 bg-white text-black font-bold px-4 py-3 appearance-none focus:outline-none">
				<option value="">
					{/* <option value="" className="py-2 hover:bg-gray-100"> */}
					{placeholder}
				</option>
				<option
					value="option1"
					// className={`w-auto py-2 hover:bg-gray-100 ${
					// 	selectedOption === "option1" ? "bg-ff6020 text-white" : ""
					//     }`}
				>
					Option 1
				</option>
				<option
					value="option2"
					// className={`w-auto py-2 hover:bg-gray-100 ${
					// 	selectedOption === "option2" ? "bg-ff6020 text-white" : ""
					//     }`}
				>
					Option 2
				</option>
				<option
					value="option3"
					// className={`w-auto py-2 hover:bg-gray-100 ${
					// 	selectedOption === "option3" ? "bg-ff6020 text-white" : ""
					//     }`}
				>
					Option 3
				</option>
			</select>
			<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
				{/* <ArrowDownIcon className="h-6 w-6 text-gray-400" /> */}
				<Image src={SelectIcon} alt="select-icon" width={20} height={20} />
			</div>
		</div>
	);
}

export default CustomSelect;
