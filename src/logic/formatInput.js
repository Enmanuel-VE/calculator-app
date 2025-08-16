const normalize = (str) => {
	const result = str
		.replace(/\+\-/g, "-")
		.replace(/\-\+/g, "-")
		.replace(/--/g, "+")
		.replace(/\+\+/g, "+")
		.replace(/\(\+/g, "(")
		.replace(/(\d+)%/g, "($1/100)")
		.replace(/\)\(/g, ")*(")
		.replace(/(\d)(\()/g, "$1*(")
		.replace(/(\))(\d)/g, ")*$2");

	return result;
};

const sanitization = (input) => {
	const inputNormalized = normalize(input);
	const inputFormatSymbols = [`"`, ";", "`", "<", ">"];
	const conditional =
		/[a-zA-Z]/.test(inputNormalized) ||
		inputFormatSymbols.some((n) => inputNormalized.includes(n));

	if (conditional) return { ok: false, error: new Error("invalid format") };

	return { ok: true, data: inputNormalized };
};

const formatInput = (input) => {
	const formatInputProcess = sanitization(input);
	if (!formatInputProcess.ok) return formatInputProcess;

	return { ok: true, data: formatInputProcess.data };
};

export default formatInput;
