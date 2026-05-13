class Riemann {
	constructor(h, i, j, k) {
		this.h = h;
		this.i = i;
		this.j = j;
		this.k = k;
		this.cs1 = new ChristoffelSymbol(h, i, k)
		this.cs2 = new ChristoffelSymbol(h, i, j)
		this.csm = [];
		for (let m = 0; m < 2; m++) {
			this.csm[m] = [];
			this.csm[m][0] = new ChristoffelSymbol(m, i, k);
			this.csm[m][1] = new ChristoffelSymbol(h, m, j);
			this.csm[m][2] = new ChristoffelSymbol(m, i, j);
			this.csm[m][3] = new ChristoffelSymbol(h, m, k);
		}
	}

	productString(f1, f2) {
		return f1 == 0 || f2 == 0 ? f1 + '·' + f2 : f1 + f2;
	}

	express() {
		let mTerms = '';
		for (let m = 0; m < 2; m++) {
			mTerms += this.productString(this.csm[m][0], this.csm[m][1]) + 
				'<math xmlns><mo>−</mo></math>' + 
				this.productString(this.csm[m][2], this.csm[m][3]);
			if (m != 1) {
				mTerms += '<math xmlns><mo>+</mo></math>';
			}
		}
		return '<math xmlns>' +
			'<mfrac>' +
				'<mrow><mi>∂</mi><mi>' + this.cs1 + '</mi></mrow>' +
				'<mrow><mi>∂</mi><mi>' + indexToCoordinate(this.j) + '</mi></mrow>' +
			'</mfrac>' +
			'<mo>−</mo>' +
			'<mfrac>' +
				'<mrow><mi>∂</mi><mi>' + this.cs2 + '</mi></mrow>' +
				'<mrow><mi>∂</mi><mi>' + indexToCoordinate(this.k) + '</mi></mrow>' +
			'</mfrac>' +
			'<mo>+</mo>' +
		'</math>' +
		mTerms;
	}

	drop0s() {
		// This function would contain the logic to drop the zero values of the Riemann curvature tensor.
		// For now, it just returns a placeholder value.
		return '?';
	}

	toString() {
		return '<math xmlns>' +
			'<mmultiscripts>' +
				'<mi>R</mi>' +
				'<mi>' + indexToCoordinate(this.i) + '</mi>' +
				'<mi>' + indexToCoordinate(this.h) + '</mi>' +
				'<mi>' + indexToCoordinate(this.j) + '</mi>' +
				'<none/>' +
				'<mi>' + indexToCoordinate(this.k) + '</mi>' +
				'<none/>' +
			'</mmultiscripts>' +
		'</math>';
	}
}
