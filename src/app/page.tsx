"use client";
import Image from "next/image";
import BackArror from "../assets/icons/vector.svg";
import Avatar from "../assets/image/avatar.jpg";
import { useState } from "react";
import CustomSelect from "./components/CustomSelect";
import Pie from "./components/Pie";

import watch from "../assets/image/watch.png";

const tabList = [
	"connected devices",
	"statistics",
	"accounts",
	"users",
	"groups",
];

export default function Home() {
	const [activeButton, setActiveButton] = useState<number | null>(1);

	const handleButtonClick = (index: number) => {
		setActiveButton(index);
	};

	return (
		<>
			<div className="container max-w-md mx-auto mb-0 bg-white text-black px-6 pt-8">
				<div className="flex flex-row justify-between items-center">
					<div className="flex items-center justify-center rounded-full bg-slate-200 w-16 h-16">
						<Image
							priority
							src={BackArror}
							alt="back arrow"
							width={20}
							height={20}
							// className="p-3"
						/>
						{/* <BackArror /> */}
					</div>
					<div className="flex items-center justify-center rounded-full bg-slate-100 w-16 h-16 overflow-hidden">
						<Image
							priority
							src={Avatar}
							alt="avatar"
							objectFit={"cover"}
							width={"100"}
							height={"100"}
							// className="p-3"
						/>
						{/* <BackArror /> */}
					</div>
				</div>
				<div className=" px-2 py-4">
					<p className="text-wrap text-4xl font-bold capitalize">Your</p>
					<p className="text-wrap text-4xl font-bold capitalize">
						fitness tracker
					</p>
				</div>

				<div className="flex space-x-2 overflow-x-auto scroll-m-0">
					{tabList.map((tab: string, index: number) => (
						<button
							key={index}
							className={`btn ${activeButton === index + 1 ? "active" : ""}`}
							onClick={() => handleButtonClick(index + 1)}>
							<p className="text-lg font-bold capitalize py-1 whitespace-nowrap px-4">
								{tab}
							</p>
						</button>
					))}
				</div>

				<div className="w-full flex justify-center h-80 mt-4 relative">
					<div className="inner-box"></div>
					<div className="middle-box"></div>
					<div className="top-box mt-12">
						<div className="flex flex-row justify-between items-center relative">
							<div className="flex flex-col p-4 py-8 justify-between h-full">
								<p className="capitalize text-ff8250">smart watch</p>
								<p className="capitalize text-slate-50 text-3xl font-extrabold">
									Fire bolt
								</p>
								<p className=" text-zinc-400 w-1/2 mt-2">
									Scan the device QR to connect
								</p>
								<button className=" btn active w-1/2 mt-8 ">scan</button>
							</div>
							<div className=" absolute top-0 right-0">
								<Image
									src={watch}
									alt="watch"
									height={310}
									width={310}
									style={{ marginTop: "-1rem", marginLeft: "2rem" }}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-rows-2 grid-cols-4 gap-4 mt-16 justify-center">
					<div className="meter-box row-span-2 col-span-2 justify-center items-center overflow-hidden">
						<Pie
							percentage={30}
							colour="#FF6020"
							textColor="#FFFFFF"
							text="2,772"
							subtitle="steps"
						/>
					</div>

					<div className="col-span-2 desc-box flex flex-col justify-center items-center">
						<p className="text-ff8250 font-medium capitalize">calories</p>
						<p className="text-2F2F2F text-xl font-extrabold">1200 Kcal</p>
					</div>

					<div className="col-span-2 desc-box flex flex-col justify-center items-center">
						<p className="text-ff8250 font-medium capitalize">water</p>
						<p className="text-2F2F2F text-xl font-extrabold">1.8 Ltrs</p>
					</div>
				</div>

				{/* input form part */}

				<div className="text-box px-4 pt-4 mt-8">
					<div className=" p-4 flex flex-col gap-4">
						<p className="text-xl font-bold capitalize text-slate-50 mt-2">
							Add detail
						</p>

						<input
							type="text"
							placeholder="Name"
							className=" rounded-full border w-full border-gray-300 bg-white w text-black placeholder-slate-300 font-bold px-4 py-3"
						/>

						<div className="flex flex-row gap-2">
							<input
								type="text"
								placeholder="Age"
								className=" rounded-full border w-1/2 border-gray-300 bg-white w text-black placeholder-slate-300 font-bold px-4 py-3"
							/>
							<input
								type="text"
								placeholder="Height"
								className=" rounded-full border w-1/2 border-gray-300 bg-white w text-black placeholder-slate-300 font-bold px-4 py-3"
							/>
						</div>

						<CustomSelect placeholder="Are you a gym member?" />
						<CustomSelect placeholder="Do you eat meat?" />
						<CustomSelect placeholder="Are you a cyclist?" />

						<button className=" save-btn w-full text-xl text-white font-bold px-4 py-3">
							Save Details
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
