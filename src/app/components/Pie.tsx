import React from "react";

const cleanPercentage = (percentage: any) => {
	const tooLow = !Number.isFinite(+percentage) || percentage < 0;
	const tooHigh = percentage > 100;
	return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }: any) => {
	const r = 60;
	const circ = 2 * Math.PI * r;
	const strokePct = ((100 - pct) * circ) / 100;
	return (
		<circle
			r={r}
			cx={100}
			cy={100}
			fill="transparent"
			stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
			strokeWidth={"1rem"}
			strokeDasharray={circ}
			strokeDashoffset={pct ? strokePct : 0}
			strokeLinecap="round"></circle>
	);
};

const Text = ({ percentage, textColor, text, subtitle }: any) => {
	return (
		<g>
			<text
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize={"1.5em"}
				fill={textColor}>
				{text}
			</text>
			<text
				x="50%"
				y="65%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize={"0.8em"}
				fill={"#FF8250"}>
				{subtitle}
			</text>
		</g>
	);
};

const Pie = ({ percentage, colour, textColor, text, subtitle }: any) => {
	const pct = cleanPercentage(percentage);
	return (
		<svg
			width={200}
			height={200}
			style={{ marginLeft: "-0.7rem", marginTop: "-0.5rem" }}>
			<g transform={`rotate(-90 ${"100 100"})`}>
				<Circle colour="rgba(0,0,0,0.5)" />
				<Circle colour={colour} pct={pct} />
			</g>
			<Text
				percentage={percentage}
				textColor={textColor}
				text={text}
				subtitle={subtitle}
			/>
		</svg>
	);
};

export default Pie;
