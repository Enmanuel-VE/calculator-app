function evalResult(resultProcess) {
	try {
		const output = new Function(`return ${resultProcess}`)();
		const isResultValid = isNaN(output);

		if (isResultValid) throw new Error("Is not a number");

		return { ok: true, data: output };
	} catch (error) {
		return { ok: false, error };
	}
}

export default evalResult;
