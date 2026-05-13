class ChristoffelSymbol {
	values = [
		[	// upper θ
			[0, 0],												// θθθ, θθϕ
			[0, '−sin θ cos θ']	// θϕθ, θϕϕ
		],
		[ // upper ϕ
			[0, 'cot θ'],							// ϕθθ, ϕθϕ
			['cot θ', 0]								// ϕϕθ, ϕϕϕ
		],
	];
	static show0s = false;
	static showNon0Value = false;

	constructor(upper, lower1, lower2) {
		this.upper = upper;
		this.lower1 = lower1;
		this.lower2 = lower2;
	}

	toString() {
		 if (ChristoffelSymbol.showNon0Value && this.values[this.upper][this.lower1][this.lower2] != 0) {
			return '<mtext>(' + this.values[this.upper][this.lower1][this.lower2] + ')</mtext>';
		 }
		else if (ChristoffelSymbol.show0s && this.values[this.upper][this.lower1][this.lower2] === 0) {
			return '0';
		} else {
			return '<math xmlns>' +
				'<mmultiscripts>' +
					'<mi>Γ</mi>' +
					'<mi>' + indexToCoordinate(this.lower1) + '</mi>' +
					'<mi>' + indexToCoordinate(this.upper) + '</mi>' +
					'<mi>' + indexToCoordinate(this.lower2) + '</mi>' +
					'<none/>' +
				'</mmultiscripts>' +
				'</math>';
		}
	}
}
