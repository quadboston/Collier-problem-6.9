class Riemann0sDropped {
	constructor(riemann) {
		this.riemann = riemann;
	}

	toString() {
		let string = '';
		if (this.riemann.cs1 != '0') {
			string +=
				'<mfrac>' +
					'<mrow><mi>∂</mi><mi>' + this.riemann.cs1 + '</mi></mrow>' +
					'<mrow><mi>∂</mi><mi>' + indexToCoordinate(this.riemann.j) + '</mi></mrow>' +
				'</mfrac>';
		}
		if (this.riemann.cs2 != '0') {
			string +=	'<mo>−</mo>' +
				'<mfrac>' +
					'<mrow><mi>∂</mi><mi>' + this.riemann.cs2 + '</mi></mrow>' +
					'<mrow><mi>∂</mi><mi>' + indexToCoordinate(this.riemann.k) + '</mi></mrow>' +
				'</mfrac>';
		}
		for (let m = 0; m < 2; m++) {
			if (this.riemann.csm[m][0] != '0' && this.riemann.csm[m][1] != '0' ) {
				if (string != '') {
					string += ' <mo>+</mo> ';
				}
				string += this.riemann.csm[m][0] + this.riemann.csm[m][1];
			}
			if (this.riemann.csm[m][2] != '0' && this.riemann.csm[m][3] != '0' ) {
				string += ' <mo>−</mo>' + this.riemann.csm[m][2] + this.riemann.csm[m][3];
			}
		}
		return string == '' ? '0' : '<math xmlns>' + string + '</math>';
	}
}
